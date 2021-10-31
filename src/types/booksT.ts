export enum BooksActionTypes { 
    FETCH_BOOKS = 'FETCH_BOOKS',
    FETCH_BOOKS_SUCCESS = 'FETCH_BOOKS_SUCCESS',
    FETCH_BOOKS_FAIL = 'FETCH_BOOKS_FAIL',
    SET_BOOKS_PAGE = 'SET_BOOKS_PAGE'
}

interface VolumeInfo {
    volumeInfo: {
        imageLinks: {
            thumbnail: string;
        }
        categories: string[];
        title: string;
        authors: string[];
        descriptions: string;
        readingModes: {
            image: boolean | null;
        };
    }
}


export interface BooksState {
    books: {
        items: Array<VolumeInfo>;
        totalItems: number;
    }; 
    category: string;
    loading: boolean;
    error: null | string;
    page: number | string;
}

interface FetchBooksAction { 
    type: BooksActionTypes.FETCH_BOOKS;
}

interface FetchBooksSuccessAction {
    type: BooksActionTypes.FETCH_BOOKS_SUCCESS;
    payload: {
        items: Array<VolumeInfo>;
        totalItems: number;
    };
}

interface FetchBooksFailAction {
    type: BooksActionTypes.FETCH_BOOKS_FAIL;
    payload: string
}

interface SetBooksPageAction {
    type: BooksActionTypes.SET_BOOKS_PAGE;
    payload: string | number;
}

export type BooksAction = FetchBooksAction | FetchBooksSuccessAction | FetchBooksFailAction | SetBooksPageAction;

