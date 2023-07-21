import React from 'react'
import { useState } from 'react';
import './Pers_peg_mod.css'

export default function Pers_peg_mod(){

  const [isActive, setIsActive] = useState(false);
  const displayOFF = event => {
    setIsActive(current => !current);
  }


  const [form, setPers_peg_mod] = useState({
    name: '',
    surname: '',
    patronymic: '',
    email: '',
    residence:'',
    experience: '',
    skills: '',
  });



    return (
      <div>
      <h1 className='pages' >Персональная страница</h1>
      <div className='osnova' >
        <img className='imgAva' src="https://sun6-20.userapi.com/s/v1/ig2/n5Dh1Jh27yKcity4U5SPYK6g3oytBB6zKUDNntiz031qxzYxU028vCqxEtBLwvk5geOoam92RX6FiX1gdRl790i4.jpg?size=1501x1501&quality=96&crop=3,3,1501,1501&ava=1" alt="" />
  
        <div className='text-description2' >
          <div><input id='OFF' className={isActive ? 'OFF' : 'inpLog'} type="text"  placeholder='Имя' value={form.name}onChange={ e => {setPers_peg_mod({...form,name: e.target.value})}}/><div id='text_reg' > <p className={isActive ? 'p-imp-next' : 'OFF'}>{form.name}</p> </div></div> 
          <div><input id='OFF' className={isActive ? 'OFF' : 'inpLog'} type="text"  placeholder='Фамилия' value={form.surname}onChange={ e => {setPers_peg_mod({...form,surname: e.target.value})}} /><div id='text_reg' > <p className={isActive ? 'p-imp-next' : 'OFF'}>{form.surname}</p>  </div></div> 
          <div><input id='OFF' className={isActive ? 'OFF' : 'inpLog'} type="text"  placeholder='Отчество' value={form.patronymic}onChange={ e => {setPers_peg_mod({...form,patronymic: e.target.value})}} /><div id='text_reg' > <p className={isActive ? 'p-imp-next' : 'OFF'}>{form.patronymic}</p>  </div></div> 
          <div><input id='OFF' className={isActive ? 'OFF' : 'inpLog'} type="email" placeholder='email' value={form.email}onChange={ e => {setPers_peg_mod({...form,email: e.target.value})}} /><div id='text_reg' > <p className={isActive ? 'p-imp-next' : 'OFF'}>{form.email}</p>  </div></div> 
          <div><input id='OFF' className={isActive ? 'OFF' : 'inpLog'} type="text"  placeholder='Регион проживония' value={form.residence}onChange={ e => {setPers_peg_mod({...form,residence: e.target.value})}} /><div id='text_reg' > <p className={isActive ? 'p-imp-next' : 'OFF'}>{form.residence}</p>  </div></div> 
          <div><input id='OFF' className={isActive ? 'OFF' : 'inpLog'} type="text"  placeholder='Опыт работы' value={form.experience}onChange={ e => {setPers_peg_mod({...form,experience: e.target.value})}} /><div id='text_reg' > <p className={isActive ? 'p-imp-next' : 'OFF'}>{form.experience}</p>  </div></div> 
          <div><input id='OFF' className={isActive ? 'OFF' : 'inpLog'} type="text"  placeholder='Навыки' value={form.skills}onChange={ e => {setPers_peg_mod({...form,skills: e.target.value})}} /><div id='text_reg' > <p className={isActive ? 'p-imp-next' : 'OFF'}>{form.skills}</p>  </div></div> 
          <button className='ButBack' onClick={displayOFF}  > {isActive ?  "Назад" : "Далее"} </button>
        </div>
        
      </div>
      </div>
    )
  }
