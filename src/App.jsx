import { Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Header from './components/Header'
import Flavours from './pages/Flavours'
import ProductView from './components/ProductView'
import Footer from "./components/Footer"
import EventHeader from './components/EventHeader'
import FlavourHeader from './components/FlavourHeader'
import ProductHeader from './components/ProductHeader'
import Events from './pages/Events'
import Pnf from './pages/Pnf'
import PnfHeader from './components/PnfHeader'

function App() {
  const location = useLocation()

  // header based on path
  const renderHeader = () => {
  const path = location.pathname;

  if (path === '/') return <Header />;
  if (path === '/flavours') return <FlavourHeader />;
  if (path === '/events') return <EventHeader />;
  if (path === '/*') return <PnfHeader/>
  if (path.startsWith('/product/') && path.endsWith('/view')) return <ProductHeader />;

  return <Header />;
}


  return (
    <>
      {renderHeader()}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/flavours' element={<Flavours/>}/>
        <Route path='/product/:id/view' element={<ProductView />} />
        <Route path='/events' element={<Events/>}/>
        <Route path='/*' element={<Pnf/>}/>

      </Routes>
      <Footer/>
    </>
  )
}

export default App
