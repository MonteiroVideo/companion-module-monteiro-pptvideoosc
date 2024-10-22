export function getPresetDefinitions() {
	const presets = {
		preset_esc: {
			type: 'button',
			category: 'PPT',
			name: 'Send ESC Command',
			style: {
				text: 'ESC',
				size: '18',
				color: '16777215',
				bgcolor: '0',
				show_topbar: false
			},
			steps: [
				{
					down: [
						{
							actionId: 'ESC',
						},
					],
					up: [],
				},
			],
		},
		preset_next: {
			type: 'button',
			category: 'PPT',
			name: 'Send NEXT Command',
			style: {
				text: '>\nNext',
				size: '14',
				color: '16777215',
				bgcolor: '25600',
				show_topbar: false
			},
			steps: [
				{
					down: [
						{
							actionId: 'NEXT',
						},
					],
					up: [],
				},
			],
		},
		preset_previous: {
			type: 'button',
			category: 'PPT',
			name: 'Send PREVIOUS Command',
			style: {
				text: '<\nPrevious',
				size: '14',
				color: '16777215',
				bgcolor: '9109504',
				show_topbar: false
			},
			steps: [
				{
					down: [
						{
							actionId: 'PREVIOUS',
						},
					],
					up: [],
				},
			],
		},
		preset_exit_ppt: {
			type: 'button',
			category: 'PPT',
			name: 'Send exit ppt Command',
			style: {
				text: 'PPT\nEXIT',
				size: '18',
				color: '16777215',
				bgcolor: '0',
				show_topbar: false
			},
			steps: [
				{
					down: [
						{
							actionId: 'EXIT_PPT',
						},
					],
					up: [],
				},
			],
		},
		preset_exit_video: {
			type: 'button',
			category: 'VIDEO',
			name: 'Send exit video Command',
			style: {
				text: 'VIDEO EXIT',
				size: '18',
				color: '16777215',
				bgcolor: '0',
				show_topbar: false
			},
			steps: [
				{
					down: [
						{
							actionId: 'EXIT_VIDEO',
						},
					],
					up: [],
				},
			],
		},
		preset_hour: {
            type: 'button',
            category: 'Display',
            name: 'HOUR',
            style: {
                text: '$(PPT_VIDEO:timer_hours)',
                size: 'AUTO',
                color: '16777215',
                bgcolor: '9109504',
                show_topbar: false
            },
            steps: [
                {
                    down: [],
                    up: [],
                },
            ],
        },
        preset_minute: {
            type: 'button',
            category: 'Display',
            name: 'MINUTE',
            style: {
                text: '$(PPT_VIDEO:timer_minutes)',
                size: 'AUTO',
                color: '16777215',
                bgcolor: '9109504',
                show_topbar: false
            },
            steps: [
                {
                    down: [],
                    up: [],
                },
            ],
        },
        preset_second: {
            type: 'button',
            category: 'Display',
            name: 'SECOND',
            style: {
                text: '$(PPT_VIDEO:timer_seconds)',
                size: 'AUTO',
                color: '16777215',
                bgcolor: '9109504',
                show_topbar: false
            },
            steps: [
                {
                    down: [],
                    up: [],
                },
            ],
        },
        preset_timer: {
            type: 'button',
            category: 'Display',
            name: 'TIMER',
            style: {
                text: '$(PPT_VIDEO:timer)',
                size: 'AUTO',
                color: '16777215',
                bgcolor: '9109504',
                show_topbar: false
            },
            steps: [
                {
                    down: [],
                    up: [],
                },
            ],
        },
		preset_slide: {
            type: 'button',
            category: 'Display',
            name: 'SLIDE',
            style: {
                text: '$(PPT_VIDEO:slide_info)',
                size: 'AUTO',
                color: '16777215',
                bgcolor: '9109504',
                show_topbar: false
            },
            steps: [
                {
                    down: [],
                    up: [],
                },
            ],
        },
	}

	for (let i = 1; i <= 20; i++) {
		const pptCommand = i < 10 ? `PPT\n0${i}` : `PPT\n${i}`;
		const pptText = i < 10 ? `ppt0${i}` : `ppt${i}`;
		presets[`preset_${pptCommand}`] = {
			type: 'button',
			category: 'PPT',
			name: `Send ${pptCommand.toUpperCase()} Command`,
			style: {
				text: pptCommand.toUpperCase(),
				size: '18',
				color: '16777215',
				bgcolor: '139',
				show_topbar: false
			},
			steps: [
				{
					down: [
						{
							actionId: pptText.toUpperCase(),
						},
					],
					up: [],
				},
			],
		};
	}

	for (let i = 1; i <= 10; i++) {
		const videoCommand = i < 10 ? `VIDEO\n0${i}` : `VIDEO\n${i}`;
		const videoText = i < 10 ? `video0${i}` : `video${i}`;
		presets[`preset_${videoCommand}`] = {
			type: 'button',
			category: 'VIDEO',
			name: `Send ${videoCommand.toUpperCase()} Command`,
			style: {
				text: videoCommand.toUpperCase(),
				size: '18',
				color: '16777215',
				bgcolor: '25600',
				show_topbar: false
			},
			steps: [
				{
					down: [
						{
							actionId: videoText.toUpperCase(),
						},
					],
					up: [],
				},
			],
		};
	}

	return presets;
}
