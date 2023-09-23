import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Datatable from "src/components/Datatable/Datatable";
import { productColumns } from "src/datatablesource";

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
        <Datatable
          rows={data}
          title=""
          productColumns={productColumns}
          type="products"
          reply
        />
      </div>
    </div>
  );
}
