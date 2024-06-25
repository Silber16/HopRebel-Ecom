import React, { useEffect, useState } from 'react'

export default function Carrusel( {item} ) {

  const [imgCorr, setImgCorr] = useState('')
  const [position, setPosition] = useState(1)
  
  useEffect(() => {
    setImgCorr(position === 1 ? item.img : item.img2);
  }, [position, item]);

  const handleFoll = () => {
    if (position < 2) {
        setPosition(position + 1)
    }
  }
  const handleBack = () => {
    if (position >= 2) {
        setPosition(position - 1)
    }
  }

  return (
    <div className='carrusel'>
        <button className='carrusel__back' onClick={handleBack}><span className="material-symbols-outlined">arrow_back_ios</span></button>
        <img src={imgCorr} alt="img" className='carrusel__img' />
        <div className='carrusel__spanContainer'>
            <span className="material-symbols-outlined">{position == 1 ? "radio_button_checked" : "radio_button_unchecked"}</span>
            <span className="material-symbols-outlined">{position == 2 ? "radio_button_checked" : "radio_button_unchecked"}</span>
        </div>
        <button className="carrusel__foll" onClick={handleFoll}><span className="material-symbols-outlined">arrow_forward_ios</span></button>
    </div>
  )
}
