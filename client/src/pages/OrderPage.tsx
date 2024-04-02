import { useEffect } from 'react';
import {
  JsonView,
  allExpanded,
  darkStyles,
  defaultStyles,
} from 'react-json-view-lite';
import 'react-json-view-lite/dist/index.css';
import { useFetchShopifyOrdersQuery } from '../store/apis/shopifyApi';

const OrderPage = () => {
  const { data, error, isLoading, isError, isSuccess } =
    useFetchShopifyOrdersQuery({});
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
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        data.orders.map((order, index: number) => {
          console.log(index);
          if (index % 2 === 0) {
            return (
              <JsonView
                key={order.id}
                data={order}
                shouldExpandNode={allExpanded}
                style={defaultStyles}
              />
            );
          } else {
            return (
              <JsonView
                key={order.id}
                data={order}
                shouldExpandNode={allExpanded}
                style={darkStyles}
              />
            );
          }
        })}
    </>
  );
};

export default OrderPage;
