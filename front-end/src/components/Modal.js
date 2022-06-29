import React, {useContext} from 'react';
import './Modal.css';
import axios from 'axios'
import { AuthContext } from '../context/store'

export default function(props){
  // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
  const { open, close, header } = props;
  const {authstate} = useContext(AuthContext);

  var btn_nftcart = '강화하기';
  const path = (window.location.pathname).split('/')
  //uri를 가지고 버튼 변경. 구매하기, 강화하기 
  if(path[1] == 'marketplace'){
    btn_nftcart = '구매하기';
  }else if(path[1] == 'mypage'){
    btn_nftcart = '강화하기';
  }

  axios.request({
    method: 'GET',
    url:'http://localhost:3030/offchain/nftmarket/myNFT',
  })
  .then((res) => {
    console.log('myNFT 응답입니다.',res.data.tokenURI)
  })
  .catch((err) => console.log(err))


  const handleSubmit = () => {
     //인증 여부 확인 후 post 요청
    if(!authstate.auth) {
      alert('로그인 필요')
      return;
    }

      //구매하기 눌렀을때, tokenUri 만 보냄
    if(path[1] == 'marketplace'){
      console.log("구매하기 axios");
      axios.request({
        method: 'POST',
        url:'http://localhost:3030/onchain/serverNFYBuy',
        data: { tokenURI: "kkk_tokenuri"},
        withCredentials: true
      })
      .then((res) => {
        console.log('구매하기 응답입니다.',res)
        //alret울림...?
      })
      .catch((err) => console.log(err))
    }

  //mypage에서는 강화하기 진행
    if(path[1] == 'mypage'){
      axios.request({
        method: 'POST',
        url:'http://localhost:3030/onchain/upgradeNFT',
        data: { username: authstate.username, tokenId : "1"}, //tokenId 추가해야함
        withCredentials: true
      })
      .then((res) => {
        console.log('강화하기 응답입니다.',res)
        //alret울림...?
      })
      .catch((err) => console.log(err))
    }

  }
      



  return (
    // 모달이 열릴때 openModal 클래스가 생성된다.
    <div className={open ? 'openModal modal' : 'modal'}>
      {open ? (
        <section>
          <header>
            {header}
            <button className="close" onClick={close}>
              &times;
            </button>
          </header>

          <main>
            {props.children}
            <div>
              <div class = 'modal_grid'>
                <div class = 'g1'>
                 <img className='nftcard_image' src='nft_img.png' />
                </div>
                <div class = 'g2'>
                <div className='text1'><span >NFT 이름</span></div>
                <div><span className='text1'>NFT 설명</span></div>
                <div><span className='text1'>리워드 레벨</span></div>
                <div><span className='text1'>구매 필요한 토큰</span></div>
                </div>
                
              </div>
            </div>
          </main>

          <footer>
            <button onClick = {handleSubmit}>{btn_nftcart}</button>
          </footer>
        </section>
      ) : null}
    </div>
  );
};