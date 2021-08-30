import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import ItemsList from './components/ItemList';
import * as vars from './shared/glovalVars';

function App() {
  const [category, setCategory] = useState(null);
  const [items, setItems] = useState([]);
  const [savedId, setSavedId] = useState(null);

  //useEffect to check if there is a cookie and saved it in app state
  useEffect(() => {
    const cookieData = document.cookie.split(';');
    const id = cookieData.map((i) => {
      const keyValue = i.split('=');
      return keyValue[1];
    });
    setSavedId(id.toString());
  }, []);

  //useEffect to fetch data using id saved in cookies
  useEffect(() => {
    if (savedId) {
      fetch(`https://run.mocky.io/v3/${savedId}`)
        .then((res) => {
          if (res.ok) {
            return res.json();
          } else {
            throw new Error('Request failed!');
          }
        })
        .then((resData) => {
          setItems(resData);
        })
        .catch((err) => {
          console.log(err);
        });
    }

   //set category based on saved id
    const updatedCategory =
      savedId === vars.PETS_ID
        ? vars.PETS
        : savedId === vars.FOOD_ID
        ? vars.FOOD
        : vars.PLANTS;
    setCategory(updatedCategory);
  }, [savedId]);

  //useEffect to fetch data after user has chosen category
  useEffect(() => {
    if (!category) {
      return;
    }
    //create variable based on user choice
    let categoryId;
    switch (category) {
      case vars.PETS:
        categoryId = vars.PETS_ID;
        break;
      case vars.FOOD:
        categoryId = vars.FOOD_ID;
        break;
      case vars.PLANTS:
        categoryId = vars.PLANTS_ID;
        break;
      default:
        break;
    }
    //fetch data from api and save it in state
    fetch(`https://run.mocky.io/v3/${categoryId}`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error('Request failed!');
        }
      })
      .then((resData) => {
        setItems(resData);
        document.cookie = `categoryId=${categoryId}`;
      })
      .catch((err) => {
        console.log(err);
      });
  }, [category, savedId]);
  
  const changeCategory = (category) => setCategory(category);

  return (
    <>
      <Header category={category} change={changeCategory} />
      <main>
        <ItemsList items={items} />
      </main>
    </>
  );
}

export default App;
