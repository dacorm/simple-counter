import React from 'react';
import {TinyI18NProvider, TinyI18N, pluralizeEn, pluralizeRu} from 'tiny-i18n';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {ru} from "./keys/ru";
import {en} from "./keys/en";

const tinyI18N = new TinyI18N({
    defaultLang: "ru",
    languages: {
        en: {
            keyset: en,
            pluralize: pluralizeEn,
        },
        ru: {
            keyset: ru,
            pluralize: pluralizeRu,
        },
    },
});

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <TinyI18NProvider tinyI18N={tinyI18N}>
            <App/>
        </TinyI18NProvider>
    </React.StrictMode>
);
