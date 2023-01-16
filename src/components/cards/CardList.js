import React, {Fragment, useState} from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import data from '../stays.json'
import './cardlist.css'
export const CardList = () => {
  const [card, setCard] = useState(data)

  return (
   <Fragment>
    <div className='container'>
      <h1>stays in Finland</h1>
      <span>12+ stays</span>
    </div>

    <div class="card-container">
   <div class="container__info">
    <span><i class="fas fa-eye"></i>2350</span>
    <span><i class="fas fa-comment-alt"></i>624</span>
    <span><i class="fas fa-download"></i>1470</span>
   </div>
    </div>
   </Fragment>
  )
}

export default CardList
