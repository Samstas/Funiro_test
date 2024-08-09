import Image from "next/image";

const products = [
  {
    id: 1,
    title: "Syltherine",
    desc: "Stylish cafe chair",
    currPrice: "Rp 2.500.000",
    prevPrice: "Rp 3.500.000",
    isNew: false,
    discount: 30,
    productImg: "/images/our_products/product1.png",
  },
  {
    id: 2,
    title: "Leviosa",
    desc: "Stylish cafe chair",
    currPrice: "Rp 2.500.000",
    prevPrice: null,
    isNew: false,
    discount: null,
    productImg: "/images/our_products/product2.png",
  },
  {
    id: 3,
    title: "Lolito",
    desc: "Luxury big sofa",
    currPrice: "Rp 7.000.000",
    prevPrice: "Rp 14.000.000",
    isNew: false,
    discount: 50,
    productImg: "/images/our_products/product3.png",
  },
  {
    id: 4,
    title: "Respira",
    desc: "Minimalist fan",
    currPrice: "Rp 500.000",
    prevPrice: null,
    isNew: true,
    discount: null,
    productImg: "/images/our_products/product4.png",
  },
  {
    id: 5,
    title: "Grifo",
    desc: "Night lamp",
    currPrice: "Rp 1.500.000",
    prevPrice: null,
    isNew: false,
    discount: null,
    productImg: "/images/our_products/product5.png",
  },
  {
    id: 6,
    title: "Muggo",
    desc: "Small mug",
    currPrice: "Rp 150.000",
    prevPrice: null,
    isNew: true,
    discount: null,
    productImg: "/images/our_products/product6.png",
  },
  {
    id: 7,
    title: "Pingky",
    desc: "Cute bed set",
    currPrice: "Rp 7.000.000",
    prevPrice: "Rp 14.000.000",
    isNew: false,
    discount: 50,
    productImg: "/images/our_products/product7.png",
  },
  {
    id: 8,
    title: "Potty",
    desc: "Minimalist flower pot",
    currPrice: "Rp 500.000",
    prevPrice: null,
    isNew: true,
    discount: null,
    productImg: "/images/our_products/product8.png",
  },
];

// TODO: если есть скидка в товаре тогда - вычесть процент discount из prevPrice

export function OurProducts() {
  return (
    <section className="w-full flex flex-col items-center">
      <h2 className="text-gray1 text-section_h2 font-bold mb-8 mt-[88px] ">
        Our Products
      </h2>

      {/*   id: 1,
            productImg: "",
            title: "Syltherine",
            desc: "Stylish cafe chair",
            currPrice: "Rp 2.500.000",
            prevPrice: "Rp 3.500.000",
            isNew: false,
            discount: 30, 
    */}

      <ul className="flex flex-wrap gap-8 justify-center">
        {/* width 285px card  height 446px  */}

        {products.map((product) => (
          <li key={product.id} className="w-[285px] h-[446px]">
            <div className="relative">
              <Image
                src={product.productImg}
                alt={product.title}
                className="w-[285px] h-[301px] bg-orange-400"
                width="285"
                height="301"
              />

              {product.isNew && (
                <div className="absolute top-6 right-6 size-12 rounded-full bg-green_accent flex items-center justify-center text-white">
                  New
                </div>
              )}

              {product.discount && (
                <div className="absolute top-6 right-6 size-12 rounded-full bg-red_accent flex items-center justify-center text-white">
                  -{product.discount}%
                </div>
              )}
            </div>

            <div className="p-4 pb-[30px] bg-lightbg space-y-2">
              <h5 className="text-secondary font-semibold text-gray1">
                {product.title}
              </h5>

              <p className="font-medium text-gray3 ">{product.desc}</p>

              <div className="flex items-center">
                <span className="text-middle text-gray1 font-semibold mr-4">
                  {product.currPrice}
                </span>

                {product.prevPrice && (
                  <span className="text-gray4 line-through">
                    {product.prevPrice}
                  </span>
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>

      <button className="border border-primary py-3 px-[82px] text-primary mt-8">
        Show More
      </button>
    </section>
  );
}
