import React from 'react';
import './SummaryCard.css'
import '../App.css'
import hotelModal from '../Modal/hotelModal'

const onCardClick = (props) =>
{
    var a = "/h/name=Avari";
    window.location.assign(a); 

}

const SummaryCard = (props) =>
{
    return (
        <div className = "Summary" onClick = { () => onCardClick(props)}>
            <img className="ImageStyle" src={require('./background.svg')} alt={require('./background.svg')}></img>
            <p className = "Name"><b>{props.name}</b></p>
            <p className = "Reviews"><b>Reviews:</b> {props.reviews}</p>
            <p className = "Location"><b>Location: </b>{props.location}</p>
            <p className = "Rating"><b>Rating: </b>{props.rating}</p>
        </div>
    );
}

export default SummaryCard;