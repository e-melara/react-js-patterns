import { NavLink, Route, Routes, Navigate } from 'react-router-dom'

import { LazyPage1 } from '../pages/LazyPage1'
import { LazyPage2 } from '../pages/LazyPage2'
import { LazyPage3 } from '../pages/LazyPage3'

const LazyLayout = () => {
  return (
    <div>
      <ul className="lazy-layout-ul">
        <li>
          <NavLink to='lazy-1'>Lazy Home 1</NavLink>
        </li>
        <li>
          <NavLink to='lazy-2'>Lazy Home 2</NavLink>
        </li>
        <li>
          <NavLink to='lazy-3'>Lazy Home 3</NavLink>
        </li>
      </ul>

      <Routes>
        <Route path='lazy-1' element={<LazyPage1 />} />
        <Route path='lazy-2' element={<LazyPage2 />} />
        <Route path='lazy-3' element={<LazyPage3 />} />

        <Route path='*' element={<Navigate to='lazy-1' replace />} />
      </Routes>
    </div>
  )
}

export default LazyLayout
