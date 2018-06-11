export const colors = {
  white: '#d7e2dc'
}

export const email = 'quinn.vissak@uconn.edu'

export const navigation = [
  {
    name: 'home',
    link: '/',
    text: 'home'
  },
  {
    name: 'about',
    link: [
      {
        name: 'education',
        link: '/education',
        text: 'education'
      },
      {
        name: 'experience',
        link: '/experience',
        text: 'experience'
      },
      {
        name: 'projects',
        link: '/projects',
        text: 'projects'
      }
    ],
    text: 'about'
  },
  {
    name: 'keywords',
    link: '/keywords',
    text: 'keywords'
  },
  {
    name: 'food',
    link: '/food',
    text: 'food'
  },
  {
    name: 'activities',
    link: '/activities',
    text: 'activities'
  },
  {
    name: '',
    link: null,
    text: '|'
  },
  {
    name: 'login',
    link: 'http://quinnvissak.test:8080/login',
    text: 'login'
  }
]
