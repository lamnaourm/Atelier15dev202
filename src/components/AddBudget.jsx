import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addbudget } from '../redux/ActionsCreators'

export default function AddBudget() {

  const dispatch = useDispatch()
  const [montant, setMontant] = useState(0)
  return (
    <div className='addb'>
        <input type="number" name="montant" id="montant" value={montant} onChange={(e) => setMontant(e.target.value)} />
        <button onClick={() => dispatch(addbudget(montant))}>Ajouter budget</button>
    </div>
  )
}
