import React from 'react';

export default class Button extends React.Component{ 
        constructor(props){
            super(props)
            this.state={
                count:0,
                name: '',
                surname:'',
            }
        }


    render(){

const  plus =() =>{
    this.setState({count: this.state.count+1})
    
   
}; 
const  minus =(event,hi) =>{
    this.setState({count: this.state.count > -1})
}


// const onChange =(event)=>{
//  console.log('name',event.target.value);
//  this.setState({name: event.target.value})
//    this.setState({
    //    [event.target.name]:event.target.value
//    })
// } ;   

// const onSurnameChange =(event)=>{
//     console.log('name',event.target.value);
//     this.setState({name: event.target.value})
//    } ;
     
const onChange =(event)=>{
    this.setState({
        [event.target.name]:event.target.value
    })
 } ;   
 
        return( 
        <div>
        <h1>Count:{this.state.count}</h1>
        <button onClick = {minus} >-</button>
        <button onClick = {plus} >+</button>
        <hr/>
        <h1>
            Name:{this.state.name}
         </h1>
         <h1>   
            Surname:{this.state.surname}
        </h1>
        <input name='name'
        onChange = {onChange} 
        type ='text'
        placeholder='enter your name'  />

        <input name='surname'
        onChange = {onChange} 
        type ='text'
        placeholder='enter your surname'  />
    </div>
        )
    }
}

