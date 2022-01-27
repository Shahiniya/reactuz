import React, { Component } from 'react';

export default class Button  extends Component {
    constructor(props){
        super(props)
        this.state={
            count:0,
            name:'',
            surname:'',

        }
    }
  render() {
   
const plus=()=>{
   
    this.setState({count: this.state.count+1})

}

const minus=()=>{
   
    this.setState({count: this.state.count -1})
    
    }

//     const onNameChange=(event)=>{
//          console.log('name',event.target.value)
//          this.setState({name:event.target.value})
//     }
//     const onSurnameChange=(event)=>{
//         console.log('surname',event.target.value)
//         this.setState({surname:event.target.value})
//    }
    const onChange =(event)=>{
            this.setState({
                [event.target.name]:event.target.value
            })
    }
    return (
    <div>

    <h1>Name:{this.state.name}</h1>
    <h1>Surname:{this.state.surname}</h1>
    <button onClick={plus}>+</button>
    <button onClick={minus}>-</button>

    <input name='name' onChange={onChange} type='text' placeholder='enter your name' />
    <input name='surname' onChange={onChange} type='text' placeholder='enter your name' />

    </div>
    )
  }
}
