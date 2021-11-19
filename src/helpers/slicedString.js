export const slicedString = (str, num) => { 
    return str.length > num ? `${str.slice(0, num)}...` : str
}