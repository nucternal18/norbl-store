import React from 'react';
import styled from 'styled-components';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';


const Footer = () => {
    return (
        <FooterContainer  className="no-gutters">
            <footer>
                <div className="no-gutters w-100">
                    <div className="container ">
                        <div className="col-12">
                            {/* Newsletter input and submission */}
                            <div className="col-md-6 col-sm-3">
                                <div className="row mt-2 ">
                                        <h5 className="p-0">NEWSLETTER</h5>
                                        <InputGroup className="mb-3">
                                            <FormControl
                                            placeholder="Enter your email"
                                            aria-label="Recipient's Email"
                                            aria-describedby="basic-addOn2"
                                            />
                                            <InputGroup.Append>
                                            <Button variant="outline-secondary bg-info">JOIN</Button>
                                            </InputGroup.Append>
                                        </InputGroup>
                                </div>
                                {/* Social Media Buttons */}
                                <div className="row">
                                        <h5>FOLLOW US</h5>
                                        <ul className="scl-media-container">
                                            <li className="scl-media">
                                                <a href="https://www.instagram.com/norbl_phoneacessories/" target="">
                                                    <i className="fab fa-instagram" ></i>
                                                </a>
                                            </li>
                                            <li className="scl-media">
                                                <a href="https://facebook.com/florinpop17" target="">
                                                <i className="fab fa-facebook-f"></i>
                                                </a>
                                            </li>
                                        </ul>
                                </div>
                                {/* Links */}
                                <div className="col text-white ml-0">
                                    <ul>
                                        <li>Home</li>
                                        <li>Checkout</li>
                                        <li>Contact</li>
                                        <li>Sign up</li>
                                        <li>Support</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="bg-white w-85"/>
                <p>Copyright &copy; 2019 <strong>NORBL PHONE CASE AND ACCESSORIES</strong></p>
            </footer>
        </FooterContainer>
    )
}

const FooterContainer = styled.div`
footer {
    right:0;
    left: 0;
    width: 100%;
    height: auto;
    display: flex;
    flex-flow: wrap;
    background-color: #484848;
    margin-top: 1rem;
}

h5 {
    color: #fff;
    font-weight: bold;
}

hr {
    width: 80%;
}

p {
    color: #fff;
    font-size: 14px;
    margin: auto;
}

.icon{
    margin-left: 1rem;
    border-radius: 50%;
}

ul {
    list-style-type: none;
}


.scl-media-container {
    position: inherit;
    display: flex;
    flex-direction: wrap;
    left: 0;
}

.scl-media i {
	color: #fff;
	font-size: 20px;
	padding: 15px;
    width: 10px;
}

.scl-media a {
	color: #fff;
    padding: 0 5px;
    
}

`

export default Footer
