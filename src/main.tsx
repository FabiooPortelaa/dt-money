import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { createServer } from "miragejs"; 

createServer({
   routes() {
    this.namespace = 'api'

    this.get('/transactions', () => {
      return [
        {
          id: 1 ,
          title: 'transaction 1' ,
          amount: 400,
          type: 'deposity',
          category: 'food' ,
          createdAt:  new Date(),
        }
      ]
    } )
   }
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
