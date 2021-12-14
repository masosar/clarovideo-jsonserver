import React, { useState, useEffect } from 'react';
import axios from "axios";

const TestAxios = () => {
    //const [response, setResponse] = useState([])
useEffect(() => {
    axios.get('/response')
    .then(resp => {
        console.log(resp)
    })
    .catch(err => {
        console.error(err)
    })
}, [])

    return (
        <div>
            
        </div>
    )
}

export default TestAxios







