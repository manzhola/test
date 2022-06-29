import { getResource } from "../services/services";

function calcTotal(total){
    const totalAmount = document.querySelector(total);
    const data = getResource('http://localhost:3000/loans')
        .then(data => console.log(data));

}


export default calcTotal;