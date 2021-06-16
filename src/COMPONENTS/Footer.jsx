import styled from 'styled-components';

function Footer() {
    return (
        <Container>
            <div>
                <ul>
                    <li>About Us</li>
                    <li>Contact</li>
                </ul>

                <ul>
                    <li>
                        <a href="facebook.com">
                            <img alt="facebook icon" src="images/facebook.svg" />
                            Facebook
                        </a>
                    </li>
                    <li>
                        <a href="twitter.com">
                            <img alt="twitter icon" src="images/twitter.svg" />
                            twitter
                        </a>
                    </li>
                </ul>
            </div>
        </Container>
    );
}

export default Footer;

const Container = styled.div`
    height: 10vh;
    width: 100%;
    /* bottom: 0; */
    font-size: 1.2rem;
    background-color: #202027;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: bottom;

    div {
        width: 100%;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: space-between;

        ul {
            padding: 0 4vw;
            display: flex;
            align-items: center;

            li {
                padding: 16px;
                list-style: none;

                a {
                    color: inherit;
                    display: flex;
                    align-items: center;
                    text-decoration: none;
                }
            }
        }
    }
`;
