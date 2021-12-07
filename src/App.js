import './App.css';
import HeaderComponent from './Components/HeaderComponent';
import './assets/css/main.scss'
import HomePageContainer from './Containers/HomePageContainer';
import React, { useState, useEffect } from 'react';

function App() {

  let defaultValue = [
    {
      firstname: 'Mert',
      surname: 'Erdogan',
      email: '111111@lapsmdf.com',
      number: '05349734315'
    },
    {
      firstname: 'kemal',
      surname: 'Erdogan',
      email: '22222@lapsmdf.com',
      number: '12344332211'
    },
    {
      firstname: 'Mert kemal',
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
  ];

  const [cardList, setCardList] = useState(() => {
    const localValues = window.localStorage.getItem('cardList');
    return localValues !== null ? JSON.parse(localValues) : defaultValue
  });

  useEffect(() => {
    window.localStorage.setItem('cardList', JSON.stringify(cardList));
  }, ['cardList', cardList]);


  const [modalCont, setModalCont] = useState(false);
  const [updateState, setUpdateState] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [personControl, setPersonControl] = useState({
    firstname: null,
    surname: null,
    email: null,
    number: null,
  });
  const [filterValues, setFilterValues] = useState([]);
  const [dropdownControl, setDropdownControl] = useState(false);
  const [emailValid, setEmailValid] = useState(true);

  const handleNewPerson = (e) => {
    setCurrentIndex(null);
    setUpdateState(null);
    setPersonControl(null);
    setModalCont(!modalCont);
  }

  const handleUpdate = (e) => {
    setUpdateState(cardList[e]);
    setCurrentIndex(e);
    setPersonControl({
      ...cardList[e]
    });
    setModalCont(true);
    setEmailValid(false);
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
    setEmailValid(true);
  }

  const handleModalInput = (evt) => {
    const value = evt.target.value;
    let mailReg;
    if (evt.target.name === 'email') {
      mailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(evt.target.value);
    }
    if (mailReg === true ) {
      setPersonControl({
        ...personControl,
        [evt.target.name]: value
      });
      setEmailValid(false);
    } else if(evt.target.name !== undefined) {
      setPersonControl({
        ...personControl,
        [evt.target.name]: value
      });
    } else {
      setEmailValid(true);
    }
  }

  const handleDelete = (e) => {
    let tempArr = [...cardList];
    if (e !== -1) {
      tempArr.splice(e, 1);
      setCardList([...tempArr]);
    }
  }

  const handleFilter = (e) => {
    const result = cardList.filter((item, index) => {
      return (
        item.firstname && item.firstname.toLowerCase().indexOf(e.value.toLowerCase()) >= 0 ||
        item.surname && item.surname.toLowerCase().indexOf(e.value.toLowerCase()) >= 0 ||
        item.email && item.email.toLowerCase().indexOf(e.value.toLowerCase()) >= 0 ||
        item.number && item.number.toLowerCase().indexOf(e.value.toLowerCase()) >= 0
      )
    });
    setFilterValues([...result]);
    if (result.length > 0 && e.value.length > 0) {
      setDropdownControl(true);
    } else {
      setDropdownControl(false);
    }
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
        handleDelete={handleDelete}
        handleFilter={handleFilter}
        dropdownControl={dropdownControl}
        filterValues={filterValues}
        emailValid={emailValid}
      />
    </div>
  );
}

export default App;
