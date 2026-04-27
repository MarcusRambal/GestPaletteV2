import React, { useContext } from 'react'
import './App.css'

//Vistas
import { Home } from './screens/home/home'
import { History } from './screens/history/history'
import { Balance } from './screens/balance/balance'
import { Edit } from './screens/edit/edit'

//Context
import { NavigationContext } from './context/navigationContext' 

//Navigation
import NavBar from './components/navigation/navBar'


function App(): React.JSX.Element {
  const { currentTab } = useContext(NavigationContext)

  return (
    <div className="app-container">
      <div className='app-navBar-container'>
        <NavBar />
      </div>
      
      {/* Renderizado condicional basado en el contexto */}
      <div className='app-home-container'>
        {currentTab === 'Inicio' && <Home />}
        {currentTab === 'Historial' && <History />}
        {currentTab === 'Balance' && <Balance />}
        {currentTab === 'Editar' && <Edit />}
      </div>
    </div>
  )
}

export default App