import { createContext } from 'react';

export const defaultObject = {
    actualYear: Math.floor(Math.random() * 2010),
    setActualYear: "domyślny provider",
    language: 'en',
}

export const AppContext = createContext(defaultObject);

