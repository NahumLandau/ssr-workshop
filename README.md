# Add some real content
  
###Download Starter Code (Optional)
If you’re NOT continuing from the previous lesson, you can download, install, and run the starter code for this lesson below. This sets up a nextjs-blog directory such that it’s identical to the result of the previous lesson.

Again, this is NOT necessary if you’ve just finished the previous lesson.

```bash
npx create-next-app ssr-workshop --use-npm --example "https://gitlab.com/tikalk.com/react-ssr-workshop/-/tree/01-adding-dependencies"
```

You now have a new directory called `ssr-workshop`. Let’s cd into it:
```bash
cd ssr-workshop
```

### Create service that fetch tv shows from TV Maze API
Let's create service file `/services/api.js` with the following content inside it:
```javascript
import http from 'axios'

export const getsTVShows = async () => {
    const {data} = await http.get('http://api.tvmaze.com/schedule/full')
    return data.slice(0, 12)
}
```
Now let's inject the tv shows into our home component. We will do so by adding `getStaticProps` function to `/pages/index.js` the file eventailly will like this
```javascript
import React from 'react';
import Container from 'reactstrap/lib/Container'
import Row from 'reactstrap/lib/Row'
import Col from 'reactstrap/lib/Col'
import Card from 'reactstrap/lib/Card'
import CardHeader from 'reactstrap/lib/CardHeader'
import CardBody from 'reactstrap/lib/CardBody'
import Layout from "../components/Layout";
import Head from "next/head";
import {getsTVShows} from "../services/api";

const Index = ({shows}) =>
    <Layout>
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
                            <h4>{show._embedded.show.name}</h4>
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

export default Index;

export async function getStaticProps() {
    const shows = await getsTVShows()
    return {
        props: {
            shows
        }
    }
}
```
