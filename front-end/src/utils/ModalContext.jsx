import React, { createContext, useContext, useMemo } from 'react';
import { useDisclosure } from '@chakra-ui/react';

// Create a context for managing modal state
const ModalContext = createContext();

/**
 * ModalProvider is a component that wraps your app and provides
 * modal state to all components using React's Context API.
 */
export const ModalProvider = ({ children }) => {
  // Create separate disclosure states for Login and Signup modals
  const loginDisclosure = useDisclosure();
  const signupDisclosure = useDisclosure();

  // Use useMemo to ensure that the context value is stable between re-renders
  const modalValue = useMemo(
    () => ({ loginDisclosure, signupDisclosure }),
    [loginDisclosure, signupDisclosure]
  );

  return (
    <ModalContext.Provider value={modalValue}>
      {children}
    </ModalContext.Provider>
  );
};

/**
 * Custom hook to access modal state from anywhere in the app.
 * This hook should always start with "use" to follow React's naming conventions.
 */
export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
};
