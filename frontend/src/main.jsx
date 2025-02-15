import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import LandingPage from './screens/LandingPage.jsx'
import { ProfilePage } from './screens/ProfilePage.jsx'
import { Provider } from 'react-redux'
import { store } from './redux/store.js'
import { Modal } from "./components/modal.jsx"
import { RecoilRoot } from 'recoil'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index element={<LandingPage />} />
      <Route path='u/:username' element={<ProfilePage />} />
    </Route>
  )
)


createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RecoilRoot>
      <RouterProvider router={router} />
    </RecoilRoot>
  </Provider>,
)
