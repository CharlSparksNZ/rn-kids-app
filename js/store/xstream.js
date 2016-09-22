import Promise from 'bluebird'

import XstreamClient from '../packages/xstream'

const client = new XstreamClient({
  baseUrl: 'https://www.lightbox.co.nz/xstream',
})

let loggedIn = false

export default function getClient () {
  if (!loggedIn) {
    return Promise.resolve(
      client.login('light3@stayradiated.com', 'georgerocks')
    ).then(() => {
      loggedIn = true
      return client
    })
  }
  return Promise.resolve(client)
}
