

/**
 * Esta función me permite tomar una carta
 * @param {Array<string>} deck Pide todas las cartas, un arreglo de string
 * @returns {String} Retorna la carta que va agarrando el jugador
 */
export const pedirCarta = (deck) => {

    if ( !deck || deck.length === 0 ) {
        throw new Error('No hay cartas en el deck');
    }
    const carta = deck.pop();
    
    return carta;
}
