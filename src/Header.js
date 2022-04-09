import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import IconButton from '@mui/material/IconButton';
import ForumIcon from '@mui/icons-material/Forum';
export default function Header() {
  return (
    <div className='header'>
        <IconButton>
        <PersonIcon fontSize="large" className='header__icon'/>
        </IconButton>
        <img 
         className='header__logo'
         src="https://www.globaldatinginsights.com/wp-content/uploads/2017/08/Screen-Shot-2017-08-17-at-10.04.531.png"
         alt="logo"
        />
         <IconButton>
         <ForumIcon fontSize="large" className='header__icon'/>
        </IconButton>
    </div>
  )
}
