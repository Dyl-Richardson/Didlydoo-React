import React from 'react'

export default function Form() {


    return (
        <div>
            <input placeholder="Event name"></input>
            <input placeholder="Event description"></input>
            <br />
            <input type="date"></input>
            <button className="add">Add date</button>
            <br />
            <button className="send">Send</button>
        </div>
    )
}
