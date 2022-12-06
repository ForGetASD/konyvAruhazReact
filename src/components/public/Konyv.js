import '../public/Konyv.css'

function Konyv(props) {
    function kosarba(){
        console.log(props.konyvObj)
        props.kosarKezelesfv(props.konyvObj)
    }

    return(
        <div className="konyv">
            <h3>{props.konyvObj.cim}</h3>
            <p>{props.konyvObj.szerzo}</p>
            <p>{props.konyvObj.ar}</p>
            <button onClick={kosarba}>Kosrába</button>
        </div>
    )
}

export default Konyv 