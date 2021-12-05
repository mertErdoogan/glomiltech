import './App.css';
import HeaderComponent from './Components/HeaderComponent';
import './assets/css/main.scss'
import HomePageContainer from './Containers/HomePageContainer';
import React, {useState} from 'react';

function App() {
  const [cardList, setCardList] = useState([
    {
      name: 'Mert Erdoğan',
      number: '05349734315'
    },
    {
      name: 'Mert Erdoğan 2',
      number: '12344332211'
    },
    {
      name: 'Mert Erdoğan 3',
      number: '44443332211'
    },
    {
      name: 'Mert Erdoğan 4',
      number: '11112223344'
    },
    {
      name: 'Mert Erdoğan 5',
      number: '44443332211'
    },
  ]);

  const [modalCont, setModalCont] = useState(false);
  const [updateState, setUpdateState] = useState(null);

  const handleNewPerson = (e) => {
    setUpdateState(null);
    setModalCont(!modalCont);
  }

  const handleUpdate = (e) => {
    setUpdateState(cardList[e]);
    setModalCont(true);
  }

  return (
    <div className="App">
      <HeaderComponent handleNewPerson={handleNewPerson}/>
      <HomePageContainer cardList={cardList} handleNewPerson={handleNewPerson} updateState={updateState} modalCont={modalCont} setModalCont={setModalCont} handleUpdate={handleUpdate}/>
    </div>
  );
}

export default App;
