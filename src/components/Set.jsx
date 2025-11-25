import {Card} from "./Card";
import cards from '../data.json';
import React from "react";
import './Set.css';

import { useLocation, useParams } from "react-router-dom";

export function Set(){
    const param = useParams();
    console.log(param.id);

    const location = useLocation()
    const {set} = location.state;

    // const cards = require('../data').filter((item)=>(item.setName === set));
    cards.filter((item)=>(item.setName === set));
    const [step, setStep] = React.useState(0);

    const handleNext = () => {
        if (step < cards.length - 1) {
            setStep(step + 1);
        }
    };

    const handlePrev = () => {
        if (step > 0) {
            setStep(step - 1);
        }
    };

    const isFirstStep = step === 0;
    const isLastStep = step === cards.length - 1;

    console.log(cards.length);
    return (
        <div>
            <div className="main_div_cards">
                <div className="div_cards">
                    <h2>Название набора</h2>
                    <Card front={cards[step].front} back={cards[step].back}/>
                    <div className="cards_manipulator">
                        <button 
                            className={`cards_mani_button cards_mani_button_left ${isFirstStep ? 'button_disabled' : ''}`}
                            onClick={handlePrev}
                            disabled={isFirstStep}
                        >
                            ←
                        </button>
                        <p className="cards_mani_list">{step+1}/{cards.length}</p>
                        <button 
                            className={`cards_mani_button cards_mani_button_right ${isLastStep ? 'button_disabled' : ''}`}
                            onClick={handleNext}
                            disabled={isLastStep}
                        >
                            →
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
