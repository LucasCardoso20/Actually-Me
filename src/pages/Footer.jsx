import React, {useState, useEffect} from 'react'
import {data} from '../data'
import { Link } from 'react-router-dom'
import { footerData } from '../footerData'
import logo from '../assets/logo-v-white.png'

import '../App.scss'
import './Footer.scss'


const Footer = () => {

    

  return (
    <div className='footer'>
        <div className="footer__container container">
            <div className="footer__info">
                <h4>
                    <Link to='/'><img src={logo} alt="logo" /></Link>
                    <span>Lucas Cardoso</span>
                </h4>

                <Link to='/blog'>
                    <button className='btn'>
                        Contact me
                    </button>
                </Link>
                
            </div>

            {/* <div className='footer__menu__container'> */}
                <div className="footer__menu">
                    <ul>
                        {data.map((item,index)=> (
                            <li key={index}>
                                <Link to={item.path}>{item.name}</Link>
                            </li>
                        ))}
                        <a href=''>Portfolio</a>
                    </ul>
                </div>

                <div className="footer__socials">
                    <ul>
                        {footerData.map((item, index)=> (
                            <li key={index}>
                                <Link to={item.path}> <i className='footer__icon'>{item.icon}</i> </Link>
                            </li>
                        ))}
                        
                    </ul>
                </div>
            {/* </div> */}
            
        </div>
        
        <div className='footer__copyright container'>&copy; 2022 made by Lucas Cardoso</div>
    </div>
  )
}

export default Footer;