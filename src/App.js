import './App.css';
import HeaderComponent from './Components/HeaderComponent';
import './assets/css/main.scss'
import HomePageContainer from './Containers/HomePageContainer';
import React, { useState } from 'react';

function App() {
  const [cardList, setCardList] = useState([
    {
      firstname: 'Mert ',
      surname: 'Erdogan',
      email: '111111@lapsmdf.com',
      number: '05349734315'
    },
    {
      firstname: 'Mert 2',
      surname: 'Erdogan',
      email: '22222@lapsmdf.com',
      number: '12344332211'
    },
    {
      firstname: 'Mert 3',
      surname: 'Erdogan',
      email: '33333@lapsmdf.com',
      number: '44443332211'
    },
    {
      firstname: 'Mert 4',
      surname: 'Erdogan',
      email: '44444@lapsmdf.com',
      number: '11112223344'
    },
    {
      firstname: 'Mert 5',
      surname: 'Erdogan',
      email: '55555@lapsmdf.com',
      number: '44443332211'
    },
  ]);

  const [modalCont, setModalCont] = useState(false);
  const [updateState, setUpdateState] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [personControl, setPersonControl] = useState({
    firstname: null,
    surname: null,
    email: null,
    number: null,
  });

  const handleNewPerson = (e) => {
    setCurrentIndex(null);
    setUpdateState(null);
    setModalCont(!modalCont);
  }

  const handleUpdate = (e) => {
    setUpdateState(cardList[e]);
    setCurrentIndex(e);
    setPersonControl({
      ...cardList[e]
    });
    setModalCont(true);
  }

  const handleModalFormSubmit = (e) => {
    if (currentIndex != null) {
      let tempArr = [...cardList];
      tempArr[currentIndex] = personControl;
      setCardList([...tempArr]);
    } else {
      let tempArr = [...cardList];
      tempArr = [...tempArr, personControl];
      setCardList([...tempArr]);
    }
    setModalCont(false);
  }

  const handleModalInput = (evt) => {
    const value = evt.target.value;
    setPersonControl({
      ...personControl,
      [evt.target.name]: value
    });
  }

  return (
    <div className="App">
      <HeaderComponent handleNewPerson={handleNewPerson} />
      <HomePageContainer
        handleModalInput={handleModalInput}
        cardList={cardList}
        updateState={updateState}
        modalCont={modalCont}
        handleNewPerson={handleNewPerson}
        setModalCont={setModalCont}
        handleUpdate={handleUpdate}
        handleModalFormSubmit={handleModalFormSubmit}
      />
    </div>
  );
}

export default App;
