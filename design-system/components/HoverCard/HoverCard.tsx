import * as React from 'react'
import { Box } from '../Box'
import * as HoverCardRadix from '@radix-ui/react-hover-card';
import * as styles from './styles.css'


import { ReactNodeNoStrings } from '../../types'
import type { BoxProps } from '../Box'
import type { Props as ButtonProps } from '../Button'

type Props = {
  children: ReactNodeNoStrings;
  trigger: ReactNodeNoStrings;
  width?: BoxProps['width'];
  size?: ButtonProps['size'];
  padding?: BoxProps['padding'];
}

export const HoverCard = ({ children, width = '64', trigger, padding = '4' }: Props) => {
  return (<Box
    as={HoverCardRadix.Root}>
    <HoverCardRadix.Trigger asChild>
      {trigger}
    </HoverCardRadix.Trigger>
    <Box
      padding={padding}
      width={width}
      backgroundColor={'groupBackground'}
      boxShadow={'1'}
      as={HoverCardRadix.Content} className={styles.variants()}>
      {children}
    </Box>
  </Box>)
} 