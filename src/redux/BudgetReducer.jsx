import uuid from "react-uuid"
import * as types from './TypesActions'


const initial_state = {
    budget:0,
    depenses:[
        {
            id:uuid(),
            titre:'Voiture',
            montant:3000
        },
        {
            id:uuid(),
            titre:'Achat PC',
            montant:10000
        },
    ]
}

const BudgetReducer = (state = initial_state, action) => {
    let newState = {...state}

    switch(action.type) {
        case types.ADD_BUDGET: 
            newState.budget += action.payload
        break;
        case types.ADD_DEPENSE: 
            newState.depenses = [...newState.depenses, action.payload] 
        break;
    }

    return newState;
}

export default BudgetReducer

