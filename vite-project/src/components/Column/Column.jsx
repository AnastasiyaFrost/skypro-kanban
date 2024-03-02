import Card from "../Card/Card";
import { ColumnCards, ColumnTitle, MainColumn } from "./Column.styled";

export default function Column({ title, cardList }) {
  return (
    <MainColumn>
      <ColumnTitle>
        <p>{title}</p>

      </ColumnTitle>
      <ColumnCards>
        {cardList.map((card) => (
          <Card
            key={card.id}
            topic={card.theme}
            title={card.title}
            date={card.date}
          />
        ))}
      </ColumnCards>
    </MainColumn>

  );
}
