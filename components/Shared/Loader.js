import React from "react";
import { useDispatch } from "react-redux";
import { getList } from "../../redux/actions/listData";
const Loader = (props) => {
  const dispatch = useDispatch();
  dispatch(getList("/banner/list"));
  return (
    <div className={`preloader ${props.loading ? "" : "preloader-deactivate"}`}>
      <div className="d-table">
        <div className="d-table-cell">
          <div className="spinner">
            <div className="rect1"></div>
            <div className="rect2"></div>
            <div className="rect3"></div>
            <div className="rect4"></div>
            <div className="rect5"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
