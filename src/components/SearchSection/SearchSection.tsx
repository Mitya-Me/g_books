import { FC } from "react";
import SearchForm from "../SearchForm/SearchForm";


import classes from "./searchSection.module.scss";

const SearchSection: FC = () => {
  
    return (
        <section className={classes.searchSection}>
                <h1 className={classes.searchSection__title}> Search for books </h1>
                <SearchForm/>
        </section>
    );
};

export default SearchSection;
