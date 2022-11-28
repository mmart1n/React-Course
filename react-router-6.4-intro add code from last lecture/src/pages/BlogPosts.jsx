import { useLoaderData } from "react-router-dom";
import Posts from "../components/Posts";
import { getPosts } from "../util/api";

function BlogPostsPage() {
  // use this hook in order to retrieve the data from the loader function
  const loaderData = useLoaderData();

  // const [error, setError] = useState();
  // const [posts, setPosts] = useState();
  // const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   async function loadPosts() {
  //     setIsLoading(true);
  //     try {
  //       const posts = await getPosts();
  //       setPosts(posts);
  //     } catch (err) {
  //       setError(err.message);
  //     }
  //     setIsLoading(false);
  //   }

  //   loadPosts();
  // }, []);

  return (
    <>
      <h1>Our Blog Posts</h1>
      {/* {isLoading && <p>Loading posts...</p>}
      {error && <p>{error}</p>}
      {!error && posts && <Posts blogPosts={posts} />} */}
      <Posts blogPosts={loaderData} />
    </>
  );
}

export default BlogPostsPage;

// Its important that we export this function because it can be registered on our route definition
// And React Router will automatically call this function whenever we navigate to this route.
// And it will automatically get the data returned by the loader function and make it available in the component.
export function loader({ request, params }) {
  // In this function we can then return some data
  // that should be available in this component function (array, object, some text, number, promise, etc.)
  return getPosts();
}
