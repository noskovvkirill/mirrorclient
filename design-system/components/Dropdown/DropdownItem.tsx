import * as React from 'react'
import { Button } from '../Button'
import { Box } from '../Box'
import { DropdownMenuItem } from '@radix-ui/react-dropdown-menu';

import type { Props as ButtonProps } from '../Button'
import { ReactNode } from 'react'


type Props = {
    children: ReactNode;
    onClick?: () => void;
} & ButtonProps


export const DropdownItem = ({ children, size, width = 'full', disabled, prefix, tone, variant, as, onClick }: Props) => {
    return (
        <DropdownMenuItem asChild>
            <Box>
                <Button
                    onClick={onClick}
                    disabled={disabled}
                    center
                    tone={tone ?? tone}
                    width={width}
                    as={as ?? 'button'}
                    size={size}
                    prefix={prefix}
                    variant={variant}>
                    {children}</Button>
            </Box>
        </DropdownMenuItem>
    )
}

