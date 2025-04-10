import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import { App } from './App'

import { Provider } from 'react-redux'
import { initStore } from './store/store'

declare var module: NodeModule & {
  hot?: {
    accept(path?: string, callback?: () => void): void;
    dispose(callback: () => void): void;
  };
};

const store = initStore()

if (module.hot != null) {
  module.hot.accept('./store/store', () => {
    (async () => {
      const { mainReducer } = await import('./store/rootReducer')
      store.replaceReducer(mainReducer)
    })()
      .then(() => {})
      .catch((er) => console.log(er))
  })
}


const indexJSX = (
  <StrictMode>
    <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
    </Provider>
  </StrictMode>
)

const container = document.getElementById('root')
if (container == null) throw new Error('Failed to find the root element')

createRoot(container).render(indexJSX)