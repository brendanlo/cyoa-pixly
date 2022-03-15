import { Switch, Route } from 'react-router-dom';
import HomePage from './Homepage';
import BrowsePage from './BrowsePage';
import AddForm from './AddForm';
import SearchForm from './SearchForm';

function Routes() {
    return (
        <Switch>
            <Route exact to="/">
                <HomePage />
            </Route>
            <Route exact to="/photos">
                <BrowsePage />
            </Route>
            <Route exact to="/photos/add">
                <AddForm />
            </Route>
            <Route exact to="/photos/search">
                <SearchForm />
            </Route>
        </Switch>
    );
}

export default Routes;