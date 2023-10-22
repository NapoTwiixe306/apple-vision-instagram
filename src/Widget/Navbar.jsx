import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faUpRightAndDownLeftFromCenter,
  faDownLeftAndUpRightToCenter,
} from '@fortawesome/free-solid-svg-icons'
import Home from '../img/Navbar/Home.png'
import Settings from '../img/Navbar/Settings.png'
import HomePageExtends from '../Views/HomePageExtends'

function Navbar() {
  const [showComponents, setShowComponents] = useState(false)
  const [showHomePageExtends, setShowHomePageExtends] = useState(false)

  const handleIconClick = () => {
    setShowComponents(!showComponents)
    setShowHomePageExtends(!showHomePageExtends)
  }

  const icon = showComponents
    ? faUpRightAndDownLeftFromCenter
    : faDownLeftAndUpRightToCenter

  return (
    <>
      <div className="Navbar__Container">
        <div className="Navbar">
          <div className="Navbar__Icons">
            <img src={Home} alt="" />
            <img src={Settings} alt="" />
            <div className="largeScreen">
              <FontAwesomeIcon
                icon={icon}
                onClick={handleIconClick}
                size="1x"
              />
            </div>
          </div>
        </div>
      </div>
      {showHomePageExtends && <HomePageExtends />}
    </>
  )
}

export default Navbar
