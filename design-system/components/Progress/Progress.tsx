import * as React from 'react'
import { Box } from '../Box'
import * as ProgressRadix from '@radix-ui/react-progress';
import type { BoxProps } from '../Box'

type Props = {
  progress: number
  height: BoxProps['height']
}

export const Progress = ({ progress, height }: Props) => {
  return <Box as={ProgressRadix.Root}
    height={height}
    value={66}>
    {progress !== 0 && (
      <Box as={ProgressRadix.Indicator}
        height={'full'}
        transitionProperty={'all'}
        transitionDuration={'500'}
        transitionTimingFunction={'inOut'}
        backgroundColor={'accent'}
        style={{ width: `${progress}%` }} />
    )}
  </Box>
} 