import Card from "../Card/Card";

export default function Column({ title, cardList }) {
  return (
    <div className="main__column">
      <div className="column__title">
        <p>{title}</p>
      </div>
      <div className="cards">
        {cardList.map((card) => (
          <Card
            key={card.id}
            topic={card.theme}
            title={card.title}
            date={card.date}
          />
        ))}
      </div>
    </div>
  );
}
