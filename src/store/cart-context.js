import React, {useReducer} from 'react'

export const CartContext = React.createContext({
    addedMeals: [],
    totalAmount: 0,
    onAddMeal: ()=>{},
    onIncreaseMealsAmount: ()=>{},
    onDecreaseMealsAmountHandler: ()=>{},
})


const ADD_MEAL_TYPE = 'ADD_MEAL';
const INCREASE_MEAL_AMOUNT = 'INCREASE-AMOUNT'
const DECREASE_MEAL_AMOUNT = 'DECREASE-AMOUNT'


function reducer(state, action) {
    switch (action.type) {
        case ADD_MEAL_TYPE: {
            const prevMeals = state.addedMeals
            const newMeal= action.payload

            if(prevMeals.lenght === 0) {
                return {
                    ...state,
                    addedMeals: [newMeal],
                }
            }

            const isMealExists = prevMeals.find((meal)=>meal.id === newMeal.id)

            if (isMealExists === undefined) {
                return {
                    ...state, 
                    addedMeals: [...prevMeals, newMeal],
                }
            }

            const newAddedMeals = prevMeals.map((meal)=> {
                if(meal.id===newMeal.id) {
                    return{
                        ...meal,
                        amount:meal.amount + newMeal.amount
                    }
                  
                } 
                return meal
               
            })
            return {
                ...state,
                addedMeals: newAddedMeals,
            }
        }

        case INCREASE_MEAL_AMOUNT: {
            const prevMeals = state.addedMeals
            const mealId = action.payload
            const newAddedMeals = prevMeals.map((meal)=>{
                if(meal.id ===mealId) {
                    return {
                        ...meal,
                        amount: meal.amount +1
                    }
                   
                }
                return meal

            })

            return {
                ...state,
                addedMeals: newAddedMeals,
            }
        }

        case DECREASE_MEAL_AMOUNT: {
            const prevMeals = state.addedMeals
            const mealId = action.payload
            const currentMealItem = prevMeals.find((meal)=> meal.id===mealId)

            if(currentMealItem.amount ===1 ) {
                return {
                    ...state, 
                    addedMeals: prevMeals.filter((meal)=>meal.id !== currentMealItem.id),

                }
            }
            const newAddedMeals = prevMeals.map((meal)=>{
                if(meal.id === mealId) {
                    return {
                        ...meal,
                        amount: meal.amount -1
                    }

                    
                }
                return meal
            })

            return {
                ...state,
                addedMeals: newAddedMeals,
            }
        }
            
          
    
        default:
           return state
    }
}

export const CartProvider = ({children})=>{
    // const [addedMeals, setAddedMeals] = useState([])

    const [state, dispatch] = useReducer(reducer, {addedMeals:[]})

    const {addedMeals=[]}=state

    const totalAmount = addedMeals.reduce((acc, meal)=> {
        return acc+meal.price * meal.amount
    }, 0)

    console.log(totalAmount);

    const addMealsHandler = (newMeal)=>{
        dispatch({type:ADD_MEAL_TYPE, payload: newMeal})
    }

    const increaseMealAmountHandler = (id)=>{
        console.log(id);
        dispatch({type: INCREASE_MEAL_AMOUNT, payload: id})
    }

    const decreaseMealAmountHandler = (id)=>{
        console.log(id);
        dispatch({type: DECREASE_MEAL_AMOUNT, payload: id})
    }

    return (
        <CartContext.Provider value = {{
            addedMeals, 
            onAddMeal: addMealsHandler, 
            totalAmount: 0,
            onIncreaseMealsAmount: increaseMealAmountHandler,
            onDecreaseMealsAmountHandler:decreaseMealAmountHandler,
        }}>
            {children}
        </CartContext.Provider>
    )
}