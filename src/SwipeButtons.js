import React from 'react'
import ReplayIcon from '@mui/icons-material/Replay';
import CloseIcon from '@mui/icons-material/Close'
import StarIcon from '@mui/icons-material/Star';
import FavriteIcon from '@mui/icons-material/Favorite';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import IconButton from '@mui/material/IconButton';
export default function SwipeButtons() {
  return (
    <div className='swipeButtons'>
        <IconButton className='swipeButton__repeat'>
           <ReplayIcon fontSize="large"/>
        </IconButton>
        <IconButton className='swipeButton__left'>
           <CloseIcon fontSize="large"/>
        </IconButton>
        <IconButton className='swipeButton__star'>
           <StarIcon fontSize="large"/>
        </IconButton>
        <IconButton className='swipeButton__fav'>
           <FavriteIcon fontSize="large"/>
        </IconButton>
        <IconButton className='swipeButton__lightning'>
           <FlashOnIcon fontSize="large"/>
        </IconButton>
    </div>
  )
}
