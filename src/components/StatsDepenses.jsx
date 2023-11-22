import React from 'react'
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { SiExpensify } from "react-icons/si";
import { LuDiff } from "react-icons/lu";

export default function StatsDepenses() {
  return (
    <div className='stats'>
        <div>
            <FaMoneyCheckDollar /> 
            BUDGET : {0}
        </div>

        <div>
            <SiExpensify /> 
            DEPENSE : {0}
        </div>

        <div>
            <LuDiff /> 
            ECART : {0}
        </div>
    </div>
  )
}
