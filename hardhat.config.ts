import { HardhatUserConfig } from "@hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import * as dotenv from "dotenv";

dotenv.config();

const directory = process.cwd();

console.log("hardhat.config.ts current directory: ", directory);

// const ALCHEMY_TESTNET_RPC_URL = process.env.ALCHEMY_TESTNET_RPC_URL;
// const ALCHEMY_MAINNET_RPC_URL = process.env.ALCHEMY_MAINNET_RPC_URL;
// const MAINNET_PRIVATE_KEY = process.env.MAINNET_PRIVATE_KEY;
const MUMBAI_PRIVATE_KEY ="cefa5bd10fd0d69956d3c230d985593a492949fe4746747612ad56890fa43bb2";
const MUMBAI_RPC_URL = "https://polygon-mumbai.g.alchemy.com/v2/iUDBNdF7zD-AzCQ0oNxW7m1vozjJIw9s/";

const config: HardhatUserConfig = {
	solidity: {
		version: "0.8.17",
		settings: {
			optimizer: {
				enabled: true,
				runs: 200,
			},
		},
	},
	paths: {
		sources: "~/solidity/contracts",
		cache: "~/solidity/cache",
		artifacts: "~/solidity/artifacts",
	},
	networks: {
		mumbai: {
			url: MUMBAI_RPC_URL,
			accounts: [MUMBAI_PRIVATE_KEY!]
		}
	}
};

export default config;
