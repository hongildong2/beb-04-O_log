//사용자에게 Wallet Sync 요청받으면 DB에 있는 데이터를 트랜잭션 시켜서 동기화, ERC20에서 event 에밋하도록 하자.
let Contract = require("web3-eth-contract");
module.exports = {
  walletSync: async (req, res) => {
    const userID = req.body.userid;
    const queryResult = await Users.findbyID(userID);
    const expectedToken = queryResult[0].expectedtoken;
    const receivedToken = queryResult[0].receivedtoken;
    const userwalletaddress = queryResult[0].userwalletaddress;

    Contract.setProvider("GANACHE LOCAL");
    let contract = new Contract(ABI, address);
    const ERC20balance = await contracts.methods
      .balanceOf(userwalletaddress)
      .on("receipt", () => {});

    if (ERC20balance === receivedToken) {
      await contract.methods.mintToken(userwalletaddress, expectedToken);
      // add ethereum event listener
      receivedToken = receivedToken + expectedToken;
      expectedToken = 0;

      const filter = { userid: userID };
      const update = {
        receivedtoken: receivedToken,
        expectedtoken: expectedToken,
      };
      let result = await Users.findOneAndUpdate(filter, update);
      res.send(result);
    } else {
      console.log("something went wrong");
    }
  },
  //특정 주소로 get 요청 받음, get 요청이면 userid는 어떻게 받지?
  //mongoose로 사용자의 received token, expected token 조회
  //web3로 ERC20에 접근해서 사용자의 토큰 밸런스 확인
  //사용자의 토큰 밸런스가 received token과 일치하는지 확인
  //다르다면 관리자에게 에러 전송, 아래 로직 취소
  //토큰 밸런스가 일치하다면 사용자에게 expected token만큼 ERC20에서 전송
  //전송 확인 후(event로 전송되었는지 확인, web3.subscribe) DB 에 received token 반영
  // 위 이벤트가 일어났을때 클라이언트에 알려야되나?
};
