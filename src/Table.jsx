import React, { Component } from 'react';
// import del from './icon/d.png'
import { students } from './mock';
// import TableMenu from './TableMenu';



export default class Table extends Component {
    constructor(props){
        super(props)
        this.state={
             table:  students,  
             name:'',
             status:'', 
             age:'',
             address:'',
             nickname:'',
             univ:'',
             job:'',
             selected:{},
             option:'id',
                   }
    } 
  render(){ 
const onDelete=(id)=>{
  let res = this.state.table.filter((value)=> value.id !== id );
  this.setState({table: res});

}

const onFilter=(event)=>{
     let res = students.filter((value)=> 
     String(value[this.state.option]).toLowerCase()
     .includes(event.target.value.toLowerCase()));
    this.setState({ table:res });
  }

const onChange=(e)=>{
     const {name,value} = e.target;
     this.setState({[name]:value})
}

const onSave=()=>{
  let newUser = {
    id:Date.now(),
    name:this.state.name, 
    status:this.state.status,
  }
  this.setState({
    table:[...this.state.table,newUser]})
}

const onSelect=(value)=>{
   this.setState({selected:value, 
    name:this.state.name, 
    status:this.state.status})
}

const onUpdate=()=>{
    let res = students.map((value)=> value.id === this.state.selected.id ? 
    {...value, name:this.state.name, status:this.state.status,
       age:this.state.age, address:this.state.address,
       nickname:this.state.nickname,univ:this.state.univ,
       job:this.state.job,} : value);
    this.setState({table:res, selected:{}});
}

const onValueSelect=(e)=>{
  this.setState({option:e.target.value})
}
        return (<div>
    <div className='data'>
      <select name='' id='' onChange={onValueSelect}>
        <option  value='id'>ID</option> 
        <option value='name'>Name</option>
        <option value='status'>status</option>
      </select>

      <input type='text' onChange={onFilter}/>

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
              <th className='action' >Action</th>
              <th className='update' >Edit</th>

        </tr>
        </thead>
        <tbody>
           {
               this.state.table.map(value =>(
             <tr key={value.id}>
               <th>{value.id}</th>

               <td> {this.state.selected.id === value.id ?
                (<input name='name' onChange={onChange} value={this.state.name} /> ) :
                (value.name)}</td>

               <td>{this.state.selected.id === value.id ?
                (<input name='status' onChange={onChange} value={this.state.status} /> ) :
                (value.status)}</td>

               <td>{this.state.selected.id === value.id ?
                (<input name='age' onChange={onChange} value={this.state.age} /> ) :
                (value.age)}</td>

               <td>{this.state.selected.id === value.id ?
                (<input name='address' onChange={onChange} value={this.state.address} /> ) :
                (value.address)}</td>

               <td>{this.state.selected.id === value.id ?
                (<input name='nickname' onChange={onChange} value={this.state.nickname} /> ) :
                (value.nickname)}</td>

               <td>{this.state.selected.id === value.id ?
                (<input name='univ' onChange={onChange} value={this.state.univ} /> ) :
                (value.univ)}</td>

               <td>{this.state.selected.id === value.id ?
                (<input name='job' onChange={onChange} value={this.state.job} /> ) :
                (value.job)}</td>

              <td> <button onClick={()=>onDelete(value.id)}>delete</button> </td>
              <td>
              {
                this.state.selected.id === value.id ?(
                <button onClick={onUpdate} >save</button>
             ):(
              <button onClick={()=>onSelect(value)}>edit</button>
             )
            }
                  </td>
                
             </tr>
                  ))

      }   
      
      </tbody>   
      </table>

      <input name='name' onChange={onChange} placeholder='name' type='text'/>
      <input name='status'   placeholder='status' type='text'/>
      <button onClick={onSave} >add</button>

          </div>

    <div>

    </div>

    </div>
    )
  }
}

