import { useState } from 'react'
import './App.css'
import Layout from './components/Layout'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import Home from "./pages/Home";
import NoPageFound from "./pages/NoPageFound";

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
