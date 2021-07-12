import React from "react";

const PaternSlaider = () => {
  const style = {
    width: "100%",
    heidth: "100%",
    marginLeft: "2%",
  };
  return (
    <div className="brand">
      <div className="container fluid">
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <img
              style={style}
              src="/images/brands/serviciosSunat.png"
              alt="Image"
            />
          </div>
          <div className="col-md3"></div>
        </div>
      </div>
    </div>
  );
};

export default PaternSlaider;
