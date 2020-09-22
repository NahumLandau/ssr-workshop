import Error from 'next/error';
import Head from 'next/head';
import Layout from "../../components/Layout";
import { getTvShow } from '../../services/api'
import { useDispatch } from 'react-redux';

const ShowPage = ({show}) => {
  
  if(show.status === 404){
    return <Error statusCode='404' />
  }
  
  const { name, image: {medium: image}, summary, id } = show;
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch({type: 'ADD_TO_CART', payload: {name, image, id}})
  }

  return (<Layout>
    <Head>
        <title>{name}</title>
        <meta name="description" content="This is a dynamic page of our SSR workshop"/>
    </Head>

    <div className="container">
      <h1>{name}</h1>
      <img src={image} />
      <div dangerouslySetInnerHTML={{__html: summary}}></div>

      <button className="btn btn-success" onClick={addToCart}>Add to cart</button>
  </div>
  </Layout>)
  
}
export default ShowPage;

export async function getServerSideProps (ctx) {

  const { show: showId } = ctx.query;
  const show = await getTvShow(showId);

  return { props : {show} };
} 