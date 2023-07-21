import React from 'react'
import './Card.css'

export default function Card() {
  return (
    <div>
      <div className='block' >
        <div><img className='image1'  src="https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/63/a7/d5/63a7d585-00e0-bcec-1b61-b8aab26663b4/cover.jpg/1200x1200bf-60.jpg" alt="Тут должна быть картинка альбома Hajime, Pt. 3" /></div>
        <div className='description'>
          <p className='p' >АЛЬБОМ</p>
          <h3 className='Name' >Hajime, Pt. 3</h3>
          <p className='p' >Исполнитель: Miyagi & Эндшпиль * 2018</p>
          <div > <button className='Buttons' >Слушать</button> <button className='Buttonss' >Нравится</button> <button className='Buttonss' >Скачать</button> <button className='Buttonsss' >***</button>  </div>
        </div>
      </div>
    </div>
  )
}
