import ReactDOM from 'react-dom/client'
import App from './App'
import './form.css' 
import './index.css'

const notes = notesInDb

ReactDOM.createRoot(document.getElementById('root')).render(
  <App notes={notes} />
)