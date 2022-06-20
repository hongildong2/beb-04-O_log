import React from 'react'
import './Uploadpost.css'

export default function Uploadpost({handleSubmit}) {
  return (
    <div className='form_container'>
      <div className='title'>Upload Your Post</div>
      <div className='input_section'>
        <div className='inputs'>
          <input placeholder='제목'/>
          <input placeholder='링크'/>
        </div>
        <div className='submit'>
          <button onClick={handleSubmit}>upload</button>
        </div>
      </div>
    </div>
  )
}
