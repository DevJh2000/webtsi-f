import types from "../../config/typesReducer";
import { serviceNode } from "../../service/serviceNode";
import Swal from "sweetalert2";

export const getList = (rut, param = "", met = "GET", dat = {}, mess = {}) => {
  //Config de alertas
  const Toast = Swal.mixin({
    toast: true,
    position: "bottom-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
  });
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
          payload: "Cagao",
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
          payload: "Cagao",
        });
      }
    }
  };
};

export const setList = (dispatch, json) => {
  dispatch(json);
};

export default getList;
