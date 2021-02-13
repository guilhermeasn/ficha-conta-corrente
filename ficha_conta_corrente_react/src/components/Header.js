import { Navbar } from 'react-bootstrap'

const Header = props => {
    return (
        <header {...props}>
            <Navbar variante="dark" bg="dark">
                <Navbar.Brand className="text-light">Ficha de Conta Corrente Virtual</Navbar.Brand>
            </Navbar>
        </header>
    )
}

export default Header;
