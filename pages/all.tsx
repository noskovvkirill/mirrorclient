import Layout from '@/components/Layout'
import Header from '@/components/Layout/Headers/Feed'
import { Spinner as Loader, Box } from 'design-system'
import GridPage from '@/components/Layout/GridPage'

//global state
import useSWRInfinite from 'swr/infinite'
import { useRef, useEffect } from 'react'
import useOnScreen from 'hooks/useOnScreen'

//utils
import { useRouter } from 'next/router'
import { createClient } from '@supabase/supabase-js'

//type
import type { EntryType } from 'types'
import type { GetServerSideProps } from 'next'


const supabaseUrl = 'https://tcmqmkigakxeiuratohw.supabase.co'
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_SECRET || ''
const supabase = createClient(supabaseUrl, supabaseKey)

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const domains = req?.headers?.host?.split(".");
  const subdomain =
    domains &&
    domains.length === (process.env.NODE_ENV === "development" ? 2 : 3) &&
    domains[0];
  //home page
  if (!subdomain || subdomain === "www") {

    // const { data, error } = await supabase
    //   .from('mirroritems_test')
    //   .select('digest')
    //   .order('timestamp', { ascending: false })
    //   .eq('isPublished', true)
    //   .limit(20)
    const { data, error } = await supabase
      .from('mirroritems')
      .select('*')
      .order('publishedAtTimestamp', { ascending: false })
      .limit(20)


    if (error || data === null) {
      console.log('error fetch', error)
      return { props: { entries: [] } }
    }
    const newdata = data?.map(({ digest }) => digest) as EntryType['digest'][] | null
    return { props: { entries: newdata } }
  }

  //cache subdomain page if redirected
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=1, stale-while-revalidate=59'
  );

  // if (subdomain === "mirror-feed") {
  //   return {
  //     redirect: {
  //       destination: `http://${"mirrorfeed"}.xyz/`,
  //       permanent: true,
  //     },
  //   }
  // }
  return ({ props: { entries: [] } })
  // return {
  //   redirect: {
  //     destination: process.env.NODE_ENV === "development" ? `http://${"mirrorfeed"}.xyz/${subdomain}` : `https://${"mirrorfeed"}.xyz/${subdomain}`,
  //     permanent: true,
  //   },
  // }
};


type Props = {
  entries: EntryType['digest'][]
}



const getKey = (pageIndex: number, previousPageData: any): string | null => {
  if (previousPageData && !previousPageData.length) return null // reached the end
  const key = 20 * pageIndex
  return key.toString()
}

const fetcher = async (index: string | null) => {
  try {
    if (index && parseInt(index) > 0) {
      const { data, error } = await supabase
        .from('mirroritems')
        .select('*')
        .order('publishedAtTimestamp', { ascending: false })
        .range(parseInt(index) + 1, parseInt(index) + 20)
      console.log('error', error)
      if (error) return []
      const newdata = data?.map(({ digest }) => digest) as EntryType['digest'][] | null
      return newdata
    } else {
      const { data, error } = await supabase
        .from('mirroritems')
        .select('*')
        .order('publishedAtTimestamp', { ascending: false })
        .limit(20)
      if (error) return []
      const newdata = data?.map(({ digest }) => digest) as EntryType['digest'][] | null
      return newdata
    }
  } catch (e) {
    throw e
  }
}




const RenderCard = ({ defaultState, pathName }: { defaultState: EntryType['digest'][], pathName: string }) => {
  const { data, error, isValidating, setSize } = useSWRInfinite(getKey, fetcher, { fallbackData: [defaultState] }) // tslint:disable-line
  const ref = useRef<HTMLDivElement | null>(null)
  const entry = useOnScreen(ref, {
    threshold: 0,
    rootMargin: '100%'
  })
  const isVisible = !!entry?.isIntersecting
  useEffect(() => {
    if (isVisible) {
      setSize((s) => s += 1)
    }
  }, [isVisible, setSize])
  if (!data) return <Loader size='large' />
  if (error) return <Box>Something went wrong...Refresh the page  {JSON.stringify(error)}</Box>

  return (
    <GridPage pathName={pathName} data={data.flat()} error={error} isValidating={isValidating} setSize={setSize} />
  )
}


const Page = ({ entries }: Props) => {
  const router = useRouter()

  return (
    <Layout>
      <Box width={'full'}>
        <Header pathName={router.pathname} />
        <RenderCard
          pathName={router.pathname}
          defaultState={entries} />
      </Box>
    </Layout>
  )
}



export default Page