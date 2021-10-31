import { BooksAction } from "../../types/booksT";
import { BooksState, BooksActionTypes } from "../../types/booksT";

const defaultState: BooksState = {
    books: {
        items: [],
        totalItems: 0
    },
    category: 'all',
    loading: true,
    error: null,
    page: 1,
};

export const booksReducer = (state = defaultState, action: BooksAction):BooksState => {
    switch (action.type) {
        case BooksActionTypes.FETCH_BOOKS:
            return { ...state, loading: true };
        case BooksActionTypes.FETCH_BOOKS_SUCCESS:
            return { ...state, books: action.payload, loading: false };
        case BooksActionTypes.FETCH_BOOKS_FAIL:
            return { ...state, error: action.payload, loading: false}
        case BooksActionTypes.SET_BOOKS_PAGE:
            return { ...state, page: action.payload}
        default:
            return state;
    }
};
