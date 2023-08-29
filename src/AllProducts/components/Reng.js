import React, { useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import "./reng.css";

function Reng() {
  const [values, setValues] = useState([5000, 55000]);

  const handleSliderChange = (newValues) => {
    setValues(newValues);
  };

  return (
    <div className="range__slide">
      <div className="range__slide_value">
        <div className="value__stat">
          <div className="value__stat_txt">
            <span>от</span>
          </div>
          <div className="value__stat_index">
            <span> {values[0]}</span>
          </div>
        </div>
        <div className="value__stat">
          <div className="value__stat_txt">
            <span>до</span>
          </div>
          <div className="value__stat_index">
            <span> {values[1]}</span>
          </div>
        </div>
      </div>
      <Slider
        min={0}
        max={60000}
        step={15}
        value={values}
        onChange={handleSliderChange}
        range
      />
    </div>
  );
}
export default Reng;
