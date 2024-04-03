import React from 'react';
import './Header.css'

const Header = function(props){
    return (
    <div className='headerstyle'>
    {props.heading}
 </div>
  )
}

export default Header;