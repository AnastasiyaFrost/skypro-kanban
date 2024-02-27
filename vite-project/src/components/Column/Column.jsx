import Card from "../Card/Card";
import { ColumnCards, ColumnTitle, MainColumn } from "./Column.styled";

export default function Column({ title }) {
  return (
    <MainColumn>
      <ColumnTitle>
        <p>{title}</p>
      </ColumnTitle>
      <ColumnCards>
        <Card topic={"Web Design"} title={"Новая задача"} />
        <Card topic={"Без статуса"} title={"Новая задача"} />
        <Card topic={"Web Design"} title={"Новая задача"} />
        <Card topic={"Copywriting"} title={"Новая задача"} />
        <Card topic={"Research"} title={"Новая задача"} />
      </ColumnCards>
    </MainColumn>
  );
}
