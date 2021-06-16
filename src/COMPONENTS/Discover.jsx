import React from 'react';
import styled from 'styled-components';

import Header from './Header';
import Footer from './Footer';

const Discover = () => {
    return (
        <Container>
            <Header />
            <DiscoverPage>
                <div className="text">
                    <h1>Discover new music</h1>
                    <div className="iconsWrapper">
                        <div>
                            <img alt="microphone icon" src="images/microphone.svg" />
                            Charts
                        </div>
                        <div>
                            <img alt="Albums icon" src="images/albums.svg" />
                            Albums
                        </div>
                        <div>
                            <img alt="More icon" src="images/more.svg" />
                            More
                        </div>
                    </div>
                    <p>by joining you can benefit by listening to the latest albums released.</p>
                </div>
                <div className="image">
                    <img alt="cover" src="images/covers.jpg" />
                </div>
            </DiscoverPage>
            <Footer />
        </Container>
    );
};

export default Discover;

const Container = styled.div`
    height: 100vh;
    width: 100vw;
    position: absolute;
`;

const DiscoverPage = styled.section`
    width: 100%;
    height: 70vh;
    padding: 0 5vw;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;

    .text {
        width: 60%;

        h1 {
            font-size: 3rem;
            margin: 15px 0;
        }
        .iconsWrapper {
            display: flex;

            div {
                height: 100px;
                width: 100px;
                padding: 12px;
                margin: 8px 8px 32px 8px;
                background-color: #202027;
                font-weight: 700;
                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: column;

                img {
                    width: 40px;
                    height: auto;
                    margin-bottom: 10px;
                }
            }
        }
    }

    .image {
        width: 40%;
        text-align: center;

        img {
            width: 30vw;
            height: auto;
            max-width: 400px;
        }
    }

    @media (max-width: 820px) {
        section {
            height: 100%;
        }
        .text {
            width: 100%;
        }
        .image {
            display: none;
        }
    }
`;
