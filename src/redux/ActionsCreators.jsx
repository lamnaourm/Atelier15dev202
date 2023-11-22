import uuid from 'react-uuid'
import * as types from './TypesActions'


export const addbudget = (montant) => {
    return {
        type: types.ADD_BUDGET,
        payload: parseFloat(montant)
    }
}

export const adddepense = (titre,montant) => {
    return {
        type: types.ADD_DEPENSE,
        payload: {id:uuid(), titre:titre, montant:parseFloat(montant)}
    }
}
