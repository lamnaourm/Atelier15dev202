import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { adddepense } from '../redux/ActionsCreators'

export default function AddDepense() {

  const [titre, setTitre] = useState('')
  const [montant, setMontant] = useState('')
  const dispatch = useDispatch()
  return (
    <div className='addd'>
        <input type="text" name="titre" id="titre" placeholder='Titre de depense' value={titre} onChange={(e) => setTitre(e.target.value)}/>
        <input type="text" name="montant" id="montant" placeholder='Montant de la depense' value={montant} onChange={(e) => setMontant(e.target.value)}/>
        <button onClick={() => dispatch(adddepense(titre, montant))}>Ajouter depense</button>
    </div>
  )
}
