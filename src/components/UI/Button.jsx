import React from 'react'

export const Button = ({children, onClick, disabled, variant, size, ...restProps}) => {
  return (
    <button onClick={onClick} disabled={disabled} {...restProps}> {children}</button>
  )
}
const BACKGROUND_VARIANTS={
  outlined: {
    normal: "white",
    hover: '#8A2B06',
    active: '#993108',
    disabled: '#CAC6C4',
  },
  contained: {
    normal: "#8A2B06",
    hover: '#7E2A0A',
    active: '#993108',
    disabled: '#CAC6C4',
  }
}