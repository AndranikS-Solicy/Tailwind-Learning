export interface CardInfoProps {
  id?: number;
  src: string;
  title: string;
  price: number;
  description: string;
}

export const cardInfo: CardInfoProps[] = [
  {
    id: 1,
    src: "/images/pizza.avif",
    title: "Pizza",
    price: 12.99,
    description: "Delicious cheesy pizza with fresh toppings.",
  },
  {
    id: 2,
    src: "/images/burger.webp",
    title: "Burger",
    price: 8.99,
    description: "Juicy beef burger with lettuce, tomato, and cheese.",
  },
  {
    id: 3,
    src: "/images/taco.jpg",
    title: "Taco",
    price: 6.99,
    description: "Spicy taco with seasoned meat and fresh salsa.",
  },
  {
    id: 4,
    src: "/images/sushi.jpg",
    title: "Sushi",
    price: 15.99,
    description: "Fresh sushi rolls with a variety of fillings.",
  },
  {
    id: 5,
    src: "/images/pasta.avif",
    title: "Pasta",
    price: 11.99,
    description: "Classic pasta with marinara sauce and Parmesan.",
  },
  {
    id: 6,
    src: "/images/salad.jpg",
    title: "Salad",
    price: 7.99,
    description: "Crisp salad with mixed greens and a tangy vinaigrette.",
  },
];
