import React from 'react'
import { MealItem } from './MealItem';
import {styled} from 'styled-components'



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

export const Meals = () => {     
       
  return (
   <StyledContainer>
    <ul>
      {DUMMY_MEALS.map((item)=>{
        return (
          <MealItem 
             key={item.id}
             title={item.title}
             description={item.description}
             price={item.price}
             id={item.id}>
          
         </MealItem>
        )
      
      })}
    </ul>
 
   </StyledContainer>
  )
}

const StyledContainer = styled('div')`
    background-color: white;
    border-radius:16px ;
    width: 80%;
    margin: 2rem auto;
    align-items: center;
    padding: 40px;
    max-width: 60rem;
    animation: meals-appear 1s ease-out forwards;

    & > ul {
      display: flex;
      flex-direction: column;
      row-gap: 24px;
      list-style: none;
    }

    @keyframes meals-appear {
		from {
			opacity: 0;
			transform: translateY(3rem);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

`
