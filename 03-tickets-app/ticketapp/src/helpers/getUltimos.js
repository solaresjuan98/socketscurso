

export const getUltimos = async () => {

    const respuesta = await fetch('http://localhost:8080/ultimos');

    const data = await respuesta.json()
    console.log(data)
    return data.ultimos;

}