import React from 'react';
import { Outlet }  from 'react-router-dom'
import Nav from './Nav';

const SharedLayout = () => {
  return (
    <div>
              <Nav/>
          <section>
              <Outlet/>
          </section>
    </div>
  )
}

export default SharedLayout