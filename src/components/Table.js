import React from 'react'

export default function Table({item}) {

    {console.log(item)}
    return (
        <article>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <p>Created by : {item.author} // id : {item.id}</p> 
            <table> 
                <thead>
                    <tr>
                        <th></th>
                        {item.dates.map(date => {
                            return <th>{date.date}</th>
                        })}
                    </tr>
                </thead>

                <tbody>
                    <tr>
                    {item.dates.attendees.map(name => {
                            return <th>{name.name}</th>
                        })}
                    </tr>
                </tbody>
            </table>
            
        </article>
    )
}
