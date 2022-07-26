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
              <div className='noti'>
              <div style={{marginBottom: '0.5rem'}}>
                <div className='updateName'>
                  <span>{update.name}</span>
                </div>
                <span>{update.notification}</span>
              </div>
              
              
              <span>{update.time}</span>
            </div>
          </div>
        );
      })}
    </div>
  );

}
  
    

export default Updates;
