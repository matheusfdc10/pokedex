import Header from '../components/header'
import Container from '../components/container'
import Footer from '../components/footer'
import { useState } from 'react';

function App() {
  const [ search, setSearch ] = useState('')

  return (
    <>
      <Header search={search} setSearch={setSearch}/>
      <Container search={search} />
      <Footer />
    </>
  );
}

export default App;
