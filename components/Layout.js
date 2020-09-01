import React from 'react';
import Link from "next/link";
import Container from 'reactstrap/lib/Container'
import Row from 'reactstrap/lib/Row'
import Col from 'reactstrap/lib/Col'
import Nav from 'reactstrap/lib/Nav'
import NavItem from 'reactstrap/lib/Nav'
import ShoppingCart from './ShoppingCart';

const Layout = ({children}) => <>
    <header className="bg-light py-3">
        <Container>
            <Row className="align-items-center">
                <Col md={3}>
                    <Link href="/">
                        <div className="bg-dark d-inline-block py-2 px-4"><img
                            src="http://tikalk.com/content/img/logo_inv.png"
                            alt="Tikal Workshop"/></div>
                    </Link>
                </Col>
                <Col md={3}>
                    <Nav>
                        <NavItem>
                            <Link href="/about">About</Link>
                        </NavItem>
                    </Nav>
                </Col>
                <Col md={6}>
                    <ShoppingCart/>
                </Col>
            </Row>
        </Container>
    </header>
    <section>
        {children}
    </section>
</>

export default Layout;