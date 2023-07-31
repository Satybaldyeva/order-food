import React from 'react'
import { MealItemForm } from './MealItemForm'
import {styled} from 'styled-components'

export const MealItem = () => {
  return (
    <StyledMealItem>
        <div>
            <h3>Sushi</h3>
            <p>Finest fish and veggies</p>
            <StyledText >$22.99</StyledText>
        </div>
        <div>
            <MealItemForm/>
        </div>
    </StyledMealItem>
  )
}

const StyledMealItem = styled('div')`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px;
    border-bottom: 1px solid 
#D6D6D6;
`

const StyledText = styled('p')`
    color:#AD5502 ;
    font-size: 20px;
    font-weight: 700;
`