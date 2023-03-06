import React from 'react';
import {state} from "./store";
import {view} from "nandax";
import {useTinyI18N, useTranslate} from "tiny-i18n";

export const CounterScnd = view(() => {
    const translate = useTranslate();
    const tinyI18N = useTinyI18N();
    const handleIncrement = () => {
        state.scndCount = state.scndCount += 1;
    }

    const handleChangeLanguage = () => {
        const lang = tinyI18N.lang;
        tinyI18N.setLang(lang === 'ru' ? 'en' : 'ru');
    }

    return (
        <div>
            {state.scndCount}
            <button onClick={handleIncrement}>{translate('inc')}</button>
            <button onClick={handleChangeLanguage}>{translate('lang')}</button>
        </div>
    );
});