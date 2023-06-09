import Modal from "react-modal";
import closeImg from "../../assets/close.svg"
import incomeImg from "../../assets/income.svg"
import outcomeImg from "../../assets/outcome.svg"
import { Container, TransactionTypeContainer, RadioBox } from "./style";
import { useState } from 'react';


interface NewTransacitionsModalProps{
  isOpen: Boolean;
  onRequestClose: () => void;
}

export const NewTransactionsModal = ({ isOpen, onRequestClose }:NewTransacitionsModalProps) => {


   const [type, setType] = useState('deposit');



  
  return (
    <>
     <Modal
        isOpen={isOpen} 
        onRequestClose={onRequestClose}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
        >
       
       <button 
       onClick={onRequestClose} 
       className="react-modal-close">
         <img src={closeImg} alt="fechar Modal" />
       </button>
      
       
        <Container>
          <h2>Cadastar Transação</h2>
         <input 
         placeholder="Titulo"
         />

         <input 
         type="number"
         placeholder="Valor"
         />

        <TransactionTypeContainer>

          {/* Botao de entrada */}
          <RadioBox
          type="button"
          onClick={() => {setType('deposit'); }}
          isActive={type === 'deposit' }
          activeColor='green'
          >
          <img src={incomeImg} alt="entrada" />
          <span>Entrada</span>
          </RadioBox>

          {/* Botao de saida  */}
          <RadioBox
          type="button"
          onClick={() => {setType('withdraw'); }}
          isActive={type === 'withdraw' }
          activeColor='red'
          >
          <img src={outcomeImg} alt="saida" />
          <span>Saida</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input 
         placeholder="Categoria"
         />
        <button type="submit">
          Cadastrar
        </button>
         </Container>

        </Modal>
    
    </>
  )
}

export default NewTransactionsModal;

