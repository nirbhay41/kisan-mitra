import React from 'react'
import CardItem from '../CardItem/CardItem';
import card2 from '../../resources/cards_images/card2.webp';
import card3 from '../../resources/cards_images/card3.webp'
import card4 from '../../resources/cards_images/card4.webp'
import card5 from '../../resources/cards_images/card5.webp'
import './Cards.scss';

function Cards() {
    return (
        <div className='cards' id='card'>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                            src={card5}
                            text='"As long as there’s a few farmers out there, we’ll keep fighting for them." – Willie Nelson'
                            label='Information'
                            path='/info'
                        />
                        <CardItem
                            src={card3}
                            text='“You know, farming looks mighty easy when your plow is a pencil, and you’re a thousand miles from the corn field.” – Dwight D. Eisenhower'
                            label='Forum'
                            path='/forum'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                            src={card4}
                            text='“The farmer is the only man in our economy who buys everything at retail, sells everything at wholesale, and pays the freight both ways.” – John F. Kennedy'
                            label='Govt Schemes'
                            path='/schemes'
                        />
                        <CardItem
                            src={card2}
                            text='“When tillage begins, other arts follow. The farmers, therefore, are the founders of human  civilization.” - Daniel Webster'
                            label='About'
                            path='/about'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
