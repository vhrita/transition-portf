import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterController } from './routes'
import { ApolloProvider } from '@apollo/client'
import { client } from './lib/apollo'

import './index.sass'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faHome, faThList, faIdCardAlt } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faHome, faThList, faIdCardAlt)
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <RouterController />
    </ApolloProvider>
  </React.StrictMode>
)