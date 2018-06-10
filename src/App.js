import React from 'react'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'

import Landing from './components/Landing'
import Education from './components/Education'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Keywords from './components/Keywords'
import Recipes from './components/Recipes'
import Activities from './components/Activities'
import NotFound from './components/NotFound'
import Footer from './components/Footer'

import './App.css'

// Component that will hold body of landing page
const Layout = ({ children }) =>
  <div>
    <main>
      { children }
    </main>
    <Footer />
  </div>

const App = () =>
  <Layout>
    <Router>
      <Switch>
        <Route exact path='/' component={Landing} />
        <Route path='/education' component={Education} />
        <Route path='/experience' component={Experience} />
        <Route path='/projects' component={Projects} />
        <Route path='/keywords' component={Keywords} />
        <Route path='/recipes' component={Recipes} />
        <Route path='/activities' component={Activities} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  </Layout>

export default App
