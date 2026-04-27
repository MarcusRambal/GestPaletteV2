import { createContext, useState, ReactNode } from 'react';

interface NavContextType {
  currentTab: string;
  setCurrentTab: (tab: string) => void;
}


export const NavigationContext = createContext<NavContextType>({
  currentTab: 'Inicio',
  setCurrentTab: () => {},
});


export const NavigationProvider = ({ children }: { children: ReactNode }) => {
  const [currentTab, setCurrentTab] = useState('Inicio');

  return (
    <NavigationContext.Provider value={{ currentTab, setCurrentTab }}>
      {children}
    </NavigationContext.Provider>
  );
};