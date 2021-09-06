import React from 'react'
import Flex from '../Flex'
import CircularProgress from '@material-ui/core/CircularProgress'

type Props = {
  size?: number
  text?: string
}

export const Spinner = ({ size, text }: Props) => {
  return (
    <Flex hCenter h100 v100 vCenter>
      {text && <h2>{text}</h2>}
      <CircularProgress size={size || 30} />
    </Flex>
  )
}
export default Spinner
