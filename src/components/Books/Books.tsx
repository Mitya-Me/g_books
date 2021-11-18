import { FC } from "react";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import BookCard from "../BookCard/BookCard";
import ScrollToTopBtn from "../UI/Button/ScrollToTopBtn/ScrollToTopBtn";
import classes from "./books.module.scss";

const Books: FC = () => {
    const { books, queryString, count, } = useTypedSelector((store) => store.books);
    const { loadMoreBooks, increaseCount } = useActions()
    

    const handleLoadMore = () => {
        increaseCount(count + 30)
        loadMoreBooks(queryString, 'All', 'newest', count)
    }

    return (
        <section className={classes.books}>
            {books.totalItems ? (
                <h2 className={classes.books__title}>
                    Results <span>{books.totalItems}</span>
                </h2>
            ) : null}
            <div className={classes.books__content}>
                {books.items.length ? (
                    books.items.map((book) => (
                        <BookCard
                            key={`${Math.floor(Math.random() * 1000000)}`}
                            id={book.id}
                            thumbnail={
                                book.volumeInfo.imageLinks === undefined
                                    ? "http://shop.btpubservices.com/content/images/cover_not_available_360.jpg?height=200"
                                    : book.volumeInfo.imageLinks.thumbnail
                            }
                            category={book.volumeInfo.categories}
                            title={book.volumeInfo.title}
                            author={book.volumeInfo.authors}
                        />
                    ))
                ) : (
                    <h1 style={{ fontSize: "25px", padding: "20px" }}>
                        Enter the book you need in the search field
                    </h1>
                )}
            </div>
            <div className={classes.books__btn}>
                <button onClick={() => handleLoadMore()}>Load more</button>
            </div>
            <ScrollToTopBtn/>
        </section>
    );
};

export default Books;
