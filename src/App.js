import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import ItemsList from './components/ItemList';
import { PETS } from './shared/glovalVars';

function App() {
  const [category, setCategory] = useState(PETS);

  console.log(category)

  const changeCategory = (category) => setCategory(category);

  return (
    <>
      <Header category={category} change={changeCategory} />
      <main>
        <ItemsList />
      </main>
    </>
  );
}

export default App;
