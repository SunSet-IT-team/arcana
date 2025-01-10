import React from "react";

import { toRim } from "../../js/numberRim";
import "./styles.scss";

function ResultsList({
  jointPos1,
  jointPos2,
  jointPos3,
  jointPos4,
  jointPos5,
  jointPos6,
  jointPos7,
  jointPos8,
  jointPos9,
  jointPos10,
  jointPos11,
  jointPos12,
  jointPos13,
  jointPos14,
  jointPos15,
  jointPosA,
  jointPosB,
  jointPosC,
  jointPosD,
  jointPosE,
  jointPosF,
  jointPosH,
  jointPosG1,
  jointPosG2,
}) {
  return (
    <ul className="results-list">
      <li className="results-list__item">
        <span className="results-list__name">11 pos.</span>
        <span className="results-list__number">{toRim(jointPos11)}</span>
      </li>
      <li className="results-list__item">
        <span className="results-list__name">13 pos.</span>
        <span className="results-list__number">{toRim(jointPos13)}</span>
      </li>
      <li className="results-list__item">
        <span className="results-list__name">9 pos.</span>
        <span className="results-list__number">{toRim(jointPos9)}</span>
      </li>
      <li className="results-list__item">
        <span className="results-list__name">10 pos.</span>
        <span className="results-list__number">{toRim(jointPos10)}</span>
      </li>
      <li className="results-list__item">
        <span className="results-list__name">14 pos.</span>
        <span className="results-list__number">{toRim(jointPos14)}</span>
      </li>
      <li className="results-list__item">
        <span className="results-list__name">1 pos.</span>
        <span className="results-list__number">{toRim(jointPos1)}</span>
      </li>
      <li className="results-list__item">
        <span className="results-list__name">2 pos.</span>
        <span className="results-list__number">{toRim(jointPos2)}</span>
      </li>
      <li className="results-list__item">
        <span className="results-list__name">3 pos.</span>
        <span className="results-list__number">{toRim(jointPos3)}</span>
      </li>
      <li className="results-list__item">
        <span className="results-list__name">4 pos.</span>
        <span className="results-list__number">{toRim(jointPos4)}</span>
      </li>
      <li className="results-list__item">
        <span className="results-list__name">5 pos.</span>
        <span className="results-list__number">{toRim(jointPos5)}</span>
      </li>
      <li className="results-list__item">
        <span className="results-list__name">7 pos.</span>
        <span className="results-list__number">{toRim(jointPos7)}</span>
      </li>
      <li className="results-list__item">
        <span className="results-list__name">6 pos.</span>
        <span className="results-list__number">{toRim(jointPos6)}</span>
      </li>
      <li className="results-list__item">
        <span className="results-list__name">12 pos.</span>
        <span className="results-list__number">{toRim(jointPos12)}</span>
      </li>
      <li className="results-list__item">
        <span className="results-list__name">8 pos.</span>
        <span className="results-list__number">{toRim(jointPos8)}</span>
      </li>
      <li className="results-list__item">
        <span className="results-list__name">A</span>
        <span className="results-list__number">{toRim(jointPosA)}</span>
      </li>
      <li className="results-list__item">
        <span className="results-list__name">B</span>
        <span className="results-list__number">{toRim(jointPosB)}</span>
      </li>
      <li className="results-list__item">
        <span className="results-list__name">C</span>
        <span className="results-list__number">{toRim(jointPosC)}</span>
      </li>
      <li className="results-list__item">
        <span className="results-list__name">D</span>
        <span className="results-list__number">{toRim(jointPosD)}</span>
      </li>
      <li className="results-list__item">
        <span className="results-list__name">E</span>
        <span className="results-list__number">{toRim(jointPosE)}</span>
      </li>
      <li className="results-list__item">
        <span className="results-list__name">F</span>
        <span className="results-list__number">{toRim(jointPosF)}</span>
      </li>
      <li className="results-list__item">
        <span className="results-list__name">H</span>
        <span className="results-list__number">{toRim(jointPosH)}</span>
      </li>
      <li className="results-list__item">
        <span className="results-list__name">G1</span>
        <span className="results-list__number">{toRim(jointPosG1)}</span>
      </li>
      <li className="results-list__item">
        <span className="results-list__name">G2</span>
        <span className="results-list__number">{toRim(jointPosG2)}</span>
      </li>
    </ul>
  );
}

export default ResultsList;
