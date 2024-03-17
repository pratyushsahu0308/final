"use client"; // Add this directive at the top of your file

import React from "react";
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import {Form, InputGroup, Button} from 'react-bootstrap';

function Footer(){
    return (
        <footer className="py-5 bg-light">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h5>Subscribe to our newsletter</h5>
                        <p>Stay updated with our latest news and offers.</p>
                        <InputGroup className="mb-3">
                            <Form.Control
                                placeholder="Recipient's email"
                                aria-label="Recipient's email"
                                aria-describedby="basic-addon2"
                            />
                            <Button type="submit" style={{ backgroundColor: "#FF5A5F" }}>
                                Subscribe
                            </Button>{' '}
                        </InputGroup>
                    </div>
                    <div className="col-md-6 d-flex justify-content-md-end">
                        <ul className="list-inline mb-0">
                            <li className="list-inline-item">
                                <a href="https://www.linkedin.com/in/raksha-agrawal-ba0924223/">
                                    <FaLinkedin size={24} style={{ color: "black" }} />
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a href="https://github.com/Raksha703">
                                    <FaGithub size={24} style={{ color: "black" }} />
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a href="https://github.com/Raksha703">
                                    <FaInstagram size={24} style={{ color: "black" }} />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <hr className="my-4" />
                <div className="row">
                    <div className="col-md-12 text-center">
                        <p className="mb-0 text-muted">
                            © JobConnect 2024 All Rights Reserved
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
