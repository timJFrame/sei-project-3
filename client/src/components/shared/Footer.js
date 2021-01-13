import React from 'react'
import { Link } from 'react-router-dom'
import { CgCopyright } from 'react-icons/cg'
import { AiOutlineGithub, AiFillCaretDown } from 'react-icons/ai'
import { IoDocumentsSharp } from 'react-icons/io5'


function Footer() {

  return (
    <div>
      <div style={{ backgroundColor: 'black', padding: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex' }}>
          <Link to="/" style={{ paddingRight: '20px' }}><strong>DE<AiFillCaretDown />ERR</strong></Link>
                  
          <CgCopyright style={{ color: 'grey' }} /><span style={{ color: 'grey', fontWeight: 'normal' }}>SpicyKiwiPizza 2021</span>
        </div>
        
        <div style={{ display: 'flex' }}>
          <Link to="/login" style={{ paddingRight: '40px' }}>Login</Link>

          <a href="https://github.com/timJFrame/sei-project-3" style={{ paddingRight: '20px' }} ><AiOutlineGithub /></a>          
        
          <a href="https://docs.google.com/document/d/1XGp4wVEdUBzMLSSu7ltRPjLcE1I3-e3xVfCZbchfyhY/edit?usp=sharing" style={{ paddingRight: '20px' }} ><IoDocumentsSharp /></a>
        </div>

      </div>
    </div>
  )
}

export default Footer