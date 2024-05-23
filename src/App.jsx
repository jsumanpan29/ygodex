import { useState } from 'react'
import './App.css'
import Layout from './components/Layout'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import Home from "./pages/Home";
import Cards from './pages/Cards';
import Card from './pages/Card';
import NoPageFound from "./pages/NoPageFound";
import RouteParamsWrapper from './components/RouteParamsWrapper';
import CardParamsWrapper from './components/CardParamsWrapper';

function App() {

  return (
    <BrowserRouter>
      <Routes>
          <Route
            path="/"
            element={
                <Layout />
            }
          >
            <Route index element={<Home />} />
            
            <Route element={<CardParamsWrapper />}>
              <Route path="/card/:id" element={<Card />} />
            </Route>
            <Route element={<RouteParamsWrapper />}>
              {/* <Route path="/t1" element={<T1Screen />} /> */}
              <Route path="/search" element={<Cards />} />
            </Route>
            <Route path="/error" element={<NoPageFound />} />
            {/* <Route path="/search" element={<Teams />}>
              <Route index element={<TeamsIndex />} />
              <Route path=":id" element={<Team />} />
            </Route> */}
            {/* <Route path="/supplier" element={<Supplier />} />
            <Route path="/product-type" element={<ProductType />} />
            <Route path="/credit" element={<CreditLayout />}>
              <Route index element={<Credit />} />
              <Route path=":accountId" element={<AccountTransactions />} />
            </Route> */}
            {/* <Route path="/teams" element={<Teams />}>
              <Route index element={<TeamsIndex />} />
              <Route path=":teamId" element={<Team />} />
            </Route> */}
          </Route>
          <Route path="*" element={<NoPageFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
