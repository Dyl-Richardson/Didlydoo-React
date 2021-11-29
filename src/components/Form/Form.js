import React from 'react'
import '@fortawesome/fontawesome-free/js/all.js';
import './form.scss'

export default function Form() {
    return (
        <div className="form">
            <input placeholder="Your name"></input>
            <input placeholder="Event name"></input>
            <input placeholder="Event description"></input>
            <input type="date" className="inputDate"></input>
            <button className="add"><i className="fas fa-plus"></i>Add date</button>
            <button className="send"><i className="far fa-calendar-plus"></i>Send</button>
        </div>
    )
}
