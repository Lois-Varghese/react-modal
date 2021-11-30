import React, {createContext, useState} from 'react';

export const AppContext = createContext();

export const AppContextProvider = ({children}) => {
  const [showModal1, setShowModal1] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [showModal3, setShowModal3] = useState(false);
  const [showModal4, setShowModal4] = useState(false);
  const [showModal5, setShowModal5] = useState(false);

  const handleButtonClick = (type) => {
    switch (type) {
      case 1:
        setShowModal1(true);
        break;
      case 2:
        setShowModal2(true);
        break;
      case 3:
        setShowModal3(true);
        break;
      case 4:
        setShowModal4(true);
        break;
      case 5:
        setShowModal5(true);
        break;
      default:
        setShowModal1(true);
        break;
    }
  };

  const closeButtonClick = (type) => {
    switch (type) {
      case 1:
        setShowModal1(false);
        break;
      case 2:
        setShowModal2(false);
        break;
      case 3:
        setShowModal3(false);
        break;
      case 4:
        setShowModal4(false);
        break;
      case 5:
        setShowModal5(false);
        break;
      default:
        setShowModal1(false);
        break;
    }
  };

  const contextValue = {
    showModal1,
    showModal2,
    showModal3,
    showModal4,
    showModal5,
    handleButtonClick,
    closeButtonClick,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};
