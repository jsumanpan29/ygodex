import React,  { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const NoPageFound = () => {

  const navigate = useNavigate()

  useEffect(() => {
    setTimeout(() => {
      navigate("/")
    }, 3000)
  }, [])

  return <div>NotFound</div>
}

export default NoPageFound