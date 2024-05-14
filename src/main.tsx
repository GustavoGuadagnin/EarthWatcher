import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Index from './components/Index.tsx';
import FixedComponents from './components/FixedComponents.tsx';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {path: "/top",element: <FixedComponents/>},
      {path: "/index",element: <Index/>}
    ] 
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(<>
  <RouterProvider router={router} />
</>);
