import React from 'react'
import '@fortawesome/fontawesome-free/js/all.js';
import uuidv4 from 'uuid/v4'
import './table.scss'

export default function Table({item}) {
    function availability(d) {
        if (d === true) {
            return <i className="fas fa-check" id="true"></i>
        }
        else if (d === false) {
            return <i className="fas fa-times" id="false"></i>
        }
        else {
            return <i className="fas fa-question" id="null"></i>
        }
    }

    const datesPerAttendee = []

    for (const date of item.dates) {
        for (const attendee of date.attendees) {
            const elem = datesPerAttendee.findIndex(x =>  x.attendee === attendee.name)

            if (elem !== -1) {
                datesPerAttendee[elem].dates.push({
                    date: date.date,
                    available: attendee.available
                })
            }
            else {
                datesPerAttendee.push({
                    attendee: attendee.name,
                    dates: [{
                        date: date.date,
                        available: attendee.available
                    }]
                })
            }
        }
    }

    return (
        <article>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <p>Created by : {item.author} / / id : {item.id}</p> 
            <table> 
                <thead>
                    <tr key={uuidv4()}>
                        <th key={uuidv4()}></th>
                        {item.dates.map(date => {
                            return <th key={uuidv4()}>{date.date}</th>
                        })}
                    </tr>
                </thead>

                <tbody>
                    {datesPerAttendee.map(attendee => {
                        return <tr key={uuidv4()}>
                                <td key={uuidv4()}>{attendee.attendee}</td>
                                {attendee.dates.map(date => {
                                    return <td key={uuidv4()}>{availability(date.available)}</td>
                                })}
                            </tr>
                    })}
                
                    <tr>
                        <td>
                            <input placeholder="Add participant"></input>
                            <button><i className="fas fa-plus"></i></button>
                        </td>
                        {item.dates.map(date => {
                            return <th key={uuidv4()}><input type="checkbox"></input></th>
                        })}
                    </tr>
                </tbody>
            </table>           
        </article>
    )
}
