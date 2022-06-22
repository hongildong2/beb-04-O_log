//서버용 계정 생성
Mnemonic wallet
//DB에 첫번째 유저로 서버용 계정 집어넣기
Users.insertmany(server);
//가나슈로부터 Faucet을 통해 받아오기
//API를 통해 거기서 ganache계정이 이더리음울 전송하도록 api 작성
//api에접근한 사람이 서버 관리자인지 확인
const web3 = new Web3('http://localhost:7454);

const accounts = await web3.eth.getAccounts();
console.log(accounts);