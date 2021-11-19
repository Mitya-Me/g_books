import { FC } from "react";
import { Link } from "react-router-dom";

import { slicedAndJoinedArr } from "../../helpers/slicedAndJoinedArray";
import { slicedString } from "../../helpers/slicedString";


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
                            ? category.join(", ")
                            : "category not specified"}
                    </li>
                    <li
                        className={`${classes.book__description_item} ${classes.book__description_title}`}
                    >
                        {title 
                            ? slicedString(title, 55)
                            : 'title not specified'
                        }
                    </li>
                    <li className={classes.book__description_item}>
                        {author
                            ?  slicedAndJoinedArr(author)
                            : 'author not specified'}
                    </li>
                </ul>
            </Link>
        </div>
    );
};

export default BookCard;
