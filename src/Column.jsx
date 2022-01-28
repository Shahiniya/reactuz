import React, { Component } from 'react';
import TableMenu from './TableMenu'
// import Columns from './Column2';

export default class Column extends Component {
       constructor(props){
           super(props)
           this.state={
               datasource:[{
                   id:1,
                   name:'Shokhzoda',
                   status:'Student',
                   address:'Daege,South Korea',
                   age:32,
                   nickname:'Shelli',
                   univ:'KOngju',
                   job:'front-end developer'
               },
               {
                id:1,
                name:'Shokhzoda',
                status:'Student',
                address:'Daege,South Korea',
                age:32,
                nickname:'Shelli',
                univ:'KOngju',
                job:'front-end developer'
            },
            {
                id:1,
                name:'Shokhzoda',
                status:'Student',
                address:'Daege,South Korea',
                age:32,
                nickname:'Shelli',
                univ:'KOngju',
                job:'front-end developer'
            },
            {
                id:1,
                name:'Shokhzoda',
                status:'Student',
                address:'Daege,South Korea',
                age:32,
                nickname:'Shelli',
                univ:'KOngju',
                job:'front-end developer'
            }
            ]
           }
        
       }



  render() {
    return (<div>
<div className='header'>
         {
             this.state.datasource.map((id,name,status,age,address,nick,univ,job)=>
             {
                 return  <TableMenu id={id} name={name} 
                      status={status} age={age} address={address} 
                      nick={nick} univ={univ} job={job} 
                      />
                    
             })
         }
</div>
  
    </div>
          )
  }
}
