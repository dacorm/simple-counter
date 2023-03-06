import React from 'react';
import {state} from "./store";
import {view} from "nandax";
import {useTranslate} from "tiny-i18n";

export const Text = view(() => {
    const translate = useTranslate();
    const handleClick = () => {
        state.text = translate(state.text) + '12';
    }

    return (
        <div onClick={handleClick}>
            {translate(state.text)}
        </div>
    );
});