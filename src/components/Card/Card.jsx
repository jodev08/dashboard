import React, { useState } from 'react';
import './Card.css';
//import { AnimateSharedLayout} from 'farmer-motion';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Chart from 'react-apexcharts';
import {UilTimes} from '@iconscout/react-unicons'



//parent   ``

const Card = (props) => {
    
    const[expanded, setExpanded] = useState(false)
  
    return (
            <div>
                {
                    expanded?(
                        <ExpandedCard param={props} setExpanded={()=>setExpanded(false)}/>
                    ):(
                     
                <CompactCard param = {props} setExpanded={() => setExpanded(true)}  />

                )}
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
            onClick={setExpanded}
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

function ExpandedCard({param, setExpanded}) {

    const data = {
        options: {
            chart: {
                type: "area",
                height:"auto",

            },
            dropShadow: {
                enabled:false,
                enabledOnSeries: undefined,
                top:0,
                left:0,
                blur:3,
                color: "#000",
                opacity: 0.35,
            },

            fill:{
                colors: ["#fff"],
                type: "gradient",

            },
            dataLabels:{
                enabled:false,
            },
            stroke: {
                curve: "smooth",
                colors: ["white"],
            },
            tooltip:{
                x: {
                    format: "dd/MM/yy HH:mm",
                },


            },
            grid: {
                show: true,
            },
            xaxis: {
                type: "datetime",
                categories: [
                    "2022-01-19T00:00:00.000Z",
                    "2022-02-19T01:30:00.000Z",
                    "2022-03-19T02:30:00.000Z",
                    "2022-04-19T03:30:00.000Z",
                    "2022-05-19T04:30:00.000Z",
                    "2022-06-19T05:30:00.000Z",
                    "2022-07-19T06:30:00.000Z",
                    "2022-08-19T07:30:00.000Z",
                    "2022-09-19T07:30:00.000Z",
                    "2022-10-19T07:30:00.000Z",
                    "2022-11-19T07:30:00.000Z",
                    "2022-12-19T07:30:00.000Z",
                ]

            },
        }
    }
    return(
        <div
           className='ExpandedCard'
           style={{
            background: param.color.backGround,
            boxShadow: param.color.boxShadow,
           }
           }
           >
            <div>
                <UilTimes onClick={setExpanded}/>

            </div>
            <span>{param.title}</span>
            <div className="chartContainer">
                <Chart series={param.series} type='area' options={data.options}/>
            </div>
            <span>Last year</span>
          
          
          
          
          
           </div>

           
    )
}

export default Card