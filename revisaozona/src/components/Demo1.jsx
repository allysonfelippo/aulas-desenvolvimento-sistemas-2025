import './Demo1.css';
import { FcBiohazard } from "react-icons/fc";
import { GiAngelWings } from "react-icons/gi";

function Demo1() {
    function ResponderClique() {
        alert("Olá :D")
    }
    return (
        <div className='container-demo1'>
            <button onClick={ResponderClique}>Clique aqui</button>
            <button onClick={() => { alert("Oi de novo") }}>➡️</button>
            <img className='img-dev' src="./Images/Developer activity-amico.svg" alt="" />
            <FcBiohazard />
            <GiAngelWings />
        </div>
    )
}

export default Demo1