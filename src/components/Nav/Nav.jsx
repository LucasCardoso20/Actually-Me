import React, {useState, useEffect} from 'react'
import './Nav.scss'
import {data} from '../../data'
import { Link } from 'react-router-dom'
import Logo from '../../assets/logo.png'
import {CgMenuRound} from 'react-icons/cg'
import {AiOutlineCloseCircle} from 'react-icons/ai'
import {motion} from 'framer-motion'
import { client } from '../../client'
const Nav = () => {
  // const [nav, setNav] = useState([])
  const [toggle, setToggle] = useState(false) 

  // useEffect(() => {
  //   const query = '*[_type == "nav"]'

  //   client.fetch(query)
  //     .then((data)=> {
  //       data.sort((a, b)=> {
  //         console.log(b, a); 
  //       })

  //       setNav(data)
  //     })

  // }, [])
  

  return (
    <nav className='nav'>
      <div className='nav__container container'>
        <Link to='/'> <img src={Logo} className='nav__logo'/> </Link>

        <ul className='nav__list'>
          {data.map((item, index)=>(
            <li key={index}>
              <Link to={item.path}>{item.name}</Link>
            </li>
          ))}
          <li><a href="http://all-projects-site.netlify.app/">portfolio</a></li>
        </ul>

        
    
        <div className='nav__container__mobile'>
          <CgMenuRound onClick={()=> setToggle(true)} className="nav__menu__mobile"/>
          {toggle && (
            <motion.div
              whileInView={{x: [300, 0]}}
              transition={{duration: 0.85, ease: 'easeOut'}}
            >
              <AiOutlineCloseCircle onClick={()=> setToggle(false)} className='close__menu__mobile'/>
            
              <ul className='nav__mobile'>

                {data.map((item, index)=>(
                  <li key={index}>
                    <Link to={item.path}>{item.name}</Link>
                  </li>
                ))}
                <li><a href="http://all-projects-site.netlify.app/">portfolio</a></li>
              </ul>
            
            </motion.div>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Nav