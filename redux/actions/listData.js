import types from "../../config/typesReducer";
import { serviceNode } from "../../service/serviceNode";
import Swal from "sweetalert2";
//Almacenamiento de la data en el store
export const getList = (rut, param = "", met = "GET", dat = {}, mess = {}) => {
  //Config de alertas Sweet Alert
  const Toast = Swal.mixin({
    toast: true,
    position: "bottom-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
  });
  //Se recibe la data enviada del componente para ser enviada a la funcion que generara el dispatch
  return (dispatch) => {
    if (param === "") {
      setList(dispatch, { type: types.loading });
      if (mess.prevMess) {
        Toast.fire({
          icon: "info",
          title: mess.prevMess,
        });
      }
      try {
        serviceNode(`${rut}/`, {}, met, dat)
          .then(async (data) => {
            if (met === "GET") {
              return setList(dispatch, {
                type: types.listDataBanner,
                payload: data,
              });
            } else {
              if (data.status) {
                setList(dispatch, { type: types.endLoading });
                return await Toast.fire({
                  icon: "success",
                  title: mess.confMess,
                });
              } else {
                setList(dispatch, { type: types.endLoading });
                return await Toast.fire({
                  icon: "error",
                  title: mess.errMess,
                });
              }
            }
          })
          .catch((e) => {
            console.log(e);
            setList(dispatch, { type: types.error });
          });
      } catch (e) {
        console.log(e);
        return setList(dispatch, {
          type: types.error,
          payload: "Faild",
        });
      }
    } else {
      try {
        serviceNode(`${rut}/${param}`, {})
          .then((data) => {
            return setList(dispatch, {
              type: types.listData,
              payload: data,
            });
          })
          .catch((e) => {
            console.log(e);
          });
      } catch (e) {
        console.log(e);
        return setList(dispatch, {
          type: types.error,
          payload: "Faild",
        });
      }
    }
  };
};
//Se recibe la data y se envia a los actions para ser enviadas al store
export const setList = (dispatch, json) => {
  dispatch(json);
};

export default getList;
