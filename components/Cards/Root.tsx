import { Card, Box } from 'design-system'
import { ReactElement } from 'react'
import type { BoxProps } from 'design-system'

export type BoxMaxWidth = BoxProps['maxWidth']

const Root = ({ children, maxWidth = '144' }: { children: ReactElement[] | ReactElement, maxWidth?: BoxMaxWidth }) => {
    return (
        <Box width="full"
            maxWidth={maxWidth}
            style={{ display: 'flex', maxHeight: '100%' }}>
            <Card width='full' padding={"none"} hover>
                <Box display='flex' style={{ height: '100%' }}>
                    {children}
                </Box>
            </Card>
        </Box>
    )
}

export default Root