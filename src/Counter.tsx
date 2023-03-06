import React from 'react';
import {state} from "./store";
import {view} from "nandax";
import {useTranslate} from "tiny-i18n";

export const Counter = view(() => {
    const translate = useTranslate();
    const handleIncrement = () => {
        state.count = state.count += 1;
    }

    return (
        <div>
            {state.count}
            <button onClick={handleIncrement}>{translate('inc')}</button>
        </div>
    );
});