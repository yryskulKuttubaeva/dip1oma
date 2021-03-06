import mixer2Image from "../assets/mixer2.jpeg";
import mixer3Image from "../assets/mixer3.jpeg";
import count1Image from "../assets/kettle2.jpg";
import phone1Image from "../assets/phone.jpeg"
import phone2Image from "../assets/phone1.jpeg"
import phone3Image from "../assets/phone2.jpeg"
import mixerImage from "../assets/nay.jpeg"
import cameraImage from "../assets/camera.jpeg"
import laptopImage from "../assets/laptop.jpeg"

const products = [
  {
    image: mixer3Image,
    productId: "logo",
    categoryId: "Women",
    title: "Nike",
    price: 6999,
  },
  {
    image: mixer2Image,
    productId: "Jordan",
    categoryId: "Women",
    title: "Nike",
    price: 7999,
  },

  {
    image: mixerImage,
    productId: "RU",
    categoryId: "Women",
    title: "Nike",
    price: 2999,
  },
  {
    image: phone1Image,
    productId: "Male",
    categoryId: "Men",
    title: "Nike ",
    price: 9999,
  },
  {
    image: phone2Image,
    productId: "Blazer Mix",
    categoryId: "Men",
    title: "Nike",
    price: 6699,
  },
  {
    image: phone3Image,
    productId: "SA",
    categoryId: "Men",
    title: "Nike ",
    price: 2399,
  },
  {
    image: count1Image,
    productId: "White air max",

    categoryId: "Max",
    title: "Nike",
    price: 4999,
  },
  {
    image: laptopImage,
    productId: "Black air max",

    categoryId: "Max",
    title: "Nike ",
    price: 3299,
  },
  {
    image: cameraImage,
    productId: "black-white air max",

    categoryId: "Max",
    title: "Nike ",
    price: 1299,
  },
];

export function getProducts(categoryId) {
  if (categoryId) {
    return products.filter((product) => product.categoryId === categoryId);
  }
  return products;
}

export function getProduct(productId) {
  return products[
    products.findIndex((product) => product.productId === productId)
  ];
}