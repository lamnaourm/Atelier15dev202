import React from 'react'
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { SiExpensify } from "react-icons/si";
import { LuDiff } from "react-icons/lu";
import { useSelector } from 'react-redux';

export default function StatsDepenses() {

  const budget = useSelector(state => state.budget)
  const depenses = useSelector(state => state.depenses)
  const totalDepense = depenses.reduce((som,dep) => som+dep.montant, 0)
  return (
    <div className='stats'>
        <div>
            <FaMoneyCheckDollar /> 
            BUDGET : {budget}
        </div>

        <div>
            <SiExpensify /> 
            DEPENSE : {totalDepense}
        </div>

        <div>
            <LuDiff /> 
            ECART : {budget - totalDepense}
        </div>
    </div>
  )
}
