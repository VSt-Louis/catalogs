import React from 'react'

type Props = {
  children?: React.ReactNode
  style?: React.CSSProperties
  row?: boolean
  vCenter?: boolean
  hCenter?: boolean
  flex1?: boolean
  h100?: boolean
  w100?: boolean
  onClick?: React.MouseEventHandler<HTMLDivElement>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
} & Record<string, any>

export const Flex = React.forwardRef<HTMLDivElement, Props>(
  ({ children, style, className, ...options }: Props, ref) => {
    const { row, vCenter, hCenter, flex1, h100, w100, onClick, ...otherProps } =
      options

    const styles = {
      flexBox: {
        display: 'flex',
        flexDirection: row ? ('row' as const) : ('column' as const),
      },
    }

    const conditionalStyles = {
      alignItems: (row ? vCenter : hCenter) ? 'center' : 'flex-start',
      justifyContent: (row ? hCenter : vCenter) ? 'center' : 'flex-start',
      flex: flex1 ? 1 : undefined,
      height: h100 ? '100%' : undefined,
      width: w100 ? '100%' : undefined,
    }

    return (
      <div
        {...otherProps}
        onClick={onClick}
        ref={ref}
        className={className}
        style={{ ...styles.flexBox, ...conditionalStyles, ...style }}
      >
        {children}
      </div>
    )
  }
)

export default Flex
