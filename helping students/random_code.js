import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MHContext } from './Context';

export default function Armour() {
    const navigate = useNavigate()

    const { armourContext } = React.useContext(MHContext)

    const armourList = (array, type) => {
     
        let arr = []
        let armorNames = []

        let filteredItems = array.filter((item) => {
            if (item.armorSet.rank === type) {
             
                return true
            }
        })

        filteredItems.forEach((item, index) => {
            if (!armorNames.includes(item.armorSet.name)) {
                arr.push(item)
                armorNames.push(item.armorSet.name)
            }
        })

        return (filteredItems.map((item, index) => <div key={index}>{item.armorSet.name}</div>))
    }

    const armorSetList = armourContext.map(item => item.armorSet.rank)
    const armorSetNames = [...new Set(armorSetList)]

    const armorSetName = armorSetNames.map(item => {
        let list = armourList(armourContext, item)
        return (
        <div>
            <h4>{item}</h4>
            {armourContext.length > 0 && list}
        </div>)
    })

    return (
        <div style={{ padding: 20 }}>

            <h2>Select Armour Set</h2>
            <div className='list'>
                {armorSetName}
            </div>

        </div>
    );
}