import './App.css'
import { Homepage } from './Components/Homepage'
import { AppProvider } from './Context/AppContext'

function App() {
  return (
      <AppProvider>
        <Homepage />
      </AppProvider>
  )
}

export default App
