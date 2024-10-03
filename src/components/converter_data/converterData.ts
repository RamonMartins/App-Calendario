
export function dataFormatada(objetoData: Date){
    const dia = objetoData.getDate().toString().padStart(2, "0")
    const mes = (objetoData.getMonth() + 1).toString().padStart(2, "0")
    const ano = objetoData.getFullYear().toString()

    return `${dia}/${mes}/${ano}`
}