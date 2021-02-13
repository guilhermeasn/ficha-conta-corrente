import { Switch, Route, Link } from 'react-router-dom';
import { Button }              from 'react-bootstrap';
import { showNewAccount }      from './modals';

const Footer = props => {
    return (
        <footer {...props}>
            <div className="border-top p-3 text-center">
                <Switch>

                    <Route path="/" exact={true}>
                        <Button variant="success" onClick={showNewAccount}>Adicionar Ficha</Button>
                    </Route>

                    <Route path="/:id(\d+)" exact={true}>
                        <Link to="/">
                            <Button variant="secondary">{"<"} Fichas</Button>
                        </Link>
                        <Button variant="primary" className="mx-2">Nova Entrada</Button>
                    </Route>

                    <Route path='*'>
                        <Link to="/">
                            <Button variant="secondary">{"<"} Fichas</Button>
                        </Link>
                    </Route>

                </Switch>
            </div>
        </footer>
    );
}

export default Footer;
