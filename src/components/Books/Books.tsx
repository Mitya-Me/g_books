import { FC } from "react";
import Book from "../Book/Book";
import classes from "./books.module.scss";

const Books: FC = (props) => {
    const testData = [
        {
            cover: "https://m.media-amazon.com/images/I/51tu6P6IUIL.jpg",
            category: "Computer ",
            title: "Fullstack developer NodeJS + React/Vue ",
            author: "Dmitry Mefodyev ",
        },
        {
            cover: "https://images-na.ssl-images-amazon.com/images/I/71Yd2ACrDcL.jpg",
            category: "Computer",
            title: "Fullstack  developer NodeJS + React/Vue",
            author: "Dmitry Mefodyev",
        },
        {
            cover: "https://images-na.ssl-images-amazon.com/images/I/71Yd2ACrDcL.jpg",
            category: "Computer",
            title: "Fullstack developer NodeJS + React/Vue",
            author: "Dmitry Mefodyev",
        },
        {
            cover: "https://images-na.ssl-images-amazon.com/images/I/71Yd2ACrDcL.jpg",
            category: "Computer",
            title: "Fullstack developer NodeJS + React/Vue",
            author: "Dmitry Mefodyev",
        },
        {
            cover: "https://images-na.ssl-images-amazon.com/images/I/71Yd2ACrDcL.jpg",
            category: "Computer",
            title: "Fullstack developer NodeJS + React/Vue",
            author: "Dmitry Mefodyev",
        },
        {
            cover: "https://images-na.ssl-images-amazon.com/images/I/81CmeyJIEQL.jpg",
            category: "Computer",
            title: "Fullstack developer NodeJS + React/Vue",
            author: "Dmitry Mefodyev",
        },
        {
            cover: "https://m.media-amazon.com/images/I/51E63B+BFhL._AC_SY780_.jpg",
            category: "Computer",
            title: "Fullstack developer NodeJS + React/Vue",
            author: "Dmitry Mefodyev",
        },
        {
            cover: "https://m.media-amazon.com/images/I/51E63B+BFhL._AC_SY780_.jpg",
            category: "Computer",
            title: "Fullstack developer NodeJS + React/Vue",
            author: "Dmitry Mefodyev",
        },
        {
            cover: "https://m.media-amazon.com/images/I/51E63B+BFhL._AC_SY780_.jpg",
            category: "Computer",
            title: "Fullstack developer NodeJS + React/Vue",
            author: "Dmitry Mefodyev",
        },
        {
            cover: "https://m.media-amazon.com/images/I/51E63B+BFhL._AC_SY780_.jpg",
            category: "Computer",
            title: "Fullstack developer NodeJS + React/Vue",
            author: "Dmitry Mefodyev",
        },
    ];

    return (
        <section className={classes.books}>
            <div className={classes.books__content}>
                {testData.map((b) => (
                    <Book
                        cover={b.cover}
                        category={b.category}
                        title={b.title}
                        author={b.author}
                    />
                ))}
            </div>
        </section>
    );
};

export default Books;