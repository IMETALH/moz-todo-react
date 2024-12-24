import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const DATA = [
  { id: "todo-0", name: "Eat", completed: true },
  { id: "todo-1", name: "Sleep", completed: false },
  { id: "todo-2", name: "Repeat", completed: false },
];
console.log("Imetal Home")
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App tasks={DATA} subject="Imetal Home" />

  </StrictMode>,
)
console.log(DATA)