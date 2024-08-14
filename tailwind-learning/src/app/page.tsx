import { cardInfo } from "../../utils/helpers/cardsFakeData";
import Card from "./components/card";

export default function Home(): JSX.Element {
  return (
    <main className="p-10 flex flex-wrap justify-center gap-20">
      {cardInfo.map((card) => (
        <Card
          key={card.id}
          src={card.src}
          title={card.title}
          price={card.price}
          description={card.description}
        />
      ))}
    </main>
  );
}
