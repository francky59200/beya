import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import Connexion from './components/Connexion'
import NotFound from './components/NotFound'
import * as serviceWorker from './serviceWorker'

import { BrowserRouter, Route, Switch } from 'react-router-dom'

const Root = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Connexion} />
            <Route  path='/pseudo/:pseudo' component={App} />
            <Route   component={NotFound} />           
        </Switch>
    </BrowserRouter>
)

ReactDOM.render(<Root />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()

// dans cet index.js on a importer react router pour gerer l'affichage des pages
// on cree une constante root qui sera la nouvelle appli
// on creer une balise englobante <BrowserRouter> a l'interieur on fait un switch des pages
// avec la balise <Route>

//