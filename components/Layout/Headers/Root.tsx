import {Box} from 'design-system'
interface IRoot {
    children: React.ReactNode | React.ReactNode[]
}

const Root = ({children}:IRoot) => {
    return(
        <Box width='full'
        marginTop={{ xs: '6', sm: '6', md: '16', lg: '16', xl: '16' }}
        paddingY={{ xs: '6', sm: '6', md: '8', lg: '8', xl: '8' }}
        paddingX={{ xs: '4', sm: '4', md: '4', lg: '10', xl: '10' }}
        borderRadius={'2xLarge'}
        marginBottom={{ xs: '10', sm: '10', md: '12', lg: '12', xl: '12' }}
      >
          {children}
    </Box>
    )
}   

export default Root
