import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PageViewSet } from './components/PageViewset';
import { PageCreateSet } from './components/PageCreateSet';
import { PageSelectSet } from './components/PageSelectSet';

import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PageSelectSet/>}/>
        <Route path='/set' element={<PageViewSet/>}/>
        <Route path='/admin' element={<PageCreateSet/>}/>
        <Route path='*' element={<PageSelectSet/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App