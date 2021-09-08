import React from 'react'
import { Link, useRouteMatch } from 'react-router-dom'
import { Flex } from '@catalogs/react'
import styles from './NavigationMenu.module.scss'
import { Route } from './types'

type Props = {
  routes: Route[]
  baseUrl: string
}

export default function NavigationMenu({ routes, baseUrl }: Props) {
  const { url, path } = useRouteMatch()
  console.log({ url, path })
  console.log(`${baseUrl}/`)

  return (
    <Flex className={styles.NavigationMenu}>
      {routes.map(
        r =>
          !r?.hidden && (
            <Link
              key={r.path}
              className={[
                styles.link,
                path === `${baseUrl}/${r.path}` && styles.active,
              ].join(' ')}
              to={`${baseUrl}/${r.path}`}
            >
              {r.name}
            </Link>
          )
      )}
    </Flex>
  )
}
