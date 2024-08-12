import blogData from "../data/blog";
import Article from "./Article"

function ArticleList() {
    const allPosts = blogData.posts.map(post => {
        return (
            <Article key={post.id} title={post.title} data={post.date} preview={post.preview}/>
        )
    })
    console.log(allPosts)

    return (
        <main>
           {allPosts} 
        </main>
    )
}

export default ArticleList