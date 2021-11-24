import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Table from './Table'

export default function Events() {
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get("http://localhost:9000/Api/events")
            .then(res => {
                setData(res.data)
            })
    }, [])
    
    return (
        <div className="events">
            {/* (data.length > 0 ? = if)  (index = i++)*/}
            {data.length > 0 ? data.map((item, index) => {
                    return <Table item={item} key={index} />
                })
            : null}
            {/* (: null = else) */}
        </div>
    )
}
