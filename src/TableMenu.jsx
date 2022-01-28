import React, { Component } from 'react';

export default class TableMenu extends Component {
    
  render() {
    return (
     
                  <tr>   
            <td className='id' >{this.props.id}</td>
            <td className='name' > {this.props.name} </td>
            <td className= 'status'>{this.props.status}</td>
            <td classNmae='age'>{this.props.age}</td>
            <td classNmae='address'>{this.props.address}</td>
            <td classNmae='nick'>{this.props.nickname}</td>
            <td classNmae='univ'>{this.props.univ}</td>
            <td classNmae='job'>{this.props.job}</td>
       
                  </tr>
                     
           
    )
  }
}
