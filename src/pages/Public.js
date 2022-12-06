import '../App.css';
import Konyv from '../components/public/Konyv.js';
import { useState } from 'react';
import Kosar from '../components/public/Kosar.js';
import KosarModell from '../modell/kosarModell.js';

const konyvTomb=[
  {
    id:1,
    cim:"Malevil",
    szerzo:"Robert Merle",
    ar:1200,
    db:0
  },
  {
    id:2,
    cim:"Védett férfiak",
    szerzo:"Robert Merele",
    ar:850,
    db:0
  },
  {
    id:3,
    cim:"Kecske",
    szerzo:"Robert Merle",
    ar:1750,
    db:0
  }
]
  
function Public() {
  const [db, setDb] = useState(0)
  const [osszAr, setOsszar] = useState(0)
  const [kosaram, setKosaram] = useState([])
  const kosarModel = new KosarModell(kosaram)

  function kosarKezles(adat){
    kosarModel.setKosar(adat)
    setKosaram(kosarModel.getKosar())
    setDb(kosarModel.getDb())
    setOsszar(kosarModel.getOsszAr())
  }

  function muveletek(adat){
    kosarModel.setKosar(adat)
    setKosaram(kosarModel.getKosar())
  }




  return (
      <>
      <section>
        <p>A könyvek darabszáma: {db}</p>
        <p>Össz ár: {osszAr}</p>
        <table>
          <thead>
            <th>Szerzők</th>
            <th>Cím</th>
            <th>Ár</th>
            <th>DB</th>
          </thead>
          <tbody>
            {kosaram.map((elem, index) =>{
              return( <Kosar kosar={elem} key={index} muveletek={muveletek}/> )
            })}
          </tbody>
        </table>
        
      </section>
      <article>
        {
          konyvTomb.map((konyv, index) => {
            return(<Konyv konyvObj={konyv} key={index} kosarKezelesfv={kosarKezles}/>)
          }
          )
        }
      </article>
    </>
  );
}

export default Public;
