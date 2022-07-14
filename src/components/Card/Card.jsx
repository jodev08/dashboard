import React, { useState } from 'react';
import './Card.css';
//import { AnimateSharedLayout} from 'farmer-motion';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

//parent   ``

const Card = (props) => {
    
    const[expanded, setExpanded] = useState(false)
  
    return (
            <div>
               
            
        
                <CompactCard param = {props} setExpanded={() => setExpanded}  />
            </div>


           
        
   
  )
}
 //CompactCard

function CompactCard({param , setExpanded}){
    const Png = param.png;
    return(
        <div className='CompactCard'
            style={{
                backGround : param.color.background,
                boxShadow: param.color.boxShadow

            }}
            >
            
            <div className="radicalBar">
            <CircularProgressbar 
                value={param.barValue} 
                text={`${param.barValue}%`}
                />
                <span>{param.title}</span>
                
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