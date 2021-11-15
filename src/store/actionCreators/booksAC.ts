import axios from "axios";
import { Dispatch } from "redux";
import { BooksAction, BooksActionTypes } from "../../types/booksT";

const API_URL = process.env.API_URL,
    API_KEY = process.env.API_KEY;

export const fetchBooks = (
    title: string,
    category: string,
    orderBy: string,
    startIndex: number = 0
) => {
    return async (dispatch: Dispatch<BooksAction>) => {
        try {
            dispatch({ type: BooksActionTypes.FETCH_BOOKS });
            const response = await axios.get(
                `${API_URL}q=${title}+subject=${category}&orderBy=${orderBy}&startIndex=${startIndex}&maxResults=30&key=${API_KEY}`
            );
            dispatch({
                type: BooksActionTypes.FETCH_BOOKS_SUCCESS,
                payload: response.data,
            });
        } catch {
            dispatch({
                type: BooksActionTypes.FETCH_BOOKS_FAIL,
                payload: `Sorry, books fetching failed...`,
            });
        }
    };
};

export const loadMoreBooks = (
    title: string,
    category: string,
    orderBy: string,
    startIndex: number = 60
) => {
    return async (dispatch: Dispatch<BooksAction>) => {
        try {
            dispatch({ type: BooksActionTypes.FETCH_BOOKS });
            const response = await axios.get(
                `${API_URL}q=${title}+subject=${category}&orderBy=${orderBy}&startIndex=${startIndex}&maxResults=30&key=${API_KEY}`
            );
            
            dispatch({
                type: BooksActionTypes.LOAD_MORE_SUCCESS,
                payload: response.data,
            });
        } catch {
            dispatch({
                type: BooksActionTypes.LOAD_MORE_FAIL,
                payload: `Sorry, it is impossible to download more books...`,
            });
        }
    };
};
