import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.sass'
import { RouterController } from './routes'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faHome, faThList, faIdCardAlt } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faHome, faThList, faIdCardAlt)
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
      <RouterController />
  </React.StrictMode>
)