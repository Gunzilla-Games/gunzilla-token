// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition

import {buildModule} from "@nomicfoundation/hardhat-ignition/modules";


const GunzillaTokenModule = buildModule("GunzillaTokenModule", (m) => {

    const GunzillaTokenImplementation = m.contract("GunzillaToken");
    const intializeData = m.encodeFunctionCall(GunzillaTokenImplementation, "initialize");
    const TransparableUpgradeableProxy = m.contract("TransparableUpgradeableProxy", [GunzillaTokenImplementation, "0x02d16347ba80B1D5813850d4336E2f702212Bc51", intializeData])

    return {TransparableUpgradeableProxy};
});

export default GunzillaTokenModule;
