import { Container } from "./Container"
import Intro from "./Intro"
import { HeroPost } from "./HeroPost"
import { getAllPosts } from "@/lib/api"
import { MoreStories } from "./MoreStories"


export const Blog = () => {

  const allPosts = getAllPosts();
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);

  return(
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
        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
    </Container>
  )
}