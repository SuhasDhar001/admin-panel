import React from 'react'
import 
 {BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify}
 from 'react-icons/bs'
const Header = ({OpenSideBar}) => {
    
    return (
        <>
     <div className="container">
       
     </div>
        <header className='header'>
            <div className='menu-icon'>
                <BsJustify className='icon' onClick={OpenSideBar}/>
            </div>
            <div className='header-left'>
                <BsSearch  className='icon'/>
            </div>
            <div className='header-right'>
                <BsFillBellFill className='icon'/>
                <BsFillEnvelopeFill className='icon'/>
                <BsPersonCircle className='icon'/>
            </div>
        </header>
        </>
      )
}

export default Header
