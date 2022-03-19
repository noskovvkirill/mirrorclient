import * as React from 'react'
import { Box } from '../Box'
import { Stack } from '../Stack'

import * as DropdownRadix from '@radix-ui/react-dropdown-menu';

import * as styles from './styles.css'

import type { Props as ButtonProps } from '../Button'
import type { BoxProps } from '../Box'
import { ReactNodeNoStrings } from '../../types'

type Props = {
  children: ReactNodeNoStrings;
  trigger: ReactNodeNoStrings;
  width?: BoxProps['width'];
  size?: ButtonProps['size']
}

export const Dropdown = ({ children, width = '64', trigger, size = 'medium' }: Props) => {
  return (
    <Box
      height={'fit'}
      as={DropdownRadix.Root}>
      <DropdownRadix.Trigger asChild>
        {trigger}
      </DropdownRadix.Trigger>
      <Box
        padding={'4'}
        width={width}
        backgroundColor={'groupBackground'}
        boxShadow={'1'}
        as={DropdownRadix.Content} className={styles.variants()}>
        <Stack direction='vertical'>
          {children}
        </Stack>
      </Box>
    </Box>
  )
}