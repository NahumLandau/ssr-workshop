import React from 'react';
import Link from "next/link";
import Container from 'reactstrap/lib/Container'
import Row from 'reactstrap/lib/Row'
import Col from 'reactstrap/lib/Col'
import Layout from "../components/Layout";
import Head from "next/head";

const About = () =>
    <Layout>
        <Head>
            <title>About page</title>
            <meta name="description" content="This is the about page of our SSR workshop" />
        </Head>
        <Container>
            <Row>
                <Col md={12} className="my-5">
                    <h1>This is About Page</h1>
                    <Link href="/">Go back home ></Link>
                </Col>
            </Row>
        </Container>
    </Layout>


export default About;