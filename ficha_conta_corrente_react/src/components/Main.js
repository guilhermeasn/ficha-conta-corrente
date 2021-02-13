import React, { Suspense, lazy } from 'react';

import { Switch, Route } from 'react-router-dom';
import { Container }     from 'react-bootstrap';

import Loading from './misc/Loading';

const Home     = lazy(() => import('./main/Home'));
const Account  = lazy(() => import('./main/Account'));
const Error404 = lazy(() => import('./main/Error404'));

const Main = props => {
    return (
        <main {...props}>
            <Container className="my-5">
                <Suspense fallback={ <Loading dark/> }>
                    <Switch>

                        <Route path="/"         component={Home}     exact={true} />
                        <Route path="/:id(\d+)" component={Account}  exact={true} />
                        <Route path='*'         component={Error404}              />
                        
                    </Switch>
                </Suspense>
            </Container>
        </main>
    );
}

export default Main;
