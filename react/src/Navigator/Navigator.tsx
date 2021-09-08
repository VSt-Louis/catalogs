// import React from 'react'
import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom'
import { Flex } from '@catalogs/react'
import NavigationMenu from './NavigationMenu'
import { Route as Route_t } from './types'

type Props = {
  routes: Route_t[]
  HeaderComponent: (headerProps: NonNullable<Route_t['header']>) => JSX.Element
}

export default function Navigator({ routes, HeaderComponent }: Props) {
  const { url, path } = useRouteMatch()
  return (
    <Flex vCenter h100>
      <Switch>
        {routes.map(r => (
          <Route key={r.path} path={`${path}/${r.path}`}>
            <HeaderComponent {...(r.header || {})} />
            <Flex row h100>
              {!r.hideNav && <NavigationMenu baseUrl={url} routes={routes} />}
              <r.component />
            </Flex>
          </Route>
        ))}
        <Route path={path}>
          <Redirect to={`${path}/home`} />
        </Route>
      </Switch>
    </Flex>
  )
}
