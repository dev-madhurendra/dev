import React from 'react'
import styled from 'styled-components'

export interface IIconProps {
  width?: string | number
  height?: string | number
  src: string
  onClick?: () => void
}

const StyledIcon = styled('img')({
    cursor:'pointer',
    borderRadius:'10px'
})

const MyIcon = (props: IIconProps) => 
<StyledIcon 
    src={props.src} 
    width={props.width} 
    height={props.height} 
    onClick={props.onClick} 
/>

export default MyIcon