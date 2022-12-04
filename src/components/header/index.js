import Nav from '../nav'
import Contato from '../contato'
import './style.css';

function Header() {
    return (
        <header>
            <h1 id='logo'>Projeto</h1>
            <Nav />
            <Contato />
        </header>
    );
}

export default Header;