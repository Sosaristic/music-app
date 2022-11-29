import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Landing from './pages/Landing';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
  
} from "react-router-dom";
import TermsCondition from './pages/TermsCondition';
import AlbumPage from './pages/Album';
import Artists from './pages/Artists';
import Playlists from './pages/Playlists';
import TracksPage from './pages/Tracks';
import PageNotFound from './pages/PageNotFound';
import Myplaylist from './pages/Myplaylist';
import MyAlbum from './pages/MyAlbum';
import Authenticated from './components/Reusable components/Authenticated';
import { MenuProvider } from './context/MenuContext';



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {index: true, element: <Landing />},
      {path: "albums", element: <Authenticated> <AlbumPage /></Authenticated>  },
      {path: "artists", element: <Authenticated> <Artists /></Authenticated>},
      {path: "playlists", element: <Authenticated> <Playlists /></Authenticated>},
      {path: "tracks", element: <Authenticated> <TracksPage /></Authenticated>},
      {path: "my-library/recently-played", element: <Authenticated> <TracksPage /></Authenticated>},
      {path: "my-library/playlists", element: <Authenticated> <Myplaylist /></Authenticated>},
      {path: "my-library/albums", element: <Authenticated> <MyAlbum /></Authenticated>},




    ]
  },
  {
    path: "terms&condition",
    element: <TermsCondition />
  },
  {path: "*", element: <PageNotFound /> }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MenuProvider>
    <RouterProvider router={router} />
    </MenuProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
