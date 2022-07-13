import React, { useState } from 'react';
import './Card.css';
//import { AnimateSharedLayout} from 'farmer-motion';

//parent

const Card = (props) => {
    
    const[expanded, setExpanded] = useState(false)
  
    return (
        
                <CompactCard param = {props}/>


           
        
   
  )
}
 //CompactCard

function CompactCard({param}){
    const Png = param.png;
    return(
        <div className='CompactCard'>
            <div className="radicalBar">
                Chart
            </div>
            <div className='detail'>
               <Png/>
               <span>${param.value}</span>
               <span>Last 24 hours</span>
            </div>
        </div>
    )
}

export default Card