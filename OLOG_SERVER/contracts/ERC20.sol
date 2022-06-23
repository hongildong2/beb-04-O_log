// SPDX-License-Identifier: GPL-3.0
pragma solidity 0.8.10;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract ZeppelinTestToken is ERC20, Ownable {
    constructor() ERC20("ZeppelinTestToken", "ZTT") {}

    function mintToken(address to, uint256 amount) public onlyOwner returns (bool){
        require(to != address(0x0));
        require(amount > 0);
        _mint(to, amount);
        _approve(to, msg.sender, allowance(to, msg.sender) + amount);

        return true;
    }

    function multiMintToken(address[] calldata toArr, uint256[] calldata amountArr) public onlyOwner returns (bool){
	require(toArr.length == amountArr.length);
	for(uint256 i = 0; i < toArr.length; i++) {
	    require(toArr[i] != address(0x0));
	    require(amountArr[i] > 0);
	    _mint(toArr[i], amountArr[i]);
	    _approve(toArr[i], msg.sender, allowance(toArr[i], msg.sender) + amountArr[i]);
	}
	return true;
}

}