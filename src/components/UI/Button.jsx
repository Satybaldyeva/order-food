import React from 'react'
import {styled, css} from 'styled-components'

const BACKGROUND_VARIANTS = {
  outlined: {
    // normal: "white",
    // hover: '#8A2B06',
    // active: '#993108',
    // disabled: '#CAC6C4',
    backgroundColor: '',
    color: '#8a2b06',
    backgroundColorOnHover: '#8A2B06',
    backgroundColorOnActive: '#993108',
    disabled: {
      backgroundColor: '',
      color: '#cac6c4',
    },
  },
  contained: {
    backgroundColor: '#8a2b06',
    color: 'white',
    backgroundColorOnHover: '#7e2a0a',
    backgroundColorOnActive: '#993108',
    disabled: {
      backgroundColor: '#cac6c4',
      color: 'white',
    },
  }
}

const getStyledByVariant = (variant)=> {
  const currentVariant = BACKGROUND_VARIANTS[variant]

  return css `
    background-color: ${currentVariant.bacgroundColor};
    color: ${currentVariant.color};
    &:hover {
      background-color: ${currentVariant.backgroundColorOnHover};
    }
    &:active {
      background-color: ${currentVariant.backgroundColorOnActive};
    }
    &:disabled {
      background-color: ${currentVariant.disabled.bacgroundColor};
      color: ${currentVariant.disabled.color};
    }
  `
}

const BUTTON_SIZES = {
  small: '14px',
  medium: '16px',
  large: '18px',
}

export const Button = ({children, onClick, disabled, variant='contained', size='medium', type='submit', IconComponent = null, ...restProps}) => {
 const isHasIcon = Boolean(IconComponent)
  return (
    <StyledButton onClick={onClick} disabled={disabled} variant={variant} icon={String(isHasIcon)} size={size} {...restProps}> {isHasIcon && <IconComponent/>} {children}</StyledButton>
  )
}

const StyledButton = styled('button') `
  outline: none;
  cursor: pointer;
  padding: 0.625rem 2rem;
  border-radius: 20px;
  border: none;
  font-weight: 500;
  border: 1px solid #8a2b06;
  color: white;
  &:hover {
    color: white;

  }
  &:disabled {
    border: 1px solid #cac6c4;
    cursor: not-allowed;
  }
  transition: all 0.1s ease-out;
  ${(props)=> getStyledByVariant(props.variant || 'contained')}
  ${(props)=> {
    if (props.icon === 'false') return null
    return css `
      display: flex;
      align-items: center;
      gap: 10px;
      font-weight: 700;
    `
  }};
  font-size: ${(props)=> BUTTON_SIZES[props.size || 'medium']}
`
