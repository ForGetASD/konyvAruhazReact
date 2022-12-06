import '../App.css';
import KonyvAdmin from '../components/admin/KonyvAdmin.js'
import KonyvAruhazModell from '../modell/konyvAruhazModell';
let konyvModell = new KonyvAruhazModell();

const konyvAdminTomb=[
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

function konyvKezeles(adat){
  konyvModell.setKonyvek(adat)
}
  
function torol(id){
  konyvModell.adatTorol(id)

}

function Admin() {
  return (
    <>
      <article>
        <table>
          <thead>
            <th>Szerző</th>
            <th>Cím</th>
            <th>Ár</th>
            <th></th>
          </thead>
          <tbody>
            {konyvAdminTomb.map((konyv, index) => {
              return(<KonyvAdmin konyvAdmin={konyv} key={index} torol={torol} konyvKezelesfv={konyvKezeles}/>)
            })}
          </tbody>
        </table>
      </article>
    </>
  );
}

export default Admin;
