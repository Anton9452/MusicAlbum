import React, {Component} from 'react'
import './Main.css'

export default class CompMain extends Component {
    constructor(props){
        super(props);
}
    render(){
  return (
    <div className='Card'> <p className='Nomber'>{this.props.Nomber}</p> <p className='name' >{this.props.Name}</p> <p className='time' >{this.props.time}</p> </div>
  )
}
}