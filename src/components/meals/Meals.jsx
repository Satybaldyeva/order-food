import React from 'react'
import { MealItem } from './MealItem';
import {styled} from 'styled-components'

export const Meals = () => {

    const DUMMY_MEALS = [
        {
          id: 1,
          title: "Sushi",
          description: "finest fish and veggies",
          price: 22.99,
        },
        {
          id: 2,
          title: "Pizza",
          description: "finest fish and veggies",
          price: 16.0,
        },
        {
          id: 3,
          title: "Barbecue",
          description: "finest fish and veggies",
          price: 12.99,
        },
        {
          id: 4,
          title: "Green Bowl",
          description: "finest fish and veggies",
          price: 19.99,
        },
       ];
       
  return (
   <StyledContainer>
    {DUMMY_MEALS.map((item)=>(
       <MealItem key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <p>{item.price}</p>
       </MealItem>
    ))}
   </StyledContainer>
  )
}

const StyledContainer = styled('div')`
    background-color: white;
    border-radius:16px ;
    padding-left: 30px;
    width: 80%;
    margin: 1rem 8rem;
    align-items: center;

`
