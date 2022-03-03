import * as React from 'react'
import { Box, BoxProps } from '../../../Box'
import { OptionalTitle } from '../../types'
import { IconUploadSvg } from './IconUploadSvg'
type Props = {
  className?: BoxProps['className']
  color?: BoxProps['color']
  size?: BoxProps['height']
  strokeWidth?: BoxProps['strokeWidth']
} & OptionalTitle
export const IconUpload = ({
  color,
  size = '6',
  strokeWidth = '0.5',
  ...props
}: Props) => {
  return (
    <Box
      as={IconUploadSvg}
      color={color}
      height={size}
      strokeWidth={strokeWidth}
      width={size}
      {...props}
    />
  )
}