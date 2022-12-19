import { createContext } from 'react';

export const defaultObject = {
    actualYear: Math.floor(Math.random() * 2010),
    language: 'EN',
}

export const AppContext = createContext(defaultObject);

