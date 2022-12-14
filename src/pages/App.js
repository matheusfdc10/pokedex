import Header from '../components/header'
import Container from '../components/container'
import Footer from '../components/footer'
import { useState } from 'react';

function App() {
  const [ search, setSearch ] = useState('')
  const [ getSearch, setGetSearch ] = useState([])
console.log(getSearch)
  return (
    <>
      <Header search={search} setSearch={setSearch} setGetSearch={setGetSearch}/>
      <Container search={search} getSearch={getSearch}/>
      <Footer />
    </>
  );
}

export default App;
