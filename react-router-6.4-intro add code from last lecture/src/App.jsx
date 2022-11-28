import {
  BrowserRouter,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import ErrorPage from "./pages/Error";
import BlogLayout from "./pages/BlogLayout";
import BlogPostsPage, { loader as blogPostsLoader } from "./pages/BlogPosts";
import NewPostPage, { action as newPostAction } from "./pages/NewPost";
import PostDetailPage, { loader as blogPostLoader } from "./pages/PostDetail";
import RootLayout from "./components/RootLayout";
import WelcomePage from "./pages/Welcome";

const router = createBrowserRouter(
  // index routes are simply the default routes that will be rendered if the parent route path is activated.
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />} errorElement={<ErrorPage />}>
      <Route index element={<WelcomePage />} />
      <Route path="/blog" element={<BlogLayout />}>
        <Route index element={<BlogPostsPage />} loader={blogPostsLoader} />
        <Route
          path=":id"
          element={<PostDetailPage />}
          loader={blogPostLoader}
        />
      </Route>
      <Route
        path="/blog/new"
        element={<NewPostPage />}
        action={newPostAction}
      />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
  // return (
  //   <BrowserRouter>
  //     <RootLayout>
  //       <Routes>
  //         <Route path="/" element={<WelcomePage />} />
  //         <Route path="/blog" element={<BlogLayout />}>
  //           <Route index element={<BlogPostsPage />} loader={blogPostsLoader} />
  //           <Route path=":id" element={<PostDetailPage />} />
  //         </Route>
  //         <Route path="/blog/new" element={<NewPostPage />} />
  //       </Routes>
  //     </RootLayout>
  //   </BrowserRouter>
  // );
}

export default App;
