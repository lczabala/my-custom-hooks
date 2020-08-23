import { useState, useEffect, useRef } from "react"

export const useFetch = (url) => {
    const isMounted = useRef(true);

    const [state, setstate] = useState({data: null, loading: true, error: null})

    useEffect(() => {
        console.log('useEfect');
        return () => {
        console.log('useEfect - return');

            isMounted.current = false;
        }
    }, []);

    useEffect(() => {
        setstate({
            loading: true,
            error: null,
            data: null
        });

        fetch(url)
            .then(res => res.json())
            .then(data => {
                if (isMounted.current) {
                    setstate({
                        loading: false,
                        error: null,
                        data
                    })
                }                
            })
    }, [url]);

    return state;
}
