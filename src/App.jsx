import Header from './components/Header'
import Loading from './components/Loading'
import RouterConfig from './config/RouterConfig'
import PageContainer from './container/PageContainer'
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import './App.css'
import Basket from './components/Basket';

function App() {

  return (
    <>
      <PageContainer>
        <Header />
        <RouterConfig />
        <Loading />
        <Basket />
        <ToastContainer />
      </PageContainer>
    </>
  )
}

export default App
