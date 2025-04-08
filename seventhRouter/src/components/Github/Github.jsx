import React, { useEffect,useState } from 'react'
import { Link } from 'react-router-dom'

function Github() {
    const [data, setData] = React.useState([])
    useEffect(()=>{
        fetch("https://api.github.com/users/RaunakKunti")
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setData(data)
        })
    },[])
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
        <div>Name: {data.name}</div>
        Github Followers: {data.followers}
        <img src={data.avatar_url} alt="Git Picture" width={300}/>
        {/* <div>Url : {data.url}</div> */}
        
        <a href={data.html_url} target="_blank" rel="noopener noreferrer">Visit GitHub</a>
    </div>
  )
}

export default Github