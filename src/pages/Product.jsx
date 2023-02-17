import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import data from '../Products/data';
import { categoryValue } from '../utils/category';
import { Helmet } from 'react-helmet-async';
import imageSEO from '../assets/slider/slide-1.png';

function Product() {
  const params = useParams();
  const { slug } = params;
  const { products } = data;
  const [product, setProduct] = useState({});
  const [selectedImg, setSelectedImg] = useState(0);

  useEffect(() => {
    setProduct(
      products?.find((currentProduct) => currentProduct.slug === slug)
    );
  }, [slug]);

  return (
    <>
      <Helmet>
        <title>{product?.title}</title>
        <meta
          name='description'
          content={`${product?.description} | aubess.eu`}
        />
        <link rel='cononical' href={`/product/${product?.slug}`} />
        {/* <meta property='og:title' content={product?.title} />
        <meta
          property='og:description'
          content={`${product?.description} | aubess.eu`}
        />
        <meta property='og:image' content={`https://aubess.eu/${imageSEO}`} />
        <meta property='og:url' content={`/product/${product?.slug}`} /> */}

        {/* facebook */}
        <meta property='og:type' content='website' />
        <meta
          property='og:url'
          content={`https://aubess.eu/product${product?.slug}`}
        />
        <meta property='og:title' content={product.title} />
        <meta
          property='og:description'
          content='With Meta Tags you can edit and experiment with your content then preview how your webpage will look on Google, Facebook, Twitter and more!'
        />
        <meta
          property='og:image'
          content={`https://aubess.eu/${imageSEO}`}
        ></meta>

        {/* <!-- Twitter --> */}
        <meta property='twitter:card' content='summary_large_image'></meta>
        <meta property='twitter:url' content='https://metatags.io/'></meta>
        <meta
          property='twitter:title'
          content='Meta Tags — Preview, Edit and Generate'
        ></meta>
        <meta
          property='twitter:description'
          content='With Meta Tags you can edit and experiment with your content then preview how your webpage will look on Google, Facebook, Twitter and more!'
        ></meta>
        <meta
          property='twitter:image'
          content={`https://aubess.eu/${imageSEO}`}
        ></meta>
      </Helmet>

      <div className='px-2 md:px-8 xl:px-0 xl:pt-10 max-w-7xl xl:mx-auto grid grid-cols-1 md:grid-cols-2 my-10 lg:min-h-[600px] gap-10'>
        <div className='flex flex-col-reverse items-start justify-center gap-4 lg:max-h-[467px] w-100 lg:flex-row'>
          <div className='flex items-start justify-start overflow-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-rounded-md gap-2 lg:flex-col lg:max-h-[345px] xl:max-h-[467px]'>
            {product?.img?.map((data, index) => (
              <img
                className='w-44 rounded-sm cursor-pointer'
                onClick={(e) => setSelectedImg(index)}
                src={data}
                alt={product?.title}
                key={index}
              />
            ))}
          </div>
          <div className='flex-5'>
            {product.img && (
              <img
                className='w-100 rounded-sm'
                src={product?.img[selectedImg]}
                alt={product?.title}
              />
            )}
          </div>
        </div>
        <div>
          <div className='text-gray-400 text-sm inline-flex gap-1 whitespace-pre-line'>
            <span>
              <Link to='/products' className='hover:text-[#464C4F]'>
                Products
              </Link>{' '}
              {'>'}{' '}
              <Link
                to={`/category/${product.category_slug}`}
                className='hover:text-[#464C4F]'
              >
                {categoryValue(product.category_slug)}
              </Link>
              <span className='text-gray-600'>{data?.attributes?.title}</span>
            </span>
          </div>
          <h2 className='text-5xl font-bold mt-2'>{product?.title}</h2>
          <p className='pt-10'>{product?.description}</p>
        </div>
      </div>
    </>
  );
}

export default Product;
