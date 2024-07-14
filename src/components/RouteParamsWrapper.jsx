import React from 'react'
import { Navigate, Outlet, useSearchParams } from 'react-router-dom';

const RouteParamsWrapper = () => {
    const [searchParams] = useSearchParams();
    const name = searchParams.get('name');
    const limit = ["10", "30", "50", "100"];
    const num = limit.includes(searchParams.get('num')) ? searchParams.get('num') : null;
    const offset = searchParams.get('offset');
    
    return name && num && offset ? <Outlet /> : <Navigate to="/error" replace />;
}

export default RouteParamsWrapper