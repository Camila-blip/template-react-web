import { useEffect, useRef, useState } from "react";

export const useFetch = (url: any, options?: any) => {
    const [result, setResult] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [shouldLoad, setShouldLoad] = useState<boolean>(false);

    const urlRef = useRef<any>(url);
    const optionsRef = useRef<object>(options);

    useEffect(() => {
        if (url !== urlRef.current) {
            urlRef.current = url;
            setShouldLoad((s) => !s);
        }
    }, [url, options]);

    useEffect(() => {
        let wait = false;
        /** É do navegador esse abort */
        const controller = new AbortController();
        const signal = controller.signal;

        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await fetch(urlRef.current, {
                    signal,
                    ...optionsRef.current,
                });
                const jsonResult = await response.json();
                if (!wait) {
                    setResult(jsonResult);
                }
            } catch {
                console.log("error");
            } finally {
                if (!wait) {
                    setLoading(false);
                }
            }
        };

        fetchData();
        return () => {
            wait = true;
            controller.abort();
        };
    }, [shouldLoad]);
    return [result, loading];
};
