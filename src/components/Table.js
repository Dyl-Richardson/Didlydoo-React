import React from 'react'
import '@fortawesome/fontawesome-free/js/all.js';
import uuidv4 from 'uuid/v4'

export default function Table({item}) {
    function Availability(d) {
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

    return (
        <article>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <p>Created by : {item.author} / / id : {item.id}</p> 
            <table> 
                <thead>
                    <tr>
                        <th key={uuidv4()}></th>
                        {item.dates.map(date => {
                            return <th key={uuidv4()}>{date.date}</th>
                        })}
                    </tr>
                </thead>

                <tbody>
                {item.dates[0].attendees.map(name => {
                                return <tr key={uuidv4()}><th key={uuidv4()}>{name.name}</th></tr>
                                })}



                </tbody>
            </table>
            
        </article>
    )
}
