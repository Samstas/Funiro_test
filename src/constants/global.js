// Tip and Tricks Images
import tipsImage1 from "../../public/images/tips_tricks/image1.png";
import tipsImage2 from "../../public/images/tips_tricks/image2.png";
import tipsImage3 from "../../public/images/tips_tricks/image3.png";

// Features Images
import featureImage1 from "../../public/images/feature/trophy.png";
import featureImage2 from "../../public/images/feature/guarantee.png";
import featureImage3 from "../../public/images/feature/shipping.png";
import featureImage4 from "../../public/images/feature/support.png";

// Our Products Images
import productImage1 from "../../public/images/our_products/product1.png";
import productImage2 from "../../public/images/our_products/product2.png";
import productImage3 from "../../public/images/our_products/product3.png";
import productImage4 from "../../public/images/our_products/product4.png";
import productImage5 from "../../public/images/our_products/product5.png";
import productImage6 from "../../public/images/our_products/product6.png";
import productImage7 from "../../public/images/our_products/product7.png";
import productImage8 from "../../public/images/our_products/product8.png";

// Hero SLide Images
import heroImage1 from "../../public/images/hero/image1.png";
import heroImage2 from "../../public/images/hero/image2.png";
import heroImage3 from "../../public/images/hero/image3.png";

export const features = [
  {
    id: 1,
    iconPath: featureImage1,
    title: "High Quality",
    text: "crafted from top materials",
  },
  {
    id: 2,
    iconPath: featureImage2,
    title: "Warranty Protection",
    text: "Over 2 years",
  },
  {
    id: 3,
    iconPath: featureImage3,
    title: "Free Shipping",
    text: "Order over 150 $",
  },
  {
    id: 4,
    iconPath: featureImage4,
    title: "24 / 7 Support",
    text: "Dedicated support",
  },
];

export const tipsSlides = [
  {
    id: 1,
    image: tipsImage1,
    title: `How to create a living room to love`,
    date: "20 jan 2020",
  },
  {
    id: 2,
    image: tipsImage2,
    title: "Solution for clean look working space",
    date: "10 jan 2020",
  },
  {
    id: 3,
    image: tipsImage3,
    title: "Make your cooking activity more fun with good setup",
    date: "20 jan 2020",
  },
  {
    id: 4,
    image: tipsImage1,
    title: `How to create a living room to love`,
    date: "20 jan 2020",
  },
];

export const products = [
  {
    id: 1,
    title: "Syltherine",
    desc: "Stylish cafe chair",
    currPrice: "Rp 2.500.000",
    prevPrice: "Rp 3.500.000",
    isNew: false,
    discount: 30,
    productImg: productImage1,
  },
  {
    id: 2,
    title: "Leviosa",
    desc: "Stylish cafe chair",
    currPrice: "Rp 2.500.000",
    prevPrice: null,
    isNew: false,
    discount: null,
    productImg: productImage2,
  },
  {
    id: 3,
    title: "Lolito",
    desc: "Luxury big sofa",
    currPrice: "Rp 7.000.000",
    prevPrice: "Rp 14.000.000",
    isNew: false,
    discount: 50,
    productImg: productImage3,
  },
  {
    id: 4,
    title: "Respira",
    desc: "Minimalist fan",
    currPrice: "Rp 500.000",
    prevPrice: null,
    isNew: true,
    discount: null,
    productImg: productImage4,
  },
  {
    id: 5,
    title: "Grifo",
    desc: "Night lamp",
    currPrice: "Rp 1.500.000",
    prevPrice: null,
    isNew: false,
    discount: null,
    productImg: productImage5,
  },
  {
    id: 6,
    title: "Muggo",
    desc: "Small mug",
    currPrice: "Rp 150.000",
    prevPrice: null,
    isNew: true,
    discount: null,
    productImg: productImage6,
  },
  {
    id: 7,
    title: "Pingky",
    desc: "Cute bed set",
    currPrice: "Rp 7.000.000",
    prevPrice: "Rp 14.000.000",
    isNew: false,
    discount: 50,
    productImg: productImage7,
  },
  {
    id: 8,
    title: "Potty",
    desc: "Minimalist flower pot",
    currPrice: "Rp 500.000",
    prevPrice: null,
    isNew: true,
    discount: null,
    productImg: productImage8,
  },
];

export const heroSlides = [
  {
    id: 1,
    title: "Bohauss",
    text: "Luxury big sofa 2-seat",
    price: "Rp 17.000.000",
    image: heroImage1,
  },
  {
    id: 2,
    title: "Bohauss",
    text: "Luxury big sofa 2-seat",
    price: "Rp 17.000.000",
    image: heroImage2,
  },
  {
    id: 3,
    title: "Bohauss",
    text: "Luxury big sofa 2-seat",
    price: "Rp 17.000.000",
    image: heroImage3,
  },
];
