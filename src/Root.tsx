import {
  HashRouter,
  Route,
  Routes,
} from 'react-router-dom';
import App from './App';
import Blueprint from './pages/BlueprintPage';

export const Root = () => (
  <HashRouter>
    <Routes>
      <Route path='/' element={<App />}>
        <Route index element={<Blueprint name='' path='/' content='who we are'/>} />
        <Route path='/services' element={<Blueprint name='' path='/about' content='services & benefits'/>} />
      </Route>
    </Routes>
  </HashRouter>
)