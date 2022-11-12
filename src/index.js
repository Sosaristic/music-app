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



const router = createBrowserRouter([
  {
    path: "*",
    element: <App />,
    children: [
      {index: true, element: <Landing />},
     
    ]
  },
  {
    path: "terms&condition",
    element: <TermsCondition />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
