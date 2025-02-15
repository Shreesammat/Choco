import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import LandingPage from "./screens/LandingPage.jsx";

import { Provider } from "react-redux";
import { store } from "./redux/store.js";
import Login from "./components/Login.jsx";
import SignUp from "./components/SignUp.jsx";
import { NotesPage } from "./screens/NotesPage.jsx";
import { FoldersPage } from "./screens/FolderPage.jsx";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<SignUp />} />
      <Route path="u/:username" element={<FoldersPage/>} />
      <Route path="u/:username/:folderId" element={<NotesPage/>} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
