const FATOR_KM1_MILHAS = 0.621371;
const FATOR_KG_LIBRAS = 2.20462;
// 10,  km,   M
function converter(valor, origem, destino) {
    let resultado = 0;
    
    //Normalização dos dados de entrada.
    const origemMinuscula = origem.toLowerCase();
    const destinoMinuscula = destino.toLowerCase();

    // //            V             AND                  V
    // if (origemMinuscula == "km" && destinoMinuscula === "milha") {
    //     resultado = valor * FATOR_KM1_MILHAS;// Valor => 10 * 0.621371.
    //     return resultado;
    // }

    // if (origemMinuscula == "km" && destinoMinuscula === "milha") {
    //     resultado = valor * FATOR_KG_LIBRAS;
    //     return resultado;
    // }

    switch (`${origemMinuscula}_${destinoMinuscula}`) {
        case 'km_milha':
            resultado = valor * FATOR_KM1_MILHAS;// Valor => 10 * 0.621371.
            break;//Encerra
        case 'milha_km':
            resultado = valor / FATOR_KM1_MILHAS;// Valor => 10 * 0.621371.
            break;//Encerra
        case "kg_libra":
            resultado = valor * FATOR_KG_LIBRAS;
            break;
        case "libra_kg":
            resultado = valor /FATOR_KG_LIBRAS;
            break;


        default:
            return `Não temos como conveter de ${origemMinuscula} para ${destinoMinuscula}`;

    }
    return resultado;
}

const saida = converter(10, "km", "milha");

console.log(saida);