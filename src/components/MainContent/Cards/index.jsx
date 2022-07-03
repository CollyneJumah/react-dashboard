import { Card } from '@mui/material'
import { CardData } from '../../../Data/cards'
import './card.css'


const Cards =()=>{
    return (
        <div className="parentContainer">
            <h3>Vitals</h3>
           {CardData.map( (card,id) =>{
               return (
                   <div className='card'>
                       
                   </div>
               )
           })}
        </div>
    )
}

export default Cards