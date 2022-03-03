import * as React from 'react'
import { Box, BoxProps } from '../../../Box'
import { OptionalTitle } from '../../types'
import { IconCodeSvg } from './IconCodeSvg'
type Props = {
  className?: BoxProps['className']
  color?: BoxProps['color']
  size?: BoxProps['height']
  strokeWidth?: BoxProps['strokeWidth']
} & OptionalTitle
export const IconCode = ({
  color,
  size = '6',
  strokeWidth = '0.5',
  ...props
}: Props) => {
  return (
    <Box
      as={IconCodeSvg}
      color={color}
      height={size}
      strokeWidth={strokeWidth}
      width={size}
      {...props}
    />
  )
}