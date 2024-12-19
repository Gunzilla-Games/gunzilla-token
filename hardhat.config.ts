import type { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox-viem";
import {resolve} from "path";
import {config as dotenvConfig} from "dotenv";

dotenvConfig({path: resolve(__dirname, "./.env")});

const config: HardhatUserConfig = {
  solidity: "0.8.28",
  networks: {
    base: {
      url:"https://base.llamarpc.com",
      accounts:[process.env.PRIVATE_KEY as string]
    },
    testgun:{
      url:"https://rpc.gunz.dev/ext/bc/ryk9vkvNuKtewME2PeCgybo9sdWXGmCkBrrx4VPuZPdVdAak8/rpc",
      accounts:[process.env.PRIVATE_KEY as string]
    }
  }
};

export default config;
