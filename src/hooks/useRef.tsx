import { useEffect, useMemo, useRef, useState } from "react";
import Posts from "../components/Posts";

interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

/** pegar uma referencia */
export default function Ref() {
    const [posts, setPosts] = useState<Post[]>([]);
    const [value, setValue] = useState<any>("");
    const input = useRef<any>(null);

    useEffect(() => {
        async function getPost() {
            try {
                const response = await fetch(
                    "https://jsonplaceholder.typicode.com/posts"
                );
                const respJson = await response.json();
                setPosts(respJson);
            } catch {
                console.log("error");
            }
        }

        getPost();
    }, []);

    useEffect(() => {
        input.current.focus();
        console.log("i", input.current);
    }, [value]);

    return (
        <div className="App">
            <input value={value} onChange={(e) => setValue(e.target.value)} />
            {useMemo(() => {
                return posts?.map((posts) => (
                    <Posts key={posts.id} posts={posts} />
                ));
            }, [posts])}
        </div>
    );
}
