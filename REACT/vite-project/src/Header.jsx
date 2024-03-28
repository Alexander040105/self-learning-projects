function Header(props){

    return(
        <header>
            <nav className="navbar">
                <nav className="navbar-links">
                    <ul>
                        <li><a href="">{props.category1}</a></li>
                        <li><a href="#">{props.category2}</a></li>
                        <li><a href="#">{props.category3}</a></li>
                        <li><a href="">{props.category4}</a></li>
                    </ul>
                </nav>
        
                <input aria-hidden="true" type="checkbox" id="menustate" class="toggle-button" />
                <label href="" className="toggle-button">
                    <span classNames="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </label>
        
                <nav className="navbar-links">
                    <ul id="socials">
                        <li><a href="https://www.instagram.com/_akiverse/" target="_blank"></a></li>
                        <li><a href="https://www.facebook.com/aerithe.artemis?_rdc=1&_rdr" target="_blank"></a></li>
                    </ul>
                </nav>
            </nav>
            <hr />
        </header>

        
    );
}

export default Header