import React from 'react';
import Container from 'reactstrap/lib/Container'
import Row from 'reactstrap/lib/Row'
import Col from 'reactstrap/lib/Col'
import Layout from "../components/Layout";
import Head from "next/head";

const Index = () =>
    <Layout>
        <Head>
            <title>Tikal - SSR Workshop</title>
            <meta name="description" content="This is the home page of our SSR workshop" />
        </Head>
        <Container>
            <Row>
                <Col md={12} className="my-5">
                    <h1 className="text-center">Hello <span className="text-warning">Tikal</span> SSR Workshop</h1>
                </Col>
            </Row>
        </Container>
    </Layout>


export default Index;