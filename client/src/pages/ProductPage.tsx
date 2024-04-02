import { useEffect } from 'react';
import { useFetchShopifyProductsQuery } from '../store/apis/shopifyApi';
import {
  JsonView,
  allExpanded,
  darkStyles,
  defaultStyles,
} from 'react-json-view-lite';
import 'react-json-view-lite/dist/index.css';

const ProductPage = () => {
  const urlParams = new URLSearchParams(window.location.search);
  // Get the token value
  const token = urlParams.get('token');

  if (token) {
    localStorage.setItem('shopifyToken', JSON.stringify(token));
  }
  const { data, error, isLoading, isError, isSuccess } =
    useFetchShopifyProductsQuery({
      token: token as string,
    });
  useEffect(() => {
    if (isSuccess) {
      console.log(data);
    }
    if (isError) {
      console.log(error);
    }
  }, [data, error, isLoading, isError, isSuccess]);
  return (
    <>
      {isSuccess &&
        data &&
        data.products.map((product: Product, index: number) => {
          console.log(index);
          if (index % 2 === 0) {
            return (
              <JsonView
                key={product.id}
                data={product}
                shouldExpandNode={allExpanded}
                style={defaultStyles}
              />
            );
          } else {
            return (
              <JsonView
                key={product.id}
                data={product}
                shouldExpandNode={allExpanded}
                style={darkStyles}
              />
            );
          }
        })}
    </>
  );
};

export default ProductPage;
