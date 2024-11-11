import { InstanceBase, InstanceStatus, runEntrypoint, TCPHelper } from '@companion-module/base'
import { ConfigFields } from './config.js'
import { getActionDefinitions } from './actions.js'
import { getPresetDefinitions } from './presets.js'
import { getVariableDefinitions } from './variables.js';

class PptVideo extends InstanceBase {
	async init(config) {
		this.config = config

		this.setActionDefinitions(getActionDefinitions(this))
		this.setPresetDefinitions(getPresetDefinitions())
		await this.configUpdated(config)
		this.init_tcp_variables()
	}

	async configUpdated(config) {
		if (this.socket) {
			this.socket.destroy()
			delete this.socket
		}

		this.config = config
		this.init_tcp() 
		this.init_tcp_variables()
	}

	async destroy() {
		if (this.socket) {
			this.socket.destroy()
		} else {
			this.updateStatus(InstanceStatus.Disconnected)
		}
	}

	getConfigFields() {
		return ConfigFields
	}

	init_tcp() {
		if (this.socket) {
			this.socket.destroy()
			delete this.socket
		}

		this.updateStatus(InstanceStatus.Connecting)

		if (this.config.host) {
			this.socket = new TCPHelper(this.config.host, this.config.port)
			this.socket.on('status_change', (status, message) => {
				this.updateStatus(status, message)
			})

			this.socket.on('data', (data) => {
				const message = data.toString('utf8');
				const params = new URLSearchParams(message);
				const hours = params.get('hours');
				const minutes = params.get('minutes');
				const seconds = params.get('seconds');
				const time = params.get('time');
				const slideInfo = params.get('slide_info');
	
				if (slideInfo) {
					this.setVariableValues({ slide_info: slideInfo });
					this.log('info', `Received slide info: ${slideInfo}`);
				}
			    	if (hours && minutes && seconds && time) {
					this.setVariableValues({
						timer_hours: hours,
						timer_minutes: minutes,
						timer_seconds: seconds,
						timer: time,
					});
					this.log('info', `Received time: ${time} (H: ${hours}, M: ${minutes}, S: ${seconds})`);
				} 
			});
	
			this.socket.on('error', (err) => {
				this.updateStatus(InstanceStatus.ConnectionFailure, err.message);
				this.log('error', 'Network error: ' + err.message);
			});
		} else {
			this.updateStatus(InstanceStatus.BadConfig);
		}
	}
  init_tcp_variables() {
        const variables = getVariableDefinitions(); // Usa a função importada
        this.setVariableDefinitions(variables);
    }
}

runEntrypoint(PptVideo, [])
