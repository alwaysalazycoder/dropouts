import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom';
import routes from '../../routes';

const AuthLayout = () => {
  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === "auth") {
        return (
          <Route path={`/${prop.path}`} element={prop.component} key={key} />
        );
      } else {
        return null;
      }
    });
  };


  return (
    <div className='flex w-full'>
    <div className='w-[50%] h-screen overflow-y-scroll'>

    <Routes>
        {getRoutes(routes)}
        <Route path="/" element={<Navigate to="/auth/sign-in" replace />} />
      </Routes>

    </div>

    <div className='w-[50%] h-screen bg-green-200 flex items-center justify-center text-[30px]'>AuthLayout</div>

    </div>
  )
}

export default AuthLayout