import { BooksAction } from "../../types/booksT";
import { BooksState, BooksActionTypes } from "../../types/booksT";

const defaultState: BooksState = {
    books: {
        items: [],
        totalItems: "",
    },
    loading: true,
    error: null,
};

export const booksReducer = (
    state = defaultState,
    action: BooksAction
): BooksState => {
    switch (action.type) {
        case BooksActionTypes.FETCH_BOOKS:
            return { ...state, loading: true };

        case BooksActionTypes.FETCH_BOOKS_SUCCESS:
            return { ...state, books: action.payload, loading: false };

        case BooksActionTypes.FETCH_BOOKS_FAIL:
            return { ...state, error: action.payload, loading: false };

        case BooksActionTypes.LOAD_MORE:
            return { ...state, loading: true };

        case BooksActionTypes.LOAD_MORE_SUCCESS: {
            const loadBooks = {
                items: [...state.books.items, ...action.payload.items],
                totalItems: action.payload.totalItems,
            };
            return { ...state, books: loadBooks, loading: false };
        }
        case BooksActionTypes.LOAD_MORE_FAIL:
            return { ...state, error: action.payload, loading: false };

        default:
            return state;
    }
};
