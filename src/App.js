import { Switch, Route } from 'react-router';
import styled from 'styled-components';

import Home from './COMPONENTS/Home';
import Discover from './COMPONENTS/Discover';
import Join from './COMPONENTS/Join';

function App() {
    return (
        <Container>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/discover">
                    <Discover />
                </Route>
                <Route exact path="/join">
                    <Join />
                </Route>
            </Switch>
        </Container>
    );
}

export default App;

const Container = styled.div`
    height: 100vh;
    position: relative;
`;
