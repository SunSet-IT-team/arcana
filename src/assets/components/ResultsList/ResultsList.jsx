import React from 'react';

import {toRim} from '../../js/numberRim';
import './styles.scss';

function ResultsList({
    pos1,
    pos2,
    pos3,
    pos4,
    pos5,
    pos6,
    pos7,
    pos8,
    pos9,
    pos10,
    pos11,
    pos12,
    pos13,
    pos14,
    pos15,
    posA,
    posB,
    posC,
    posD,
    posE,
    posF,
    posH,
    posG1,
    posG2,
}) {
    return (
        <ul className="results-list">
            <li className="results-list__item">
                <span className="results-list__name">11 pos.</span>
                <span className="results-list__number">{toRim(pos11)}</span>
            </li>
            <li className="results-list__item">
                <span className="results-list__name">13 pos.</span>
                <span className="results-list__number">{toRim(pos13)}</span>
            </li>
            <li className="results-list__item">
                <span className="results-list__name">9 pos.</span>
                <span className="results-list__number">{toRim(pos9)}</span>
            </li>
            <li className="results-list__item">
                <span className="results-list__name">10 pos.</span>
                <span className="results-list__number">{toRim(pos10)}</span>
            </li>
            <li className="results-list__item">
                <span className="results-list__name">14 pos.</span>
                <span className="results-list__number">{toRim(pos14)}</span>
            </li>
            <li className="results-list__item">
                <span className="results-list__name">1 pos.</span>
                <span className="results-list__number">{toRim(pos1)}</span>
            </li>
            <li className="results-list__item">
                <span className="results-list__name">2 pos.</span>
                <span className="results-list__number">{toRim(pos2)}</span>
            </li>
            <li className="results-list__item">
                <span className="results-list__name">3 pos.</span>
                <span className="results-list__number">{toRim(pos3)}</span>
            </li>
            <li className="results-list__item">
                <span className="results-list__name">4 pos.</span>
                <span className="results-list__number">{toRim(pos4)}</span>
            </li>
            <li className="results-list__item">
                <span className="results-list__name">5 pos.</span>
                <span className="results-list__number">{toRim(pos5)}</span>
            </li>
            <li className="results-list__item">
                <span className="results-list__name">7 pos.</span>
                <span className="results-list__number">{toRim(pos7)}</span>
            </li>
            <li className="results-list__item">
                <span className="results-list__name">6 pos.</span>
                <span className="results-list__number">{toRim(pos6)}</span>
            </li>
            <li className="results-list__item">
                <span className="results-list__name">12 pos.</span>
                <span className="results-list__number">{toRim(pos12)}</span>
            </li>
            <li className="results-list__item">
                <span className="results-list__name">8 pos.</span>
                <span className="results-list__number">{toRim(pos8)}</span>
            </li>
            <li className="results-list__item">
                <span className="results-list__name">A</span>
                <span className="results-list__number">{toRim(posA)}</span>
            </li>
            <li className="results-list__item">
                <span className="results-list__name">B</span>
                <span className="results-list__number">{toRim(posB)}</span>
            </li>
            <li className="results-list__item">
                <span className="results-list__name">C</span>
                <span className="results-list__number">{toRim(posC)}</span>
            </li>
            <li className="results-list__item">
                <span className="results-list__name">D</span>
                <span className="results-list__number">{toRim(posD)}</span>
            </li>
            <li className="results-list__item">
                <span className="results-list__name">E</span>
                <span className="results-list__number">{toRim(posE)}</span>
            </li>
            <li className="results-list__item">
                <span className="results-list__name">F</span>
                <span className="results-list__number">{toRim(posF)}</span>
            </li>
            {/* <li className="results-list__item">
                <span className="results-list__name">H</span>
                <span className="results-list__number">{toRim(posH)}</span>
            </li>
            <li className="results-list__item">
                <span className="results-list__name">G1</span>
                <span className="results-list__number">{toRim(posG1)}</span>
            </li>
            <li className="results-list__item">
                <span className="results-list__name">G2</span>
                <span className="results-list__number">{toRim(posG2)}</span>
            </li> */}
        </ul>
    );
}

export default ResultsList;
