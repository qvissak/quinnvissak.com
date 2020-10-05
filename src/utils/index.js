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
export const apiFetchGeneric = async (protocol, hostname, pathname, query, ...args) => {
  const uri = url.format({ protocol, hostname, pathname, query })
  return (await fetch(uri, ...args)).json()
}

/**
 * Fetch relative to site domain to make api calls *internally*
 * @param {*} pathname - example: '/p/a/t/h'
 * @param {*} query - example: {'query':'string'}
 * @param {*} args - headers
 */
export const apiFetch = async (pathname, query, ...args) => {
  const path = url.format({ pathname, query })
  return (await fetch(path, ...args)).json()
}

export const apiImageUrl = async (imageId) => {
  // TODO: remove hard-coded bearer token
  const response = await apiFetch(`http://localhost:8080/_/files/${imageId}`, null, { 'headers': {'Authorization': 'Bearer 1VeakrA1jBflEI4PPDY9qXGd'}})
  const imageUrl = response['data']['data']['url']
  return env === 'DEVELOPMENT' ? `http://${host}${imageUrl}` : `/quinnvissak.com${imageUrl}`
}

export const localImageUrl = (imageurl) => env === 'DEVELOPMENT' ? imageurl : `/quinnvissak.com${imageurl}`

export const makeUniformURL = (path) => path.replace(/ /g, '-').toLowerCase()
