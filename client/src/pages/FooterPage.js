import React from 'react';
import "../footer.css"

const FooterPage = () => {
    // makes the footer for the website and the current year
    return (<footer>© {new Date().getFullYear()} Acts 2 Fellowship, LLC. All Rights Reserved.</footer>);
};

export default FooterPage;