import React from 'react'
import './Updates.css'
import { UpdatesData } from '../../Data/Data';

const Updates = () => {
  return (
    <div className="Updates">
      {UpdatesData.map((update) => {
        return (
          <div className="update">
           
             
              <img src={update.img}/>
              
              
              <span>{update.name}</span>
              <span>{update.notification}</span>
              <span>{update.time}</span>
            
          </div>
        );
      })}
    </div>
  );

}
  
    

export default Updates;
