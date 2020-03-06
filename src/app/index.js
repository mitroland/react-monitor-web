import React, { useContext } from 'react'
import Header from "./components/Header/index"
import HomePage from "./pages/HomePage"
import List from "./pages/List"
import Detail from "./pages/Detail"
import "./style.css"
import "./loader.css"
import { GenericContext } from './contexts/index'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

const App = () => {
    const { state, loadProduct } = useContext(GenericContext)

    const loader = (status) => {
        let className = `pageloader`
        className = status ? `${className} is-active` : `${className}`

        return (
            <div className={className}>
                <span className="title">Please wait ... </span>
            </div>
        )
    }

    return (
        <BrowserRouter>
            {
                state.loading === true ? loader(true) : loader(false)
            }
            <Header/>
            <div className="container">
                <Switch>
                    <Route exact path='/' component={HomePage}/>
                    <Route exact path='/product' component={List}/>
                    <Route exact path='/product/:name' component={Detail}/>
                </Switch>
            </div>
        </BrowserRouter>
    )
}


export default App
