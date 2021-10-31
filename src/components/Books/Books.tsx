import { FC, useEffect } from "react";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import BookCard from "../BookCard/BookCard";
import classes from "./books.module.scss";

const Books: FC = () => {
    const { books } = useTypedSelector((store) => store.books);
    const { fetchBooks } = useActions();


    useEffect(() => {
        fetchBooks();
    }, [books.items]);

    return (
        <section className={classes.books}>
            <h2 className={classes.books__title}>  Results <span>{books.totalItems}</span></h2>
            <div className={classes.books__content}>
                {books.items.map((book) => (
                    <BookCard
                        thumbnail={book.volumeInfo.imageLinks.thumbnail}
                        category={book.volumeInfo.categories}
                        title={book.volumeInfo.title}
                        author={book.volumeInfo.authors}
                    />
                ))}
            </div>
        </section>
    );
};

export default Books;
