import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import './DetailMain.css';

interface DetailMainProps {
    flagSrc: string | undefined;
    flagAlt: string | undefined;
    name: string | undefined;
    nativeName: string | undefined;
}

const DetailMain = ({flagSrc, flagAlt, name, nativeName}: DetailMainProps) => {
    return (
        <div className="DetailMain">
            <div className="flagContainer">
                <img src={flagSrc} alt={flagAlt} />
            </div>
            <div className="detailContainer">
                <h2>{name}</h2>
                <div className="spansContainer">
                    <span><strong>Native Name:</strong> {nativeName}</span>
                    <span><strong>Native Name:</strong> {nativeName}</span>
                    <span><strong>Native Name:</strong> {nativeName}</span>
                    <span><strong>Native Name:</strong> {nativeName}</span>
                    <span><strong>Native Name:</strong> {nativeName}</span>
                    <span><strong>Native Name:</strong> {nativeName}</span>
                    <span><strong>Native Name:</strong> {nativeName}</span>
                    <span><strong>Native Name:</strong> {nativeName}</span>

                </div>
            </div>
        </div>
    )
}

export default DetailMain;