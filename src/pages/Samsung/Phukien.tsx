import { useState, useEffect } from "react";
import ProductCard from "src/components/ProductCard";
import Section from "src/components/Section";
import Slider from "react-slick";
import NextArrow from "src/components/Slick/NextArrow";
import PrevArrow from "src/components/Slick/PrevArrow";

const Phukien = () => {
  const [products, setProducts] = useState([]);
  const [limit, setLimit] = useState(10);
  const number = 25;
  useEffect(() => {
    fetch(`https://json.msang.repl.co/products?brand=samsung&category=phukien`)
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, [limit]);
  const handleClick = () => {
    setLimit(number);
  };
  return (
    <div>
      <Section styles="bg-white">
        <div className="w-full">
          <Slider
            slidesToShow={4}
            slidesToScroll={4}
            // nextArrow={<NextArrow />}
            // prevArrow={<PrevArrow />}
          >
            {products.map((product: any) => (
              <div className="w-full" key={product.title}>
                <div className="mx-4">
                  <ProductCard key={product.title} {...product} />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </Section>
    </div>
  );
};
export default Phukien;
