import type { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
	webServer: {
		command: 'yarn build && yarn preview',
		port: 4173
	},
	use: {
		baseURL: 'http://localhost:4173/lhs-underwater-robotics'
	},
	testDir: 'tests'
};

export default config;
