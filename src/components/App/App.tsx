import "./app.module.css";
import HomePage from "./../routes/HomePage/HomePage";
import BookDescrPage from "../routes/BookDescrPage/BookDescrPage";

import { Route, Switch } from "react-router-dom";
import NotFoundPage from "../routes/NotFoundPage/NotFoundPage";

const App = () => {
    return (
        <div className='app'>
            <Switch>
                <Route exact path='/' component={HomePage} />
                <Route exact path='/bookId=:id' component={BookDescrPage} />
                <Route exact path='*' component={NotFoundPage} />
            </Switch>
        </div>
    );
};

export default App;
