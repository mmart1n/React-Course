import React, { Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import LoadingSpinner from "./components/UI/LoadingSpinner";
import Layout from "./components/layout/Layout";
// import AllQuotes from "./pages/AllQuotes";
// import NotFound from "./pages/NotFound";
// import QuoteDetail from "./pages/QuoteDetail";
// import NewQuote from "./pages/NewQuote";

const AllQuotes = React.lazy(() => import("./pages/AllQuotes"));
const NewQuote = React.lazy(() => import("./pages/NewQuote"));
const QuoteDetail = React.lazy(() => import("./pages/QuoteDetail"));
const NotFound = React.lazy(() => import("./pages/NotFound"));

function App() {
  return (
    <Layout>
      <Suspense
        fallback={
          <div className="centered">
            <LoadingSpinner />
          </div>
        }
      >
        <Switch>
          <Route path="/" exact>
            <Redirect to="/quotes" />
          </Route>
          <Route path="/quotes" exact>
            <AllQuotes />
          </Route>
          <Route path="/quotes/new-quote" exact>
            <NewQuote />
          </Route>
          <Route path="/quotes/:quoteId">
            <QuoteDetail />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Suspense>
    </Layout>
  );
}

export default App;
