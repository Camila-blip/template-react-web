import { useCallback, useState } from "react";

export const useAsync = (asyncFunction: any) => {
    const [result, setResult] = useState<any>(null);
    const [error, setError] = useState<any>(null);
    const [status, setStatus] = useState<any>("idle");

    const run = useCallback(() => {
        setResult(null);
        setError(null);
        setStatus("pending");

        return asyncFunction();
    }, []);
};
