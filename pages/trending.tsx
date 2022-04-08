import Layout from '@/components/Layout'
import Header from '@/components/Layout/Headers/Top'
import {Box } from 'design-system'
import GridPage from '@/components/Layout/GridPage'
import thunder from 'src/fetcher'

//types
import { EntryType } from 'types'

//utils
import { useRouter } from 'next/router'

//type
import type { GetServerSideProps } from 'next'

const fetcher = () => {
  return thunder('query')({
      topEntries:{
          entryId:true,
          digest:true
       }
      }
  )
}


export const getServerSideProps: GetServerSideProps = async ({ res }) => {

    const {topEntries} = await fetcher()


    res.setHeader(
      'Cache-Control',
      'public, s-maxage=1, stale-while-revalidate=59'
    );

    return({
      props: {
        entries: topEntries,
      }
    })
    
  }



type Props = {
  entries: EntryType[]
}



const RenderCard = ({ defaultState, pathName }: { defaultState: EntryType[], pathName: string }) => {
 
  return (
    <GridPage pathName={pathName} data={defaultState.map((item)=>item?.digest || '')}  />
  )
}

const Page = ({ entries }: Props) => {
  const router = useRouter()
 
  return (
    <Layout
    color='green'
    title={'Mirror Feed'}
    description={'Subscribe to your favourite Mirror.xyz publications and authors'}
    cover={'https://mirrorfeed.xyz/cover.png'}
    >
      <Box width={'full'}>
        <Header />
        <RenderCard
          pathName={router.pathname}
          defaultState={entries} />
      </Box>
    </Layout>
  )
}



export default Page