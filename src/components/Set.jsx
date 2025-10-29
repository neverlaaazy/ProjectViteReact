import {Card} from "./Card";
import cards from '../data.json';
import React from "react";
export function Set(){
    //const cards = require('../data.json');
    const [step, setStep] = React.useState(0);
    // console.log(cards.length);
    return (
        <div>
            <div className="main_div_cards">
                <div className="div_cards">
                    <h2>Название набора</h2>
                    <Card front={cards[step].front} back={cards[step].back}/>
                    <div className="cards_manipulator">
                        <button className="cards_mani_button cards_mani_button_left">←</button>
                        <p className="cards_mani_list">1/{cards.length}</p>
                        <button className="cards_mani_button cards_mani_button_right">→</button>
                    </div>
                </div>
                <div className="div_cards">
                    <h2>Название набора</h2>
                    <Card front={cards[step].front} back={cards[step].back}/>
                    <div className="cards_manipulator">
                        <button className="cards_mani_button cards_mani_button_left">←</button>
                        <p className="cards_mani_list">1/{cards.length}</p>
                        <button className="cards_mani_button cards_mani_button_right">→</button>
                    </div>
                </div>
                <div className="div_cards">
                    <h2>Название набора</h2>
                    <Card front={cards[step].front} back={cards[step].back}/>
                    <div className="cards_manipulator">
                        <button className="cards_mani_button cards_mani_button_left">←</button>
                        <p className="cards_mani_list">1/{cards.length}</p>
                        <button className="cards_mani_button cards_mani_button_right">→</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
