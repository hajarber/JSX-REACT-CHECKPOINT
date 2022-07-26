import './App.css';
import Profil from './components/Profil/Profil';
import FullName from './components/Profil/FullName';
import  Description  from './components/Profil/Description'

function App() {

  return (
    <div className=" mx-60 mt-40" >

      <Profil  />
      <FullName FullName="Hajar Berchil"/>
      <Description/>
    </div>
  );
}

export default App;

