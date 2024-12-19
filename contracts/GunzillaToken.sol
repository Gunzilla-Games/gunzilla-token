// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.10;

import "@openzeppelin/contracts-upgradeable/token/ERC20/extensions/ERC20BurnableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/AccessControlUpgradeable.sol";

contract GunzillaToken is ERC20BurnableUpgradeable, AccessControlUpgradeable {

    function initialize() public initializer {
        __ERC20_init_unchained("Gunzilla Token", "GUN");
        __AccessControl_init_unchained();
        _grantRole(DEFAULT_ADMIN_ROLE, 0x02d16347ba80b1d5813850d4336e2f702212bc51);
    }

    function mint(address receiver, uint256 amount) external onlyRole(DEFAULT_ADMIN_ROLE) {
        _mint(receiver, amount);
    }

    function burn(uint256 value) public override onlyRole(DEFAULT_ADMIN_ROLE) {
        _burn(_msgSender(), value);
    }

    function burnFrom(address account, uint256 value) public override onlyRole(DEFAULT_ADMIN_ROLE) {
        _spendAllowance(account, _msgSender(), value);
        _burn(account, value);
    }
}
