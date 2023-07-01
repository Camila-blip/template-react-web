import { useEffect, useRef } from "react";

const useMyHook = (cb: any, delay = 1000) => {
    const savedCb = useRef<any>();

    useEffect(() => {
        savedCb.current = cb;
    }, [cb]);

    useEffect(() => {
        const interval = setInterval(() => {
            savedCb.current();
        }, delay);

        return () => clearInterval(interval);
    }, [delay]);
};

export default useMyHook;
