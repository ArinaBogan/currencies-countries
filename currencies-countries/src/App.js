import { useEffect, useState } from 'react';
import axios from 'axios';

import style from "./App.module.css";

function App() {
  const [arrCurrencies, setArrCurrencies] = useState([]);
  const [activeCurrency, setActiveCurrency] = useState('Select Occupation');
  const [flag, setFlag] = useState(true);

  async function getData() {
    const response = await axios.get('https://www.nbrb.by/API/ExRates/Currencies');
    setArrCurrencies(response.data);
  };

  function getActiveCurrency(e) {
    setActiveCurrency(e.target.textContent);
    setFlag(!flag);
  };
  function showList() {
    setFlag(!flag)
  }
  useEffect(() => {
    getData()
  }, []);

  const resultHTML = arrCurrencies.map((el) => {
    return <p onClick={getActiveCurrency}>{el.Cur_Name}</p>
  })

  return (
    < >
      <div onClick={showList} className={style.wrapper}>
        <p>{activeCurrency}</p>
        <div className={style.img}></div>
      </div>
      {flag ? <div className={style.list}>{resultHTML}</div> : null}

    </>
  );
}

export default App;
