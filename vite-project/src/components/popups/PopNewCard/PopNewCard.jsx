import { useState } from "react";
import Calendar from "../../Calendar/Calendar";
import { Link } from "react-router-dom";
import { appRoutes } from "../../../lib/appRoutes";
import { postTodo } from "../../../api";
import { useUser } from "../../../hooks/useUser";
import { useTasks } from "../../../hooks/useTasks";
import { useNavigate } from "react-router-dom";
import * as P from "./PopNewCard.styled";
import { SubTtl } from "../../../styled/common/Common.styled";

export default function PopNewCard() {
  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
    topic: "",
    date: "",
  });
  const [selectedDate, setSelectedDate] = useState(null);
  const { user } = useUser();
  const { setCards, setIsLoading } = useTasks();
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setNewTask({
      ...newTask,
      [name]: value,
    });
  };
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const taskData = {
      ...newTask,
      date: selectedDate,
    };
    console.log({ taskData });

    await postTodo({ token: user.token }, taskData)
      .then((todos) => {
        console.log(todos.tasks);
        setCards(todos.tasks);
        setIsLoading(false);
        navigate(appRoutes.MAIN)
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <P.PopNewCardDiv>
      <P.Container>
        <P.Block>
          <P.Content>
            <P.Ttl>Создание задачи</P.Ttl>
            <P.Close>
              <Link to={appRoutes.MAIN}>&#10006;</Link>
            </P.Close>
            <P.Wrap>
              <P.Form action="#">
                <P.FormNewBlock>
                  <SubTtl htmlFor="formTitle">Название задачи</SubTtl>
                  <P.FormNewInput
                    type="text"
                    onChange={handleInputChange}
                    value={newTask.title}
                    name="title"
                    id="formTitle"
                    placeholder="Введите название задачи..."
                    autoFocus=""
                  />
                </P.FormNewBlock>
                <P.FormNewBlock>
                  <SubTtl htmlFor="textArea">Описание задачи</SubTtl>
                  <P.FormNewArea
                    onChange={handleInputChange}
                    value={newTask.description}
                    name="description"
                    id="textArea"
                    placeholder="Введите описание задачи..."
                  />
                </P.FormNewBlock>
              </P.Form>
              <Calendar
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
              />
            </P.Wrap>
            <P.Categories>
              <P.CategoriesP>Категория</P.CategoriesP>
              <P.CategoriesThemes>
                <P.Orange>
                  <input
                    type="radio"
                    id="radio1"
                    name="topic"
                    value="Web Design"
                    onChange={handleInputChange}
                  />
                  <P.CategoriesTheme htmlFor="radio1">
                    Web Design
                  </P.CategoriesTheme>
                </P.Orange>

                <P.Green>
                  <input
                    type="radio"
                    id="radio2"
                    name="topic"
                    value="Research"
                    onChange={handleInputChange}
                  />
                  <P.CategoriesTheme htmlFor="radio2">
                    Research
                  </P.CategoriesTheme>
                </P.Green>

                <P.Purple>
                  <input
                    type="radio"
                    id="radio3"
                    name="topic"
                    value="Copywriting"
                    onChange={handleInputChange}
                  />
                  <P.CategoriesTheme htmlFor="radio3">
                    Copywriting
                  </P.CategoriesTheme>
                </P.Purple>
              </P.CategoriesThemes>
            </P.Categories>
            {/* 
                
                  <div className="categories__theme _orange _active-category">
                    <p className="_orange">Web Design</p>
                  </div>
                  <div className="categories__theme _green">
                    <p className="_green">Research</p>
                  </div>
                  <div className="categories__theme _purple">
                    <p className="_purple">Copywriting</p>
                  </div>
                </div>
              </div> */}
            <P.Create
              onClick={handleFormSubmit}
            >
              Создать задачу
            </P.Create>
            {/* <Link to={appRoutes.MAIN}>
              <BlueButton>Закрыть</BlueButton>
            </Link> */}
          </P.Content>
        </P.Block>
      </P.Container>
    </P.PopNewCardDiv>
  );
}
