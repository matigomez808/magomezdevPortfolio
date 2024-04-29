import { Container } from "../UI/Container"
import Intro from "../Blog/Intro"
import { HeroPost } from "../Blog/HeroPost"
import { getAllPosts } from "../../lib/apiBlog"
import { MoreStories } from "../Blog/MoreStories"


export const Blog = () => {

  const allPosts = getAllPosts();
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);

  return(
    <>
    <Container>
      <Intro />
      <HeroPost
          title={heroPost.title}
          coverImage={heroPost.coverImage}
          date={heroPost.date}
          author={heroPost.author}
          slug={heroPost.slug}
          excerpt={heroPost.excerpt}
        />
        </Container>
        
        <Container element="section">
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
    </>
  )
}