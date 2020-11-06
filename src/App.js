import React from "react";
import HomePage from "./pages/home-page/home-page.component.jsx";
import DetailsPage from './pages/details-page/details-page.component.jsx';

import { Route, Switch } from 'react-router-dom'

const App = () => {
    return (
      <Switch>
        <Route exact path="/pokemon/:pokimonid" component={DetailsPage} />
        <Route path="/" component={HomePage} />
      </Switch>
    );
}
export default App;
