import { lazy, LazyExoticComponent } from 'react'

import { NoLazy } from '../lazy/layout/NoLazy'

type JSXComponent = () => JSX.Element

interface Route {
  to: string
  path: string
  name: string
  Component: LazyExoticComponent<JSXComponent> | JSXComponent
}

const lazyLayout = lazy(() => import(/* webpackChunkName: "LayoutLazy" */ '../lazy/layout/LazyLayout'))

export const routes: Route[] = [
  {
    to: 'no-lazy',
    name: 'No Lazy',
    path: '/no-lazy',
    Component: NoLazy,
  },
  {
    to: '/lazyload/',
    name: 'Lazy Dash',
    path: '/lazyload/*',
    Component: lazyLayout,
  },
]
