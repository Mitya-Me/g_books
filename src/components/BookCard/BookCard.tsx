import { FC } from "react";
import { Link } from "react-router-dom";
import classes from "./bookCard.module.scss";

type BookCardProps = {
    id?: string;
    thumbnail: string;
    category: string[];
    title: string;
    author: string[];
};

const BookCard: FC<BookCardProps> = ({
    id,
    thumbnail,
    category,
    title,
    author,
}) => {
    return (
        <div className={classes.book}>
            <Link to={`/bookId=${id}`}>
                <div className={classes.book__cover}>
                    <img src={thumbnail} alt='' />
                </div>
                <ul className={classes.book__description}>
                    <li
                        className={`${classes.book__description_item} ${classes.book__description_ctgry}`}
                    >
                        {category
                            ? category.join(" ")
                            : "category not specified"}
                    </li>
                    <li
                        className={`${classes.book__description_item} ${classes.book__description_title}`}
                    >
                        {" "}
                        {title}{" "}
                    </li>
                    <li className={classes.book__description_item}>
                        {" "}
                        {author
                            ?  author.length > 6 ? `${author.join(', ').slice(0, 40)}...` : author.join(', ')
                            : "author not specified"}
                    </li>
                </ul>
            </Link>
        </div>
    );
};

export default BookCard;
