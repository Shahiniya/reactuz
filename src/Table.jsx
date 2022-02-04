import React, { Component } from 'react';
// import del from './icon/d.png'
import { students } from './mock';
// import TableMenu from './TableMenu';



export default class Table extends Component {
    constructor(props){
        super(props)
        this.state={
             table:  students,         
            
        }
    } 
  render(){ 




const onDelete=(id)=>{
  let res = this.state.table.filter((value)=> value.id !== id );
  this.setState({table: res});

}


        return (<div>
    <div className='data'>
      <table >
        <thead>
        <tr className='tr'>
              <th >ID</th>
              <th >Name</th>
              <th >Status</th>
              <th > Age</th>
              <th >Address</th>
              <th >Nickname</th>
              <th >Univ</th>
              <th >Job</th>
              <th>Action</th>
        </tr>
        </thead>
        <tbody>
         
         
         
         {
               this.state.table.map(value =>(
             <tr key={value.id}>
               <th>{value.id}</th>
               <td>{value.name}</td>
               <td>{value.status}</td>
               <td>{value.age}</td>
               <td>{value.address}</td>
               <td>{value.nickname}</td>
               <td>{value.univ}</td>
               <td>{value.job}</td>
               <button onClick={()=>onDelete(value.id)}>delete</button>

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

