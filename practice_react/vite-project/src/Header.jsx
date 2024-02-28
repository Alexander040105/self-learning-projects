function Header(){

    return(
        <header>
            <nav className="navbar">
                <nav className="navbar-links">
                    <ul>
                        <li><a href="">Home</a></li>
                        <li><a href="#">Books</a></li>
                        <li><a href="#">Literary Works</a></li>
                        <li><a href="">About</a></li>
                        <li><a href="">Contact</a></li>
                        <li><a href="#">Roses in Woodland</a></li>
                    </ul>
                </nav>
        
                <input aria-hidden="true" type="checkbox" id="menustate" class="toggle-button" />
                <label href="" className="toggle-button">
                    <span class="bar"></span>
                    <span class="bar"></span>
                    <span class="bar"></span>
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