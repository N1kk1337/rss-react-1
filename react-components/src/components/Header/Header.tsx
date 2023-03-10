import React from "react";

export interface HeaderProps {

}

export interface HeaderState {

}

class Header extends React.PureComponent<HeaderProps, HeaderState> {
    // state = { : }
    render() {
        return (
            <header>
                <div className="current-page">Current Page: </div>
                <nav>
                    <ul>
                        <li>Main</li>
                        <li>About Us</li>
                    </ul>
                </nav>
            </header>

        );
    }
}

export default Header;