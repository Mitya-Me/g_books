export enum BooksActionTypes {
    FETCH_BOOKS = "FETCH_BOOKS",
    FETCH_BOOKS_SUCCESS = "FETCH_BOOKS_SUCCESS",
    FETCH_BOOKS_FAIL = "FETCH_BOOKS_FAIL",
    ADD_QSTRING = 'ADD_QSTRING',
    INCREASE_COUNT = 'INCREASE_COUNT',
    LOAD_MORE = "LOAD_MORE",
    LOAD_MORE_SUCCESS = "LOAD_MORE_SUCCESS",
    LOAD_MORE_FAIL = "LOAD_MORE_FAIL",
}

interface VolumeInfo {
    id: string;
    volumeInfo: {
        imageLinks: {
            thumbnail: string;
        };
        categories: string[];
        title: string;
        authors: string[];
        description?: string | undefined;
    };
}

export interface BooksState {
    books: {
        items: Array<VolumeInfo>;
        totalItems: number | string;
    };
    queryString: string;
    count: number;
    loading: boolean;
    error: null | string;
}

interface FetchBooksAction {
    type: BooksActionTypes.FETCH_BOOKS;
}

interface FetchBooksSuccessAction {
    type: BooksActionTypes.FETCH_BOOKS_SUCCESS;
    payload: {
        items: Array<VolumeInfo>;
        totalItems: number | string;
    };
}

interface FetchBooksFailAction {
    type: BooksActionTypes.FETCH_BOOKS_FAIL;
    payload: string;
}


interface AddQStringAction {
    type: BooksActionTypes.ADD_QSTRING;
    payload: string;
}

interface IncreaseCountAction {
    type: BooksActionTypes.INCREASE_COUNT;
    payload: number;
}

interface LoadMoreAction {
    type: BooksActionTypes.LOAD_MORE;
}

interface LoadMoreSuccessAction {
    type: BooksActionTypes.LOAD_MORE_SUCCESS;
    payload: {
        items: Array<VolumeInfo>;
        totalItems: number | string;
    };
}

interface LoadMoreFailAction {
    type: BooksActionTypes.LOAD_MORE_FAIL;
    payload: string;
}

export type BooksAction =
    | FetchBooksAction
    | FetchBooksSuccessAction
    | FetchBooksFailAction
    | LoadMoreAction
    | LoadMoreSuccessAction
    | LoadMoreFailAction
    | AddQStringAction
    | IncreaseCountAction;
