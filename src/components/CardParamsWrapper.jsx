import React from 'react'
import { Navigate, Outlet, useParams } from 'react-router-dom';

const CardParamsWrapper = () => {
    const {id} = useParams();
    
    return id ? <Outlet /> : <Navigate to="/error" replace />
}

export default CardParamsWrapper