import { useFetch } from "../../hooks/useFetch";
export default function Home() {
    const [result, loading] = useFetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
            method: "GET",
            headers: {
                abc: "1",
            },
        }
    );

    if (loading && result) {
        return <p>Loading...</p>;
    }
    return (
        <>
            <h1>Home</h1>
        </>
    );
}
