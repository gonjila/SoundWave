import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import Header from './Header';
import Footer from './Footer';

const Join = () => {
    return (
        <Container>
            <Header />
            <JoinPage>
                <div className="text">
                    <h1>
                        Join the <span>fun.</span>
                    </h1>
                </div>
                <div className="form">
                    <div className="wrapper">
                        <div>
                            <label>Name:</label>
                            <input type="text" />
                        </div>
                        <div>
                            <label>E-mail:</label>
                            <input type="email" />
                        </div>
                        <div>
                            <label>Password:</label>
                            <input type="password" />
                        </div>
                        {/* <a href="/">Join Now</a> */}
                        <NavLink exact to="/">
                            Join Now
                        </NavLink>
                    </div>
                </div>
            </JoinPage>
            <Footer />
        </Container>
    );
};

export default Join;

const Container = styled.div`
    height: 100vh;
    width: 100vw;
    position: absolute;
    justify-content: center;
`;

const JoinPage = styled.section`
    display: flex;
    justify-content: space-between;
    padding: 0 5vw;
    align-items: center;
    flex-grow: 1;

    .text {
        width: 50%;
        h1 {
            margin: 0;
            font-size: 50px;
            span {
                color: #bc3a80;
                font-size: 1.3em;
            }
        }
    }

    .form {
        height: calc(70vh - 40px);
        width: 50%;
        margin-bottom: 40px;
        background-color: #202027;
        border-radius: 10px;

        .wrapper {
            padding: 40px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            div {
                width: 100%;
                margin-bottom: 1.3rem;
                display: flex;
                flex-direction: column;

                label {
                    font-size: 1.2rem;
                    font-weight: bold;
                    margin-bottom: 10px;
                }

                input {
                    color: inherit;
                    font-size: 1.2em;
                    padding: 0.5em;
                    border: 1px solid #2e3852;
                    border-radius: 5px;
                    background-color: inherit;
                }
            }

            a {
                text-align: center;
                color: white;
                background-color: #1762a7;
                font-size: 0.9rem;
                text-decoration: none;
                padding: 12px 24px;
                border-radius: 10px;
                cursor: pointer;

                &:hover {
                    background-color: #2180d8;
                }
                &:active {
                    background-color: #2796ff;
                }
            }
        }
    }

    @media (max-width: 900px) {
        flex-direction: column;
        justify-content: center;

        .text {
            width: 100%;
            text-align: center;
            margin-bottom: 40px;
        }
    }
`;
