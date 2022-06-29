const OLOG_ERC20 = artifacts.require("OLOG_ERC20");
const OLOG_ERC721 = artifacts.require("OLOG_ERC721");

//컨트랙트명으로 불러옴
module.exports = function (deployer) {
  deployer.deploy(OLOG_ERC20, {
    from: "0xcEF341F5027870A111F82713947aC5C188650E06",
  });
  deployer.deploy(OLOG_ERC721, {
    from: "0xcEF341F5027870A111F82713947aC5C188650E06",

  });
  //불러온 컨트랙트 디플로이
};
