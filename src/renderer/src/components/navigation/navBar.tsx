import { useContext } from 'react';
import { NavigationContext } from '../../context/navigationContext';
import './navBar.css';

export default function NavBar() {
  const { currentTab, setCurrentTab } = useContext(NavigationContext);
  
  const tabs = ['Inicio', 'Historial', 'Balance', 'Editar'];

  return (
    <div className="segmented-control-container">
      <div className='segmented-control'>
        {tabs.map((tab) => (
        <button 
          key={tab} 
          className={`currentTab ${currentTab === tab ? 'active' : ''}`}
          onClick={() => setCurrentTab(tab)}
        >
          {tab}
        </button>
      ))}
      </div>
      
    </div>
  );
}