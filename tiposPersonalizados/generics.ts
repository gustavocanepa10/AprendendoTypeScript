/*
* S => State
* T => type
* K => Key
* E => Value
* E => Element


*/
//<T> Simbolo de Generic
function useState<T extends number | string>() {
    let state: T

    function get() {
        return state;

    }

    function set(newValue: T) {
        state = newValue

    }

    return {get,set}
}
// Definiu o novo estado passando <string>
/* Diferença Generic e Union
No generic eu tenho flexibilidade de definir o tipo no momento que 
eu declaro a variavel, no Union eu posso intercalar de um tipo
e outro.
*/

let newState = useState()
newState.get()
newState.set(123)
newState.set("Gustavo")
