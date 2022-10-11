import React from 'react'
import { Outlet } from "react-router-dom";
const Cotizar = () => {
  return (
    <div>Cotizar
      <div>
        <Outlet />
      </div>
    </div>
  )
}

export default Cotizar