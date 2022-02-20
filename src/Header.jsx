import React from "react";
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
// import HighlightIcon from '@mui/icons-material/Highlight';

function Header() {
    return <header className="header">
                <h1>
                    <TextSnippetIcon fontSize="medium" />
                    Notes
                </h1>
            </header>
}

export default Header;