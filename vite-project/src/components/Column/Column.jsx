import Card from "../Card/Card";
import { ColumnCards, ColumnTitle, MainColumn } from "./Column.styled";

export default function Column({ title, cards }) {
  return (
    <MainColumn>
      <ColumnTitle>
        <p>{title}</p>
      </ColumnTitle>
      <ColumnCards>
        {cards.map((card) => (
          <Card
            key={card._id}
            id={card._id}
            topic={card.topic}
            title={card.title}
            date={card.date}
          />
        ))}
      </ColumnCards>
    </MainColumn>
  );
}
