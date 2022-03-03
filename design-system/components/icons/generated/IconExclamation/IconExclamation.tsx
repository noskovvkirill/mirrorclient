import * as React from 'react'
import { Box, BoxProps } from '../../../Box'
import { OptionalTitle } from '../../types'
import { IconExclamationSvg } from './IconExclamationSvg'
type Props = {
  className?: BoxProps['className']
  color?: BoxProps['color']
  size?: BoxProps['height']
  strokeWidth?: BoxProps['strokeWidth']
} & OptionalTitle
export const IconExclamation = ({
  color,
  size = '6',
  strokeWidth = '0.5',
  ...props
}: Props) => {
  return (
    <Box
      as={IconExclamationSvg}
      color={color}
      height={size}
      strokeWidth={strokeWidth}
      width={size}
      {...props}
    />
  )
}