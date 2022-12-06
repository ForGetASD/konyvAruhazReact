function KonyvAdmin(props){
    function szerkeszt(){
    
    }
    
    function torol(){
        console.log("Töröl")
        props.torol(props.konyvAdmin.id)
    }


    return(
        <tr>
            <td>{props.konyvAdmin.szerzo}</td>
            <td>{props.konyvAdmin.cim}</td>
            <td>{props.konyvAdmin.ar}</td>
            <td>
                <button onClick={szerkeszt}>Szerkeszt</button>
                <button onClick={torol}>Töröl</button>
            </td>
        </tr>
    )
}

export default KonyvAdmin