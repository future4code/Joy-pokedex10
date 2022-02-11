import React from "react"
import {BrowserRouter, Switch, Route} from "react-router-dom"
import AddDetailsPage from "../pages/DetailsPage/AddDetailsPage"
import AddHomePage from "../pages/HomePage/AddHomePage"
import AddPokedexPage from "../pages/PokedexPage/AddPokedexPage"
import ErrorPage from "../pages/ErrorPage/ErrorPage"

const Router = () => {
    return(
        <BrowserRouter>
        <Switch>
            <Route exact path="/adicionar-pokemon">
                  <AddHomePage/>
            </Route>

            <Route exact path="/pokedex">
                <AddPokedexPage/>
            </Route>

            <Route exact path="/detalhes:id">
                 <AddDetailsPage/> 
            </Route>

            <Route>
                 <ErrorPage/>
            </Route>

        </Switch>
        </BrowserRouter>
    )
}

export default Router