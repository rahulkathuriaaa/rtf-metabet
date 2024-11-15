import React from 'react'
import './Footer.css'
import foot from '../../assets/footer_im.png'
import { Link } from 'react-router-dom'


const Footer = () => {

  const cur = window.location.pathname;


  return (

    <div className='footer'>
      <div className='foot-top'>
        <div className='ft-left'>
          <div>
            <Link to='/fb'>FACEBOOK</Link><br />
            <Link to='/ig'>INSTAGRAM</Link><br />
            <Link to='/ln'>LINKEDIN</Link><br />
            <a href='https://github.com/cyberviking5/fantasy'>GITHUB</a>          
          </div>
          {cur =='/' ?  <div><a href='#third'>REVIEWS</a><br /><Link to='/team'>OUR TEAM</Link><br /><Link to='/games'>BOXING</Link><br /><a href="#tech"></a><a href="#first">ABOUT US</a></div>
            :
            <div><Link to='/'>HOME</Link><br /><Link to='/team'>OUR TEAM</Link><br /><Link to='/games'>BOXING</Link><br /><Link to='/'>ABOUT US</Link></div>
            } 
          
        </div>
        <div className='ft-right'>
          <span>MADE BY METABOYS</span><br />
          <span>POWERED BY RTFIGHT</span><br />
          <span>METABOYS PVT LIMITED</span>
        </div>
      </div>
      <div className='foot-bot'>
        <img src={foot} alt="" />
      </div>
    </div>

  )
}

export default Footer
