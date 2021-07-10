import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getList } from "../../redux/actions/listData";

import Link from "next/link";
const Pricing = () => {
  //definiciones dasdasdasd
  const dispatch = useDispatch();
  //al fin traigo la pishe data asmdlkmsdafjklñsdalpkñfasd
  const val = useSelector((state) => state.listReducer.data) || [];

  const [list, setList] = useState([]);
  const [color, setColor] = useState({ stateM: false, stateA: false });
  //cargar planeeeeesadasdasds
  useEffect(() => {
    dispatch(getList("/task/list", "Mensual"));
    setColor({ ...color, stateM: true });
  }, []);

  useEffect(() => {
    setList(val.data === undefined ? [] : val.data);
  }, [val]);

  //Selecionar plan asdassddassddsasda
  const openTabSection = (evt, typePlan) => {
    evt.preventDefault();
    if (typePlan === "Mensual") {
      setColor({ stateM: true, stateA: false });
    } else {
      setColor({ stateM: false, stateA: true });
    }
    dispatch(getList("/task/list", typePlan));
  };

  return (
    <section className="pricing-area pt-100 pb-70" id="pri">
      <div className="container">
        <div className="section-title">
          <span>TARIFAS</span>
          <h2>Precios al alcance de tus bolcillos </h2>
        </div>

        <div className="tab quote-list-tab">
          {/* Tabs */}
          <ul className="tabs">
            <li
              onClick={(e) => openTabSection(e, "Mensual")}
              className={color.stateM === true ? "current" : ""}
            >
              <span>Monthly</span>
            </li>

            <li
              onClick={(e) => openTabSection(e, "Anual")}
              className={color.stateA === true ? "current" : ""}
            >
              <span>Yearly</span>
            </li>
          </ul>
          <div className="tab_content">
            <div className="tabs_item">
              <div className="row">
                {list === null
                  ? ":C"
                  : list.map((data, index) => {
                      return (
                        <div key={index} className="col-lg-4 col-md-6">
                          <div className="single-pricing">
                            <div className="pricing-top-heading">
                              <h3>{data.planNames[0].planname}</h3>
                            </div>
                            <span>
                              S/.{data.planNames[0].price}
                              <sub>
                                /
                                {data.planNames[0].typplan === "Mensual"
                                  ? "M"
                                  : "A"}
                              </sub>
                            </span>
                            <ul className="ulPricing">
                              <div className="contPrecing">
                                {data.profits.map((profit, index) => {
                                  return (
                                    <li key={index}>
                                      <i className="bx bx-check"></i>
                                      te brindamos {profit.profitsname} con
                                      profecionalismo y experiencia
                                    </li>
                                  );
                                })}
                              </div>
                            </ul>
                            <Link href="/index">
                              <a className="default-btn">Get Started</a>
                            </Link>
                          </div>
                        </div>
                      );
                    })}
              </div>
            </div>
          </div>
          ;
        </div>
      </div>
    </section>
  );
};

export default Pricing;
