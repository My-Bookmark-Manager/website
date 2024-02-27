export const getContexts = (response) => {
    const {documents} = response;
    return documents.reduce((acc, cur) => {
        const {context} = cur;
        if(!acc.includes(context)){
            return [...acc, context]
        }else{
            return acc;
        }
    }, [])
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
    }, [])
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
    }, [])
};

    