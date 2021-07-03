import { apiBaseUrl } from "../config/settings";

export const serviceNode = async (path, {}, method = "GET", data = {}) => {
  //Estado inicial del resultado
  let result = {};
  //contruimos la url para hacer la peticion al servicio del backend
  const url = `${apiBaseUrl}${path}`;

  //cabecera de la peticion
  const headers = {
    "Content-Type": "application/json", // Formato JSON
  };
  // Definimos las opciones de la petición
  let options = {};
  // Si el método es del tipo GET => solo pasamos las cabeceras
  if (method === "GET") {
    options = { headers };
  }
  // Si el método es diferente de GET => pasamos el método, las cabeceras y el cuerpo con la data
  if (method !== "GET") {
    options = { method, headers, body: JSON.stringify(data) };
  }
  // Aplicamos la función fetch para realizar las peticiones y obtener las respuestas
  await fetch(url, options)
    // La respuesta la convertimos a JSON
    .then((res) => res.json())
    // Almacenamos la respuesta con un estado positivo
    .then((data) => {
      result = {
        status: true,
        data,
      };
    })

    // En caso hubiese un error mostramos en consola y devolvemos el estado y mensaje
    .catch((err) => {
      console.log("Error de Conexión API con FETCH", url, err);
      result = {
        status: false,
        data: null,
        msg: "No se pudo establecer la conexión con el servidor",
      };
    });

  // Retornamos el resultado de la petición
  return result;
};
