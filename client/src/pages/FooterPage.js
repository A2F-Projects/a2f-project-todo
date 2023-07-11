import React from 'react';
import styles from '../style';

const FooterPage = () => {
    // makes the footer for the website and the current year
    return (
        <section id="footer">
            <div className={`flex flex-row md:flex-row mb-8 w-full`}>
                <div className={`${styles.paragraph}`}>
                    © {new Date().getFullYear()} Acts 2 Fellowship, LLC. All Rights Reserved.
                </div>
            </div>
        </section>
    );
};

export default FooterPage;