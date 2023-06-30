interface Post {
    id: number;
    title: string;
    body: string;
}

const Posts: React.FC<{ posts: Post }> = ({ posts }) => {
    return (
        <div key={posts.id}>
            <h1>{posts.title}</h1>
            <p>{posts.body}</p>
        </div>
    );
};

export default Posts;
