import React from 'react';
import styles, { layout } from "../style";

const HeaderPage = () => {
    return (
        <section id="header" className={`${layout.section} ${styles.flexCenter}`}>
            <div className={`text-center ${styles.heading1}`}>
                TODO List
            </div>
        </section>
    );
}

export default HeaderPage;