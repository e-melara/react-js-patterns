import { Suspense } from 'react'

import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  Navigate,
} from 'react-router-dom'

import { routes } from './routers'

function Navigation() {
  return (
    <Suspense fallback={<span>Espere ...</span>}>
      <BrowserRouter>
        <div className='main-layout'>
          <nav>
            <img
              src={
                'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png'
              }
              alt='React Logo'
              style={{ width: '100%' }}
            />
            <ul>
              {routes.map(({ to, name }) => (
                <li key={to}>
                  <NavLink to={to} end>
                    {name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <Routes>
            {routes.map((route, key) => (
              <Route
                key={key}
                path={route.path}
                element={<route.Component />}
              />
            ))}
            {/* para redirecionar la pagina  */}
            <Route path='/*' element={<Navigate to='no-lazy' replace />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Suspense>
  )
}

export default Navigation
