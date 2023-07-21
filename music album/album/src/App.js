import './App.css';
import Header from './Components/Header/Header';
import Music from './Components/Music';
import Card from './Personal-page/Card';
import Pers_peg_mod from './Personal-page-modified/Pers_peg_mod';

function App() {
  return (
    <> 


      <Music />
      <Card 
      name='Антон'
      surname='Панов'
      patronymic='Сергеевич'
      email='email'
      residence='Регион проживония'
      experience='Опыт работы'
      skills='Навыки'
      />
      <Pers_peg_mod />

    </>

  );
}

export default App;
