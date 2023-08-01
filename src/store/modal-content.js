import React, { useReducer } from 'react'

const initialState = {modal: false};

function reducer (state, action){
    switch(action.type) {
        case 'OPEN ':
            return action.payload

        case 'CLOSE':
            return action.payload  
            
        default:
            return state    
    }
}

export const ModalContext = React.createContext({
    isModalOpen: false,
	onClose: () => {},
	onOpen: () => {},
})

export const ModalProvider = ({children})=>{
    const [state, dispatch] = useReducer(reducer, initialState);


    const openModalHandler = ()=>{
        dispatch({type: 'OPEN', payload: true})
    }

    const closeModalHandler = ()=>{
        dispatch({type:'CLOSE', payload: false})
    }

    return (
        <ModalContext.Provider value = {{isModalOpen: state, onClose: closeModalHandler, onOpen: openModalHandler } }>
                {children}
        </ModalContext.Provider>
    )
}
