import React, {Component}  from 'react'
import './Card.css'



export default class Card extends Component {

    constructor(props){
        super(props);
}

render(){
  return (
    <div>
    <h1 className='pages' >Персональная страница</h1>
    <div className='osnova' >
      <img className='imgAva' src="https://sun6-20.userapi.com/s/v1/ig2/n5Dh1Jh27yKcity4U5SPYK6g3oytBB6zKUDNntiz031qxzYxU028vCqxEtBLwvk5geOoam92RX6FiX1gdRl790i4.jpg?size=1501x1501&quality=96&crop=3,3,1501,1501&ava=1" alt="" />

      <div className='text-description' >
        <p className='text-p' >{this.props.surname} {this.props.name} {this.props.patronymic}</p>
        <p className='text-p' >{this.props.email}</p>
        <p className='text-p' >{this.props.residence}</p>
        <p className='text-p' >{this.props.experience}</p>
        <p className='text-p' >{this.props.skills}</p>
      </div>
    </div>
    </div>
  )
}
}
