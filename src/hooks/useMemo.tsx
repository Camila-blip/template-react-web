import "../src/styles/App.css";
import { useEffect, useMemo, useState } from "react";
import Posts from "../components/Posts";

interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}
/**a principal funcao dele e nao renderizar componentes quando eu estiver utilizando outros */
/** renderizar somente quando houver uma alteração no componente*/
/** use memo já pode memorizar componente diferente do useCallback que só memoriza funçoes */
/** verificar se realmente vale a pena utilizar o Memo porque tem ocasies que vale mais a pena ficar criando do que memorizar */
export default function Memo() {
    const [posts, setPosts] = useState<Post[]>([]);

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
    /**no use memo eu passo como dependencia quando vai ser necessario ele renderizar denovo */
    return (
        <div className="App">
            {useMemo(() => {
                return posts?.map((posts) => (
                    <Posts key={posts.id} posts={posts} />
                ));
            }, [posts])}
        </div>
    );
}
