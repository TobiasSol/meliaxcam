import { createContext, useContext, useState } from 'react';

const PopupContext = createContext();

export function PopupProvider({ children }) {
  const [showOffer, setShowOffer] = useState(false);

  return (
    <PopupContext.Provider value={{ showOffer, setShowOffer }}>
      {children}
    </PopupContext.Provider>
  );
}

export function usePopup() {
  return useContext(PopupContext);
} 