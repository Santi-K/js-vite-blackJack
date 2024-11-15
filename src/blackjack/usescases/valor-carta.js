
/**
 * Obtener el valor de la carta
 * @param {String} carta Pide una carta para saber el valor
 * @returns {Number} Retorna el valor de la carta 
 */
export const valorCarta = ( carta ) => {
    if(!carta){
        throw new Error('Se desconoce esa carta o no hay carta');
    }

    const valor = carta.substring(0, carta.length - 1);

    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
            
}
