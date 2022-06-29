import React, {useState} from 'react'
import './Nftcard.css'
import Modal from '../components/Modal';

export default function Nftcard(props) {

  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
        <button style= {{border: "none"}} onClick={openModal} >
          <div className='nftcard'>
          <img className='nftcard_image' src='nft_img.png' />
          <div className='nftcard_content'>
            <span className='name'>이름</span>
            <span className='reward'>리워드</span>
            <span className='price'>가격</span>
          </div>
        </div>
      </button>
      <Modal open={modalOpen} close={closeModal} header="Modal heading">
      </Modal>
    </div>

  )
}

