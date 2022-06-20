import React from 'react'
import './Orginfo.css'

export default function Orginfo({handleSync}) {
  return (
    <div className='org_info'>
      <div className='org_content'>
        <div className='org_element sub'>total</div>
        <div className='org_element big'>20 ORG</div>
        <div className='org_element sub'>사용가능한 ORG 15</div>
        <div className='org_element section'>
          <button onClick={handleSync}>sync</button>
        </div>
      </div>
    </div>
  )
}
