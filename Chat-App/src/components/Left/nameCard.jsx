import './nameCard.css'
import React, { useState } from 'react';
// import React from 'react'
// import { counterContext } from '../../context/context.js';

const nameCard = () => {
  const [isTrue, setIsTrue] = useState(false);

  const handleClick = () => {
    setIsTrue(true)
    // console.log("istrue is updated to" ,isTrue)
  }

  return (
    <div >
      {/* <counterContext.Provider value={isTrue}> */}
      <div className="NameCard" onClick={handleClick}>
        <div className="pic">
          <img src="https://www.shareicon.net/data/512x512/2016/09/15/829459_man_512x512.png" alt="" />
        </div>
        <div className="content">
          <div className="info">
            <h4>Andrea mendoza</h4>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime accusamus sit repellendus doloremque aperiam rem?</span>
          </div>
          <div className="time">14m</div>
        </div>
      </div>
      {/* </counterContext.Provider> */}
    </div>
  )
}

export default nameCard
export const isTrue = false;