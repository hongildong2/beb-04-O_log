import React from 'react';
import './Modal.css';

export default function(props){
  // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
  const { open, close, header } = props;

  var btn_nftcart = '강화하기';
  const path = (window.location.pathname).split('/')
  //console.log(path[1])
  //console.log(path[2])
  if(path[1] == 'marketplace'){
    btn_nftcart = '구매하기';
  }else if(path[1] == 'mypage'){
    btn_nftcart = '강화하기';
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
              여기에 nft 정보를 넣습니다
            </div>
          </main>

          <footer>
            <button>{btn_nftcart}</button>
          </footer>
        </section>
      ) : null}
    </div>
  );
};