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

    <div className="card-container">
      {card.map((cards, index)=>{
       
        return(
    <div className="container__info" key={index}>
    <img className='card-img' src={cards.photo}></img>
    <span>SUPER HOST</span>
    <span className='apartment'>Entire apartment.2 beds <AiFillStar className='rate'/> 4.50</span>
    <span className='title'> {cards.title}</span>

   </div>

       )
        console.log(cards.photo)
      })
      }
    </div>
   </Fragment>
  )
}

export default CardList
