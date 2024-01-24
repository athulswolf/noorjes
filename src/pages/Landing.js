import React from 'react'
import Hero1 from '../components/Hero1'
import Hero2 from '../components/Hero2'
import Hero3 from '../components/Hero3'
import Hero4 from '../components/Hero4'
import Hero5 from '../components/Hero5'
import Hero6 from '../components/Hero6'
import Hero7 from '../components/Hero7'
import Hero8 from '../components/Hero8'
import Hero9 from '../components/Hero9'
import Footer from '../components/Footer'
import { Navbar } from '../components/Navbar'
// import ProductDetails from '../components/Shopify'

// import Client from 'shopify-buy';

// const client = Client.buildClient({
//   domain: 'gazaal-store.myshopify.com',
//   storefrontAccessToken: '5abe31b59a198837d0bf641aa787858b'
// });

// const clientWithTranslatedContent = Client.buildClient({
//   domain: 'gazaal-store.myshopify.com',
//   storefrontAccessToken: '5abe31b59a198837d0bf641aa787858b',
//   language: 'ja-JP'
// });

// client.product.fetchAll().then((products) => {
//   console.log(products);
// });

// const productId = 'gid://shopify/Product/7652685119705';

// client.product.fetch(productId).then((product) => {
//   console.log(product,"try");
// });



const Landing = () => {
  return (
    <div>
      <Navbar />
      <Hero1 />
      <Hero2 />
      <Hero3 />
      <Hero4 />
      <Hero5 />
      <Hero6 />
      <Hero7 />
      <Hero8 />
      <Hero9 />
      <Footer />
      {/* <ProductDetails /> */}
    </div>
  )
}

export default Landing