import React, {Fragment, useState, useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import data from '../stays.json'
import './cardlist.css'
import { AiFillStar } from 'react-icons/ai';

export const CardList = () => {
  const [card, setCard] = useState([])
    useEffect(()=>{
      setCard(data)
    }, [])
  return (
   <Fragment>
    <div className='container'>
      <h1>stays in Finland</h1>
      <span>12+ stays</span>
    </div>

    <div class="card-container">
      {card.map((cards)=>{
        return(
          <div/>
        )
        console.log(cards.photo)
      })
      }
   <div class="container__info">
    <img></img>
    <span>SUPER HOST</span>
    <span>Entire apartment.2 beds <AiFillStar/> 4.50</span>
    <span> Stylist apartment</span>

   </div>
    </div>
   </Fragment>
  )
}

export default CardList
