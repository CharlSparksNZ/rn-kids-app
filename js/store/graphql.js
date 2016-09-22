import Promise from 'bluebird'
import Deferred from '@lightbox/deferred'

const graphQLRoot = 'https://www.lightbox.co.nz/api/graphql'

// minifies a graphql query by stripping out line breaks, extra spaces and commas
export function minify (query) {
  return query
    .trim()
    .replace(/(?:\r\n|\r|\n)/g, '')
    .replace(/,/g, ' ')
    .replace(/\s+/g, ' ')
    .replace(/\s*\{\s*/g, '{')
    .replace(/\s*\}\s*/g, '}')
}

export function concatenate (queries) {
  const names = []

  queries = queries.map((query, i) => {
    // remove first and last curly braces
    query = minify(query).replace(/(^\{|\}$)/g, '')

    // extract root query name for later
    names.push(query.match(/[^\{\(]*/)[0])

    return `q${i}:${query}`
  })
  return [`{${queries.join('')}}`, names]
}

// makes a call to the graphql server using a GET request
export function execute (query) {
  const encodedQuery = encodeURIComponent(minify(query))
  return Promise.resolve(fetch(`${graphQLRoot}?query=${encodedQuery}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  }))
  .then((response) => {
    const contentType = response.headers.get('content-type')
    if (contentType && contentType.indexOf('application/json') !== -1) {
      return response.json()
    }

    console.warn('Oops, we have not got JSON!')
    console.warn(JSON.stringify(response.headers))
    response.text().then(console.warn.bind(console))
    throw (new Error('Server crashed'))
  })
}

let queue = []
let timeout = null

export function executeOnQueue () {
  timeout = null

  // switch queue
  const items = queue
  queue = []

  const queries = items.map((item) => item[0])
  const [query, names] = concatenate(queries)
  execute(query).then((result) => {
    // everyone gets a result!
    items.forEach((item, i) => item[1].resolve({
      data: {
        [names[i]]: result.data[`q${i}`],
      },
    }))
  }).catch((error) => {
    // everyone gets an error
    items.forEach((item) => item[1].reject(error))
  })
}

export default function collector (query) {
  const deferred = new Deferred()

  queue.push([query, deferred])

  if (timeout == null) {
    timeout = setTimeout(executeOnQueue, 10)
  }

  return deferred.promise
}
