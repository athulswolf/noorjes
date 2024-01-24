import React, { useEffect, useState } from 'react';

const ProductDetails = () => {
  const [initialized, setInitialized] = useState(false);
  let script; // Declare script variable outside the useEffect

  useEffect(() => {
    if (!initialized) {
      script = document.createElement('script');
      script.async = true;
      script.src = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';

      (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);

      script.onload = () => {
        setTimeout(() => {
          if (window.ShopifyBuy && window.ShopifyBuy.UI && window.ShopifyBuy.UI.onReady) {
            window.ShopifyBuy.UI.onReady(window.ShopifyBuy.buildClient({
              domain: 'gazaal-store.myshopify.com',
              storefrontAccessToken: '5abe31b59a198837d0bf641aa787858b',
            })).then((ui) => {
              ui.createComponent('product', {
                id: '7652685119705',
                node: document.getElementById('product-component-1706093561765'),
                moneyFormat: 'Dhs.%20%7B%7Bamount%7D%7D',
              });
            });
          }
        }, 100);

        setInitialized(true);
      };
    }

    return () => {
      // Cleanup code if needed
      if (script) {
        script.parentNode.removeChild(script);
      }
    };
  }, [initialized]);

  return (
    <div>
      <div id='product-component-1706093561765'></div>
      {/* Additional content or product details */}
    </div>
  );
};

export default ProductDetails;
