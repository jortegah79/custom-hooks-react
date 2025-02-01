import { useEffect, useState } from "react"

const cacheStore = {};


export const useFetch = (url) => {

    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: false,
        error: null
    });

    useEffect(() => {
        getFetch();
    }, [url]);

    const setLoadinState = () => {
        setState({
            data: null,
            isLoading: true,
            hasError: false,
            error: null
        });
    }

    const getFetch = async () => {

        if (cacheStore[url]) {
            setState({
                data: cacheStore[url],
                isLoading: false,
                hasError: false,
                error: null
            });
            return;
        }
        setLoadinState();
        const resp = await fetch(`${url}`);

        await new Promise(resolve => setTimeout(resolve, 1500))


        if (!resp.ok) {
            setState({
                data: null,
                isLoading: false,
                hasError: true,
                error: {
                    code: resp.status,
                    message: resp.statusText
                }
            });
            return;
        }
        const data = await resp.json();
        console.log(data)
        setState({
            data: data,
            isLoading: false,
            hasError: false,
            error: null
        })
        cacheStore[url] = data;
    }

    return {
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError
    }
}