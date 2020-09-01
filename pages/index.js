import React from 'react';
import Container from 'reactstrap/lib/Container'
import Row from 'reactstrap/lib/Row'
import Col from 'reactstrap/lib/Col'
import Card from 'reactstrap/lib/Card'
import CardHeader from 'reactstrap/lib/CardHeader'
import CardBody from 'reactstrap/lib/CardBody'
import Layout from "../components/Layout";
import Head from "next/head";
import Link from 'next/link';
import {getsTVShows} from "../services/api";
import { wrapper } from '../store';

const Index = ({shows}) => {

    return <Layout>
    <Head>
        <title>Tikal - SSR Workshop</title>
        <meta name="description" content="This is the home page of our SSR workshop"/>
    </Head>
    <Container>
        <Row>
            <Col md={12} className="my-5">
            <h1 className="text-center">Hello <span className="text-warning">Tikal</span> SSR Workshop</h1>
            </Col>
        </Row>
        <Row>
            {shows.map(show => <Col md={4} key={show.id} className="mb-4">
                <Card>
                    <CardHeader>
                        <Link href={`shows/[show]`} as={`shows/${show._embedded.show.id}`}>
                            <a>{show._embedded.show.name}</a>
                        </Link>
                    </CardHeader>
                    <CardBody>
                        <img src={show._embedded.show.image?.medium}
                             alt={show._embedded.show.name}/>
                    </CardBody>
                </Card>
            </Col>)}
        </Row>
        <Row>
            <pre>{JSON.stringify(shows, 0, 2)}</pre>
        </Row>
    </Container>
</Layout>
}
    

export default Index;

export const getServerSideProps = wrapper.getServerSideProps(async() =>{
    
    const shows = await getsTVShows()
    return {
        props: {
            shows
        }
    }
    
}) 