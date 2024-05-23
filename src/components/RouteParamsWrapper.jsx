import React from 'react'
import { Navigate, Outlet, useSearchParams } from 'react-router-dom';

const RouteParamsWrapper = () => {
    const [searchParams] = useSearchParams();
    const name = searchParams.get('name');
    const num = searchParams.get('num');
    const offset = searchParams.get('offset');
    
    return name && num && offset ? <Outlet /> : <Navigate to="/error" replace />;
}

export default RouteParamsWrapper