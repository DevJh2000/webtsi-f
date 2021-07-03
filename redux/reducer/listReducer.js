import types from "../../config/typesReducer";

//Estado Inicial de la data

const initialState = {
  data: [],
  listDataBanner: [],
  loading: false,
  error: "",
};

const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.listData:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: "",
      };
    case types.listDataBanner:
      return {
        ...state,
        listDataBanner: action.payload,
        loading: false,
        error: "",
      };
    case types.loading:
      return {
        ...state,
        loading: true,
      };
    case types.endloading:
      return {
        ...state,
        loading: false,
      };
    case types.error:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default listReducer;
