import React from 'react'
import { Link } from 'react-router-dom';
import classes from './Footer.module.css';
function Footer() {
  return (
    <footer className={`${classes.footer} bg-info `}>
        <div className='text-center'>
            <a href="https://web.facebook.com/debugger.bug.10101/">
                <i class="fa-brands fa-facebook"></i>
            </a>
            <a href="https://github.com/aungkaungkhant-nssh?tab=repositories">
                <i class="fa-brands fa-github"></i>
            </a>
            <a href="https://github.com/aungkaungkhant-nssh?tab=repositories">
                <i class="fa-brands fa-linkedin"></i>
            </a>
        </div>
        
    </footer>
    
  )
}

export default Footer