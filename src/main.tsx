import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Index from './components/Index.tsx';
import FixedComponents from './components/FixedComponents.tsx';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Floods from './components/NaturalDisasters/NaturalDisaster/Floods.tsx';
import NavBar from './components/navBar.tsx';
import OuterBox from './styles/Style.tsx';
import { ChargeContextProvider } from './components/NaturalDisasters/Context/index.tsx';
import EarthQuakes from './components/NaturalDisasters/EarthQuakes/EarthQuakes.tsx';

import Tsunamis from './components/NaturalDisasters/Tsunamis/Tsunamis.tsx';
import ForestFire from './components/NaturalDisasters/Tsunamis/Tsunamis.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <ChargeContextProvider><OuterBox><NavBar/><App /></OuterBox> </ChargeContextProvider>,
    children: [
      {path: "/top",element: <FixedComponents/>},
      {path: "/index",element: <Index/>},
      {path: "/naturalDisaster/:type",element:     <ChargeContextProvider>
      <Floods />
      </ChargeContextProvider>}
    /* </ChargeContextProvider>},
     {path: "/earthquakes",element:     <ChargeContextProvider>
      <EarthQuakes />
    </ChargeContextProvider>},
    {path: "/tsunamis",element:     <ChargeContextProvider>
      <Tsunamis />
    </ChargeContextProvider>},
          {path: "/floods",element:     <ChargeContextProvider>
            <ForestFire />
          </ChargeContextProvider>} */
    ] 
  },
  {
    path: "/",
    element: <FixedComponents />,
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(<>
  <RouterProvider router={router} />
</>);
