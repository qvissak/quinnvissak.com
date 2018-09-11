import url from 'url'

export const host = process.env.REACT_APP_DIRECTUS_HOST
const env = process.env.REACT_APP_ENVIRONMENT

/**
 * Generic fetch to make api calls
 * @param {string} protocol - 'http' or 'https'
 * @param {string} hostname - example: 'host.com'
 * @param {string} pathname - example: '/p/a/t/h'
 * @param {object} query - example: {'query':'string'}
 * @param {object} args - headers
 */
export const apiFetchGeneric = (protocol, hostname, pathname, query, ...args) => {
  const uri = url.format({ protocol, hostname, pathname, query })

  return fetch(uri, ...args)
    .then((response) => response.json())
    .catch((error) => { throw error })
}

/**
 * Fetch relative to site domain to make api calls *internally*
 * @param {*} pathname - example: '/p/a/t/h'
 * @param {*} query - example: {'query':'string'}
 * @param {*} args - headers
 */
export const apiFetch = (pathname, query, ...args) => {
  const path = url.format({ pathname, query })

  return fetch(path, ...args)
    .then(response => response.json())
    .catch((error) => { throw error })
}

export const apiImageUrlGeneric = (obj, imageurl) => {
  return `${obj.protocol}//${obj.hostname}${imageurl}`
}

export const apiImageUrl = (imageurl) => {
  return env === 'DEVELOPMENT' ? `http://${host}${imageurl}` : `/quinnvissak.com${imageurl}`
}

export const localImageUrl = (imageurl) => {
  return env === 'DEVELOPMENT' ? imageurl : `/quinnvissak.com${imageurl}`
}
