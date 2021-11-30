import React, {useContext} from 'react';
import {AppContext} from './util/AppContext';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './screens/Home/Home';
import Button from './common/Button/Button';
import InnerChild1 from './screens/InnerChild1/InnerChild1';
import InnerChild2 from './screens/InnerChild2/InnerChild2';
import InnerChild3 from './screens/InnerChild3/InnerChild3';
import Modal from './components/Modal/Modal';
import hotelData from './constants/imageUrl';

const App = () => {
  const {
    showModal1,
    showModal2,
    handleButtonClick,
    closeButtonClick,
    showModal3,
    showModal4,
    showModal5,
  } = useContext(AppContext);

  const modalBodyContent = (type, modalNumber) => {
    const hotelObject = hotelData(type);
    return (
      <div className="content">
        <img src={hotelObject.url} alt={hotelObject.altText} />
        <div className="text">
          <h2>{hotelObject.title}</h2>
          <p>{hotelObject.body}</p>
          {type !== 5 && (
            <div className="innerButton">
              <Button
                onClick={() =>
                  handleButtonClick(modalNumber)
                }>{`Open Modal ${modalNumber}`}</Button>
            </div>
          )}
        </div>
      </div>
    );
  };
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/child1" element={<InnerChild1 />} />
          <Route path="/child2" element={<InnerChild2 />} />
          <Route path="/child3" element={<InnerChild3 />} />
        </Routes>
      </Router>
      <Modal
        show={showModal1}
        onClose={() => closeButtonClick(1)}
        modalStyle={{width: '70%', height: '70%'}}
        backdropStyle={{backgroundColor: 'rgba(0,0,0,0.6)'}}>
        {modalBodyContent(1, 2)}
      </Modal>
      <Modal
        show={showModal2}
        onClose={() => closeButtonClick(2)}
        modalStyle={{width: '50%', height: '40%'}}
        backdropStyle={{backgroundColor: 'rgba(0,0,0,0.3)'}}>
        {modalBodyContent(2, 3)}
      </Modal>
      <Modal
        show={showModal3}
        onClose={() => closeButtonClick(3)}
        modalStyle={{width: '60%', height: '50%'}}
        backdropStyle={{backgroundColor: 'rgba(0,0,0,0.8)'}}>
        {modalBodyContent(3, 4)}
      </Modal>
      <Modal
        show={showModal4}
        onClose={() => closeButtonClick(4)}
        modalStyle={{width: '100%', height: '60%'}}
        backdropStyle={{backgroundColor: 'rgba(0,0,0,0.1)'}}>
        {modalBodyContent(4, 5)}
      </Modal>
      <Modal
        show={showModal5}
        onClose={() => closeButtonClick(5)}
        modalStyle={{width: '80%', height: '80%'}}
        backdropStyle={{backgroundColor: 'rgba(0,0,0,1)'}}>
        {modalBodyContent(5, 1)}
      </Modal>
    </>
  );
};

export default App;
