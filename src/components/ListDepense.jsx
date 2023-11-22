import React from 'react'
import { useSelector } from 'react-redux'

export default function ListDepense() {

  const depenses = useSelector(state => state.depenses)

  return (
    <div className='list'>
        <table>
            <thead>
                <tr>
                    <th>Titre</th>
                    <th>Montant</th>
                </tr>
            </thead>
            <tbody>
              {depenses.map(d => 
                <tr key={d.id}>
                  <td>{d.titre}</td>
                  <td>{d.montant}</td>
                </tr>
                )}
            </tbody>
        </table>
    </div>
  )
}
