import { Space } from 'antd';
import Title from 'antd/es/typography/Title';
import React, { useState } from 'react'
import productData from '../../assets/fake-data/products'
import Helmet from './components/Helmet';
import ProductCard from './components/ProductCard';
import ProductView from './components/ProductView';
import IProduct from '../../interface/Product';
import { fetchProductDetail } from '../../api/CustomerAPI';
import { ScrollMenu } from 'react-horizontal-scrolling-menu';
import { LeftArrow, RightArrow } from './components/Arrow';

const Product = () => {

  const [product, setProduct] = useState<IProduct>();

  const [selectedProduct, setSelectedProduct] = useState<string>(window.location.pathname.split('/')[2])

  const relatedProducts = productData.getProducts(8)

  React.useEffect(() => {
    fetchProductDetail({
      slug: {
        equals: selectedProduct
      }
    }).then((data) => {
      console.log(data.data[0])
      setProduct(data.data[0]);
    })
    window.scrollTo(0, 0)
  }, [selectedProduct])

  return (
    <Helmet title={product ? product.name : ""}>
      <Space>
        <ProductView id={product ? product.id : 1} />
      </Space>
      <Space direction='vertical' style={{ width: '100%', margin: '0 20px' }}>
        <Title level={2} style={{ color: 'var(--main-color)', margin: '20px 0 10px 0' }}>GỢI Ý CHO BẠN</Title>
        <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow} Footer={null}>
          {productData.getProducts(8).map((item, index) => (
            <ProductCard
              id={index}
              key={index}
              img01={item.image01}
              img02={item.image02}
              name={item.title}
              price={Number(item.price)}
            />
          ))}
        </ScrollMenu>
      </Space>
      <Space direction='vertical' style={{ width: '100%', margin: '0 20px' }}>
        <Title level={2} style={{ color: 'var(--main-color)', margin: '20px 0 10px 0' }}>SẢN PHẨM LIÊN QUAN</Title>
        <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow} Footer={null}>
          {productData.getProducts(8).map((item, index) => (
            <ProductCard
              id={index}
              key={index}
              img01={item.image01}
              img02={item.image02}
              name={item.title}
              price={Number(item.price)}
            />
          ))}
        </ScrollMenu>
      </Space>
    </Helmet>
  )
}

export default Product
