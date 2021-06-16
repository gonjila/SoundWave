import React from 'react';
import styled from 'styled-components';

import Header from './Header';

const Home = () => {
    return (
        <Container>
            <Header />
            <div className="divInHome">
                <div className="ladyWrapper">
                    <div className="lady"></div>
                </div>
                <div className="text">
                    <h1>Feel The Music</h1>
                    <p>stream over 20 thousand songs with one click</p>
                    <a href="/join">Join Now</a>
                </div>
            </div>
            <div className="circle-1"></div>
            <div className="circle-2"></div>
            <div className="circle-3"></div>
        </Container>
    );
};

export default Home;

const Container = styled.div`
    height: 100vh;
    width: 100vw;
    position: absolute;
    justify-content: center;

    .divInHome {
        height: 80vh;
        width: 100vw;
        padding: 0 5vw;
        display: flex;
        position: absolute;

        .ladyWrapper {
            flex-grow: 1;
            display: flex;
            flex-direction: column;
            align-items: stretch;
            justify-content: flex-end;

            .lady {
                background-image: url(images/landing-page-girl.png);
                flex-grow: 1;
                max-height: 70vh;
                min-width: 30vw;
                background-size: contain;
                background-repeat: no-repeat;
                background-position: bottom left;
            }
        }
        .text {
            font-size: 1.2rem;
            font-weight: 500;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;

            h1 {
                font-size: 3em;
                margin-top: 0;
            }
            p {
                font-size: 1.2em;
                font-weight: 500;
                margin-top: 0;
                margin-bottom: 30px;
            }
            a {
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
    .circle-1 {
        position: absolute;
        width: 20vw;
        height: 20vw;
        border-radius: 50%;
        background-color: rgba(188, 58, 128, 0.2);
        bottom: 2.5vw;
        left: 2.5vw;
        z-index: -1;
    }
    .circle-2 {
        position: absolute;
        width: 25vw;
        height: 25vw;
        border-radius: 50%;
        background-color: rgba(52, 87, 178, 0.3);
        top: 10vh;
        left: 30vw;
        z-index: -1;
    }
    .circle-3 {
        position: absolute;
        overflow: hidden;
        width: 40vw;
        height: 40vw;
        bottom: 0;
        right: 0;
        z-index: -1;

        &::before {
            content: '';
            transform: translate(40%, 30%);
            position: absolute;
            height: 100%;
            width: 100%;
            border-radius: 50%;
            background-color: rgba(238, 12, 132, 0.1);
        }
    }

    @media screen and (max-width: 910px) {
        .divInHome {
            justify-content: center;
        }
        .ladyWrapper {
            display: none !important;
        }
    }
    @media screen and (max-width: 530px) {
        .text {
            font-size: 0.8rem !important;
            transition: all 300ms;
            a {
                font-size: 0.85rem !important;
                padding: 6px 12px !important;
            }
        }
    }
`;
