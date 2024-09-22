import React from 'react'

function Header() {
  return (
    <div className="headerSection">
        <div className="left">
            <div className="title">
                <h2>Shopping Mall</h2>
            </div>
        </div>
        <div className="center">
            <ul>
                <li>Men</li>
                <li>Women</li>
                <li>Kids</li>
                <li>Beauty</li>
            </ul>
        </div>    
        <div className="search">
            <input type="search" placeholder="search"/>
        </div>

        
        <div className="right">
            <div className="signin">
                signup/sigin
            </div>
            <div className="cart">
                cart
            </div>

        </div>
    </div>
  )
}

export default Header