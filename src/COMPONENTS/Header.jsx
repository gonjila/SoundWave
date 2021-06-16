import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Header = () => {
    return (
        <Container>
            <Title>
                <NavLink exact to="/">
                    <img alt="Soundwave logo" src="images/logo.png" />
                    SoundWave
                </NavLink>
            </Title>
            <Pages>
                <NavLink exact to="discover">
                    Discover
                </NavLink>
                <NavLink exact to="join">
                    Join
                </NavLink>
            </Pages>
        </Container>
    );
};

export default Header;

const Container = styled.div`
    height: 20vh;
    width: 100%;
    padding: 0 5vw;
    font-size: 1.2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    a {
        text-decoration: none;
    }
    a:link {
        color: white;
    }
    a:visited {
        color: white;
    }
    a:hover {
        color: white;
        /* transition: all 0.5s ease; */
    }
    a:active {
        color: white;
    }
`;

const Title = styled.div`
    a {
        display: flex;
        align-items: center;
        font-size: 1.25em;

        img {
            margin-right: 1rem;
        }
    }
`;

const Pages = styled.div`
    font-size: 1.2rem;

    a {
        padding: 20px;

        &:hover {
            color: #adadad;
        }
    }
`;
