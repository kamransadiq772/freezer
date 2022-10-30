import React from "react";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../assets/logo.png'
import langPic from '../assets/langPic.png'
import './nav.css'

const Nav = ({resListView,setresListView}) => {

  const showList = (e) =>{
    e.preventDefault()
    setresListView(!resListView)
  }

  return (
    <div className="outerNav">
      <div className="innerNav">
        <div className="logoContainer" style={{color:'white',fontSize:20,fontWeight:'600',letterSpacing:2}}>Freezers-آصف للتبريد(Mecca)</div>
        <div className="rightContainer">
          {/* <div className="menuContainer">
            <div className="menuItem">HOME</div>
            <div className="menuItem">ABOUT US</div>
            <div className="menuItem">OUR SYSTEMS</div>
          </div> */}
          {/* <div className="langContainer">
            <div className="langAvatar"><img src={langPic} alt="" /></div>
            <div className="langCode">EN</div>
            <div className="downBtn"><ArrowDropDownIcon/></div>
          </div> */}
          <div className="contactUsBtnContainer">
            <button className="contactUsBtn"><a href="tel:+966560024315" style={{textDecoration:'none', color:'black'}}>+966560024315</a></button>
          </div>
          <div className="linesIconContainer" onClick={showList}><MenuIcon /></div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
