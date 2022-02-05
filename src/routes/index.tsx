import { lazy, Suspense } from "react";
import { useSelector } from "react-redux";
import { Redirect, Route, Switch, Router } from "react-router";
import { RootState } from "redux/reducers";
import History from "manager/history";
import SuspenseLoader from "components/shared/suspense-loader";

const LazyLogin = lazy(() => import("components/guest/login"));
const LazyHome = lazy(() => import("components/app/home"));

const Routes = () => {
  const { isLoading, isLoggedIn } = useSelector(
    ({ appConfig: { isLoading }, user: { isLoggedIn } }: RootState) => {
      return {
        isLoading,
        isLoggedIn,
      };
    }
  );
  return (
    <Router history={History}>
      {isLoading && <SuspenseLoader />}
      <Suspense fallback={<SuspenseLoader />}>
        <Switch>
          <Route path="/login" component={LazyLogin} />
          {isLoggedIn && <Route path="/home" component={LazyHome} />}
          <Redirect exact from="*" to="/login" />
        </Switch>
      </Suspense>
    </Router>
  );
};

export default Routes;
