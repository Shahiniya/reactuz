import React, { Component } from 'react';
// import TableMenu from './TableMenu';



export default class Table extends Component {
    constructor(props){
        super(props)
        this.state={
             table:[
                {
                  id:1,
                  name:'Sobir',
                  status:'Student',
                  age:32,
                  address:'Daegu.South Korea',
                  nickname:'Shelli',
                  univ:'Kongju',
                  job:'front-end developer',
            
                },
                {
                        id:2,
                        name:'Sobir',
                        status:'Student',
                        age:32,
                        address:'Daegu.South Korea',
                        nickname:'Shelli',
                        univ:'Kongju',
                        job:'front-end developer',
                
                    },
                    {
                            id:3,
                            name:'Shokhzoda',
                            status:'Student',
                            age:32,
                            address:'Daegu.South Korea',
                            nickname:'Shelli',
                            univ:'Kongju',
                            job:'front-end developer',
                    
                        }, {
                            id:4,
                            name:'Shokhzoda',
                            status:'Student',
                            age:32,
                            address:'Daegu.South Korea',
                            nickname:'Shelli',
                            univ:'Kongju',
                            job:'front-end developer',
                    
                        },
                        {
                            id:5,
                            name:'Shokhzoda',
                            status:'Student',
                            age:32,
                            address:'Daegu.South Korea',
                            nickname:'Shelli',
                            univ:'Kongju',
                            job:'front-end developer',
                    
                        },
            ] 
        }
    } 
  render(){ 
        return (<div>
    <div className='data'>
      <table >
        <thead>
        <tr className='tr'>
              <th className='ID'>ID</th>
              <th className='Name'>Name</th>
              <th className='Status'>Status</th>
              <th className='Age'> Age</th>
              <th className='Address'>Address</th>
              <th className='Nickname'>Nickname</th>
              <th className='Univ'>Univ</th>
              <th className='Job'>Job</th>
        </tr>
        </thead>
        <tbody>
         
                {
          // this.state.table.map(({id,name,status,age,address,nickname,univ,job})=>{
          //   return <TableMenu 
          //   id={id}
          //   name={name} 
          //   status={status}
          //    age={age} address={address} 
          //   nick={nickname} univ={univ} job={job} 
          //   />
          // }
          // )

                  this.state.table.map(value =>(
             <tr>
               <td>{value.id}</td>
               <td>{value.name}</td>
               <td>{value.status}</td>
               <td>{value.age}</td>
               <td>{value.address}</td>
               <td>{value.nickname}</td>
               <td>{value.univ}</td>
               <td>{value.job}</td>

             </tr>
                  ))

      }   
      
      </tbody>   
      </table>

    </div>

    <div>

    </div>

    </div>
    )
  }
}

