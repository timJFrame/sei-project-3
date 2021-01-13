import React from 'react'
import { Link } from 'react-router-dom'
import { CgCopyright } from 'react-icons/cg'
import { AiOutlineGithub, AiFillCaretDown } from 'react-icons/ai'
import { IoDocumentsSharp } from 'react-icons/io5'


function Footer() {

  return (
    <div>
      <div style={{ backgroundColor: 'black', padding: '10px' }}>

        <Link to="/" style={{ padding: '10px', paddingRight: '20px' }}>DE<AiFillCaretDown />ERR</Link>
        
        <CgCopyright />SpicyKiwiPizza 2021
        
        <Link to="/login" style={{ padding: '10px', paddingLeft: '100px', paddingRight: '200px' }}>Login</Link>

        <a href="https://github.com/timJFrame/sei-project-3" style={{ padding: '10px' }}><AiOutlineGithub /></a>

        <a href="https://docs.google.com/document/d/1XGp4wVEdUBzMLSSu7ltRPjLcE1I3-e3xVfCZbchfyhY/edit?usp=sharing" style={{ padding: '10px' }}><IoDocumentsSharp /></a>
      </div>
    </div>
  )
}

export default Footer