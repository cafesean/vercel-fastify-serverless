// import { HardhatUserConfig } from "hardhat/config";
// import "@nomicfoundation/hardhat-toolbox";
// import * as dotenv from "dotenv";

// dotenv.config();

// const NETWORK_MAINNET_RPC_URL = process.env.ALCHEMY_URL;
// const NETWORK_TESTNET_RPC_URL = process.env.ALCHEMY_URL;
// const TESTNET_PRIVATE_KEY = process.env.TESTNET_PRIVATE_KEY;

// const config: HardhatUserConfig = {
// 	solidity: {
// 		version: "0.8.17",
// 		settings: {
// 			optimizer: {
// 				enabled: true,
// 				runs: 200,
// 			},
// 		},
// 	},
// 	defaultNetwork: "hardhat",
// 	networks: {
// 		hardhat: {
// 			allowUnlimitedContractSize: false,
// 		},
// 	},
// 	paths: {
// 		sources: "./contracts",
// 		tests: "./ethers/test",
// 		cache: "./cache",
// 		artifacts: "./contracts/artifacts",
// 	},
// };

// export default config;
// require dotenv 
require("dotenv").config();


require("@nomicfoundation/hardhat-toolbox");
const ALCHEMY_TESTNET_RPC_URL = process.env.ALCHEMY_TESTNET_RPC_URL;
const ALCHEMY_MAINNET_RPC_URL = process.env.ALCHEMY_MAINNET_RPC_URL;
const MAINNET_PRIVATE_KEY = process.env.MAINNET_PRIVATE_KEY;
const MUMBAI_PRIVATE_KEY = process.env.MUMBAI_PRIVATE_KEY;
const MUMBAI_RPC_URL = "https://polygon-mumbai.g.alchemy.com/v2/iUDBNdF7zD-AzCQ0oNxW7m1vozjJIw9s";

// const { ethers } = require("hardhat");
// require('@openzeppelin/hardhat-upgrades');


// require("dotenv").config();
// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html


// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
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
		sources: "./contracts",
		cache: "./cache",
		artifacts: "./artifacts",
	},
	networks: {
		mumbai: {
			url: MUMBAI_RPC_URL,
			accounts: [MUMBAI_PRIVATE_KEY]
		}
	}
};
