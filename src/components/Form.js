import React from 'react'
import '@fortawesome/fontawesome-free/js/all.js';

export default function Form() {


    return (
        <div>
            <input placeholder="Event name"></input>
            <input placeholder="Event description"></input>
            <br />
            <input type="date"></input>
            <button className="add"><i className="fas fa-plus"></i>Add date</button>
            <br />
            <button className="send"><i className="far fa-calendar-plus"></i>Send</button>
        </div>
    )
}
