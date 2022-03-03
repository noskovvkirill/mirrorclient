import { useEffect, useState, memo, useRef } from 'react'
import Router from 'next/router'
import { Progress, Box } from 'design-system'


const PageLoadProgress = () => {
    const [progress, setProgress] = useState(0);
    const loadInterval = useRef<any>(null)

    const routeChangeStart = () => {
        setProgress(10);
        loadInterval.current = setInterval(() => {
            if (progress <= 90) {
                setProgress(progress => progress + 5);
            }
        }, 100);
    };

    const routeChangeEnd = () => {
        setProgress(100);
        setTimeout(() => {
            setProgress(0)
            clearInterval(loadInterval.current)
        }, 1000);
    };


    useEffect((): any => {
        Router.events.on("routeChangeStart", routeChangeStart);
        Router.events.on("routeChangeComplete", routeChangeEnd);
        Router.events.on("routeChangeError", routeChangeEnd);
        return () => {
            clearInterval(loadInterval.current)
            Router.events.off("routeChangeStart", routeChangeStart);
            Router.events.off("routeChangeComplete", routeChangeEnd);
            Router.events.off("routeChangeError", routeChangeEnd);
        }
    }, []);

    return (
        <Box position={'fixed'}
            left={'0'}
            top={'0'}
            zIndex='100'
            width='full'
            height='1'
            overflow='hidden'
        >
            <Progress height='1' progress={progress} />
        </Box>
    )
}

export default memo(PageLoadProgress)