# Creating our first page and navigation
  
###Download Starter Code (Optional)
If you’re NOT continuing from the previous lesson, you can download, install, and run the starter code for this lesson below. This sets up a nextjs-blog directory such that it’s identical to the result of the previous lesson.

Again, this is NOT necessary if you’ve just finished the previous lesson.

```bash
npx create-next-app ssr-workshop --use-npm --example "https://gitlab.com/tikalk.com/react-ssr-workshop/-/tree/adding-dependencies"
```

You now have a new directory called `ssr-workshop`. Let’s cd into it:
```bash
cd ssr-workshop
```

### Changing our home page
Let's override `/pages/index.js` with simple component:
```javascript
import React from 'react';
import Container from 'reactstrap/lib/Container'
import Row from 'reactstrap/lib/Row'
import Col from 'reactstrap/lib/Col'
import Nav from 'reactstrap/lib/Nav'
import NavItem from 'reactstrap/lib/Nav'
import Link from "next/link";

const Index = () =>
    <>
        <header className="bg-light py-3">
            <Container>
                <Row className="align-items-center">
                    <Col md={3}>
                        <Link href="/">
                            <div className="bg-dark d-inline-block py-2 px-4"><img src="http://tikalk.com/content/img/logo_inv.png"
                                    alt="Tikal Workshop"/></div>
                        </Link>
                    </Col>
                    <Col md={9}>
                        <Nav>
                            <NavItem>
                                <Link href="/about">About</Link>
                            </NavItem>
                        </Nav>
                    </Col>
                </Row>
            </Container>
        </header>
        <section>
            <Container>
                <Row>
                    <Col md={12} className="my-5">
                        <h1 className="text-center">Hello <span className="text-warning">Tikal</span> SSR Workshop</h1>
                    </Col>
                </Row>
            </Container>
        </section>
    </>


export default Index;
```

### Navigate to about page
When we try to navigate to about page by clicking the about link on nav bar we get 404 page
so let's add the missing page.  
we wil create a file `/pages/about.js` and will put the next code in it
```javascript
import React from 'react';
import Link from "next/link";

const About = () => {
    return (
        <div>
            <h1>This is About Page</h1>
            <Link href="/">Go back home ></Link>
        </div>
    );
};

export default About;
```
Now we will try to navigate to about page and now it's works fine :-)

### Something is missing
Have you noticed that the about page missing our topNav? Let's add it.  
* First, let's create a folder named components and a file called `Layout.js` into it...
* Second, let's move all the the 'shared' data out of our `index.js` to our newly created `/components/Layout.js` file.
* Third, we will wrap our `homepage` and `about` with our Layout component. 

#### Our files should look like this

##### `/components/Layout.js`
```javascript
import React from 'react';
import Link from "next/link";
import Container from 'reactstrap/lib/Container'
import Row from 'reactstrap/lib/Row'
import Col from 'reactstrap/lib/Col'
import Nav from 'reactstrap/lib/Nav'
import NavItem from 'reactstrap/lib/Nav'

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
                <Col md={9}>
                    <Nav>
                        <NavItem>
                            <Link href="/about">About</Link>
                        </NavItem>
                    </Nav>
                </Col>
            </Row>
        </Container>
    </header>
    <section>
        {children}
    </section>
</>

export default Layout;
```
##### `/pages/index.js`
```javascript
import React from 'react';
import Container from 'reactstrap/lib/Container'
import Row from 'reactstrap/lib/Row'
import Col from 'reactstrap/lib/Col'
import Layout from "../components/Layout";

const Index = () =>
    <Layout>
        <Container>
            <Row>
                <Col md={12} className="my-5">
                    <h1 className="text-center">Hello <span className="text-warning">Tikal</span> SSR Workshop</h1>
                </Col>
            </Row>
        </Container>
    </Layout>


export default Index;
```

##### `/pages/about.js`
```javascript
import React from 'react';
import Link from "next/link";
import Container from 'reactstrap/lib/Container'
import Row from 'reactstrap/lib/Row'
import Col from 'reactstrap/lib/Col'
import Layout from "../components/Layout";

const About = () =>
    <Layout>
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
```

### Now - Let's add some SEO stuff
Lets add some document titles and description. We will do so by adding `Head` tag to our pages and the desired tags inside them
