import Error from 'next/error';
import Head from 'next/head';
import Layout from "../../components/Layout";
import { getTvShow } from '../../services/api'

const ShowPage = ({show}) => {
  
  if(show.status === 404){
    return <Error statusCode='404' />
  }
  
  const { name, image: {medium: image}, summary, id } = show;

  return (<Layout>
    <Head>
        <title>{name}</title>
        <meta name="description" content="This is a dynamic page of our SSR workshop"/>
    </Head>

    <div className="container">
      <h1>{name}</h1>
      <img src={image} />
      <div dangerouslySetInnerHTML={{__html: summary}}></div>

      <button className="btn btn-success">Add to cart</button>
  </div>
  </Layout>)
  
}
export default ShowPage;

export async function getServerSideProps (ctx) {

  const { show: showId } = ctx.query;
  const show = await getTvShow(showId);

  return { props : {show} };
} 