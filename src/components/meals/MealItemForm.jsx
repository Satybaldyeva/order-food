import React from 'react'
import {styled} from 'styled-components'

export const MealItemForm = () => {
  return (
    <form action="">
        <StyledLabel htmlFor="amount">Amount</StyledLabel>
        <select name="form" id="add">
            <option value="1">1</option>
        </select> <br />
        <StyledButton>+ Add</StyledButton>
       
    </form>
  )
}


const StyledLabel = styled('label')`
    font-size: 18px;
    font-weight:600 ;
    margin-right: 1rem;
    & :hover {

    }
`
const StyledButton = styled('button')`
    border: none;
    background-color:#8A2B06 ;
    border-radius:20px ;
    color: white;
    padding: 10px 20px;
    font-size: 14px;
    font-weight: 700;
    margin: 10px 0px 7px 35px;
`