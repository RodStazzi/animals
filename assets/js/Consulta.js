let animales = (() => {
  const url = 'http://127.0.0.1:5501/animales.json';
  try {
    const getData = async () => { // Función asíncrona
        const res = await fetch(url)
        const data = await res.json()
        return data
    }
    return {getData} // Retornar método getData dentro de un objeto
}
catch(error) {
    console.log(error)
}
})();

export default animales;