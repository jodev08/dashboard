import React from 'react';
import './Sidebar.css';

import { SideBarData } from '../../Data/Data';

import {UilSignOutAlt} from "@iconscout/react-unicons";




const Sidebar = () => {
 

  
  return (
    <div className='Sidebar '>
        
       
         
         {/*menu nav */}
          <div className='navigation '>
            {SideBarData.map((item,index) =>{
              return(
              
              
              <div className='navigationItem'>
               
                <item.icon></item.icon>
                <span>
                  {item.heading}
                </span>

              </div>
              
              )
            })}
            
            <div className='switchOff '>
            <UilSignOutAlt></UilSignOutAlt>
            </div>

            
            
          </div>
   
        
    </div>

          

        

 
  


  )
}

export default Sidebar;