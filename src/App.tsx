import Dashboard from "./components/dashboard"
import Header from "./components/header"
import  GlobalStyle  from "./styles/global"
import Modal from "react-modal"

import { useState } from "react"

import NewTransactionsModal from "./components/NewTransactionsModal"

Modal.setAppElement('#root');

const App = () => {

  const [isNewTransactionOpen, setIisNewTransactionOpen] = useState(false);

  function HandleOpenNewTransactionModal() {
    setIisNewTransactionOpen(true);
  }
  function HandleCloseNewTransactionModal() {
    setIisNewTransactionOpen(false);
  }
  
  return (
    <>

      <Header onOpenNewTransactionModal={HandleOpenNewTransactionModal}/>
      <Dashboard />
         
     <NewTransactionsModal 
         isOpen={isNewTransactionOpen}
         onRequestClose={HandleCloseNewTransactionModal}
     />
      <GlobalStyle />
  
      </>
  )
}

export default App