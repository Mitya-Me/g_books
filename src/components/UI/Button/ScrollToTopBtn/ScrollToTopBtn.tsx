import { useState, useEffect } from "react";
import classes from "./scrollToTopBtn.module.scss";

const ScrollToTopBtn = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 400) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);

        return () => {
            window.removeEventListener("scroll", toggleVisibility);
        };
    }, []);

    return (
            <button
                className={isVisible ? classes.toTopBtn : classes.hidden}
                onClick={scrollToTop}
            >
                ↑
            </button>
    );
};

export default ScrollToTopBtn;
