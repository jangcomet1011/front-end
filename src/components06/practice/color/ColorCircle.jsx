import React, { useContext } from 'react'
import { ColorContext } from './ColorContext'

export const ColorCircle = () => {
    const {state} = useContext(ColorContext)
  return (
    <div>
        <div className='big' style={{background:state.big}}/>
        <div className='small' style={{background:state.small}}/>
    </div>
  )
}
