import React from 'react'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'

import Landing from './components/Landing'
import Education from './components/Education'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Keywords from './components/Keywords'
import RecipeDetails from './components/Food/RecipeDetails'
import Food from './components/Food'
import Activities from './components/Activities'
import NotFound from './components/NotFound'
import Header from './components/Header'
import Footer from './components/Footer'

import './App.css'

// Component that will hold body of landing page
const Layout = ({ children }) =>
  <div>
    <Header />
    <main>
      { children }
    </main>
    <Footer />
  </div>

const App = () =>
  <Layout>
    <Router>
      <Switch>
        <Route exact path='/quinnvissak.com/' component={Landing} />
        <Route path='/quinnvissak.com/education' component={Education} />
        <Route path='/quinnvissak.com/experience' component={Experience} />
        <Route path='/quinnvissak.com/projects' component={Projects} />
        <Route path='/quinnvissak.com/keywords' component={Keywords} />
        <Route path='/quinnvissak.com/food/:recipe' component={RecipeDetails} />
        <Route path='/quinnvissak.com/food' component={Food} />
        <Route path='/quinnvissak.com/activities' component={Activities} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  </Layout>

export default App
