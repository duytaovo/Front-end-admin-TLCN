import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import TableProduct from "./Tables";

export default function ListProduct() {
  const locationUrl = useLocation();
  const [data, setData] = useState([]);

  useEffect(() => {
    function getProducts() {
      //   ProductService.getProducts(1, 9999).then((res) => setData(res.data));
    }
    getProducts();
  }, []);
  return (
    <div>
      <div>
        {/* <Datatable
          rows={data}
          title=""
          productColumns={productColumns}
          type="products"
          reply
        /> */}
        <TableProduct onClick={() => {}} />
      </div>
    </div>
  );
}
