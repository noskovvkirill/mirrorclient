import { Box } from 'design-system'
import Edition from 'components/Cards/Edition'
import TweetEmbed from 'react-tweet-embed'
import styles from '../../styles/Tweet.module.css'

const StyledLink = ({ href, children }: { href?: string, children?: any }) => {
    return (
        <Box as='a'
            wordBreak='break-word'
            color={'accent'}
            style={{ textDecoration: 'underline', textUnderlineOffset: '0.2 rem' }}
            href={href}>{children}</Box>
    )
}



const Embeds = ({ href, children }: { href?: string, children?: any }) => {
    const myReg = `://`;
    if (!href) {
        return (<></>)
    }

    try {
        new URL(href)
    } catch (e) {
        return <StyledLink href={href}>{children}</StyledLink>

    }

    if (new URL(href).searchParams.get('display') === 'iframe') {
        return (
            <Box
                width="full"
                height={'fit'}
                marginY={'9'}
                alignItems='center'
                aspectRatio='2/1'
                borderRadius={'large'}
                overflow='hidden'
                borderWidth={'0'}
            >
                <Box
                    as='span'
                    overflow='hidden'
                    width="full"
                    position={"relative"}>
                    <iframe
                        loading="lazy"
                        style={{ border: '0', userSelect: 'none', objectFit: 'cover', width: '100%', minHeight: '100%', height: '100%' }}
                        src={href} />
                </Box>
            </Box>
        )
    }

    if (new URL(href).protocol === 'auction:') {
        return (
            <Box>
                <p>This is Mirror.xyz auction. They aren&apos;t support yet. Please, visit the source publication.</p>
            </Box>
        )
    }

    //  if(new URL(props?.href).protocol === 'proposal:'){
    //     return(<Poll digest={props?.href.split(myReg)[1]}/>)
    // }


    if (new URL(href).protocol === 'edition:') {
        const editions = new URLSearchParams(href.split(myReg)[1].split('?')[1]).get('editionId')
        const contract = href.split(myReg)[1].split('?')[0]
        return (
            <Edition id={Number(editions)} contract={contract} />
        )
    }

    // if(new URL(props?.href).protocol === 'ethereum:'){
    //     const links = props?.href.split(myReg)[1].split('/')
    //     return(
    //         <Nft contract={links[0]} tokenId={links[1]}/> 
    //     )
    // }
 
    if (new URL(href).host === 'twitter.com') {
       if(!href.includes('status')){
           return(
            <Box as='a'
            wordBreak='break-word'
            color={'accent'}
            style={{ textDecoration: 'underline', textUnderlineOffset: '0.2 rem' }}
            href={href}>{children}</Box>
           )
       }
        return (<Box 
        width='full'
        flex='auto'
         display='flex' justifyContent={'center'}>
            {/* <Box display='block' width='fit' maxWidth='full'> */}
                <TweetEmbed 
                className={styles.tweet}
                tweetId={href.split('/')[href.split('/').length-1]}
                options={{ cards: 'hidden' }} />
                {/* </Box> */}
            </Box>)
    }


    return (
        <StyledLink href={href}>{children}</StyledLink>
    )
}
export default Embeds