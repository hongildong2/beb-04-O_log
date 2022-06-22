const ProjectERC20 = artifacts.require("ProjectERC20");
const ProjectERC721 = artifacts.require("ProjectERC721");

//컨트랙트명으로 불러옴
module.exports = function (deployer) {
  deployer.deploy(ProjectERC20, {
    from: "0xF3158009D2167C0148B7aA9381055D98Af9352D2",
  });
  deployer.deploy(ProjectERC721, {
    from: "0xF3158009D2167C0148B7aA9381055D98Af9352D2",
  });
  //불러온 컨트랙트 디플로이
};
