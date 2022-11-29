
function Kosar(props){
    function plusz() {
        props.muveletek(props.kosar)
    }
    function minusz() {
        props.muveletek(props.kosar)
    }
    function torol() {
        props.muveletek(props.kosar)
    }
    


    return(
        <tr>
            <td>{props.kosar.cim}</td>
            <td>{props.kosar.szerzo}</td>
            <td>{props.kosar.ar}</td>
            <td>{props.kosar.db}</td>
            <td><button onClick={plusz}>+</button></td>
            <td><button onClick={minusz}>-</button></td>
            <td><button onClick={torol}>Töröl</button></td>
        </tr>
    )
}

export default Kosar