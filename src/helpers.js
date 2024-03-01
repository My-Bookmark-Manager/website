import {createContext } from "react";

export const BookmarkContext = createContext();

export const getSubjects = (response) => {
    const {documents} = response;
    return documents.reduce((acc, cur) => {
        const {subject} = cur;
        if(!acc.includes(subject)){
            return [...acc, subject]
        }else{
            return acc;
        }
    }, ['']);
};
export const getTags = (response) => {
    const {documents} = response;
    return documents.reduce((acc, cur) => {
        const {tag} = cur;
        if(!acc.includes(tag)){
            return [...acc, tag]
        }else{
            return acc;
        }
    }, ['']);
};
export const getCategories = (response) => {
    const {documents} = response;
    return documents.reduce((acc, cur) => {
        const {category} = cur;
        if(!acc.includes(category)){
            return [...acc, category]
        }else{
            return acc;
        }
    }, ['']);
};

    