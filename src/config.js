export { recipes } from './build.js'

export const colors = {
  white: '#d7e2dc'
}

export const email = 'quinn.vissak@uconn.edu'

export const apiUri = {
  recipes: {
    pathname: '/api/1.1/tables/recipes/rows'
  }
}

export const navigation = [
  {
    name: 'home',
    link: '/quinnvissak.com/',
    text: 'home'
  },
  {
    name: 'about',
    link: [
      {
        name: 'education',
        link: '/quinnvissak.com/education',
        text: 'education'
      },
      {
        name: 'experience',
        link: '/quinnvissak.com/experience',
        text: 'experience'
      },
      {
        name: 'projects',
        link: '/quinnvissak.com/projects',
        text: 'projects'
      }
    ],
    text: 'about'
  },
  {
    name: 'keywords',
    link: '/quinnvissak.com/keywords',
    text: 'keywords'
  },
  {
    name: 'food',
    link: '/quinnvissak.com/food',
    text: 'food'
  },
  {
    name: 'activities',
    link: '/quinnvissak.com/activities',
    text: 'activities'
  },
  {
    name: '',
    link: null,
    text: '|'
  },
  {
    name: 'login',
    // link: 'http://quinnvissak.test:8080/login',
    link: null,
    text: 'login'
  }
]
