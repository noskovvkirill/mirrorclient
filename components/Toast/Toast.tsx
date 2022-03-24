import * as Toast from '@radix-ui/react-toast';
import { Box, Text } from 'design-system'
import React from 'react';

const Provider = Toast.Provider
const Root = Toast.Root
const ViewPort = Toast.Viewport

const ToastViewport = () => {
    return (
        //@ts-ignore
        <ViewPort 
        asChild>
            <Box
            position='fixed'
            bottom='0'
            alignItems={'center'}
            left='0'
            gap='4'
            display='flex'
            flexDirection={'column'}
            maxWidth={'full'}
            zIndex={'100'}
            width='full'
            headers='32'
            padding={'4'}
            />
        </ViewPort>
    )
}


const ToastRoot = ({children}:{children:React.ReactNode | React.ReactNode[]}) => {
    return(
        <Root
        type='foreground'
        asChild
        >
            <Box
            padding={'4'}
            paddingX={'8'}
            backgroundColor='white'
            borderRadius={'2xLarge'}
            boxShadow={'1'}
            width={{
                xs:'full',
                sm:'full',
                md:'fit',
                lg:'fit',
                xl:'fit',
            }}
            >
                {children}
            </Box>

        </Root>
    )
}

const Description = ({children}:{children:string}) => {
    return(
        <Toast.Description>
            <Text
            align={'center'}
                size={'small'}
                weight={'semiBold'}
                color={'accent'}
            >
                {children}
        </Text>
        </Toast.Description>
    )
}

export {
    ToastViewport as Viewport,
    ToastRoot as Root,
    Description as Description,
    Provider as Provider,
}