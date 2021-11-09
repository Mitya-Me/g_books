import classes from "./notFoundPage.module.scss";

const NotFoundPage: React.FC = () => {
    return (
            <div className={classes.notFound}>
                <span className={classes.notFound__error}> 404 </span>
                <span className={classes.notFound__text}>Page not found</span>
            </div>
    );
};

export default NotFoundPage;
