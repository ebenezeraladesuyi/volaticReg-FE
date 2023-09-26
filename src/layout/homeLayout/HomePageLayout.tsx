// import React from 'react'

import { Header } from "../../components";
import { Footer } from "../../components";
import { Outlet } from "react-router-dom"

const HomePageLayout = () => {
  return (
    <div>

        <Header />

        <Outlet />

        <Footer />

    </div>
  )
}

export default HomePageLayout