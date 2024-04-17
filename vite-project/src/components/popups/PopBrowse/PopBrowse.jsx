import { useParams, useNavigate } from "react-router-dom";
import { appRoutes } from "../../../lib/appRoutes";
import { useTasks } from "../../../hooks/useTasks";
import { useState } from "react";
import Calendar from "../../Calendar/Calendar";
import { deleteTodo, editTodo } from "../../../api";
import { useUser } from "../../../hooks/useUser";
import { topicHeader } from "../../../lib/topic";
import { CardTopic, TopicText } from "../../Card/Card.styled";
import * as B from "./PopBrowse.styled";
import * as C from "../PopNewCard/PopNewCard.styled";
import { BlueButton, SubTtl, TransparentButton } from "../../../styled/common/Common.styled";

export default function PopBrowse() {
  const { cards, setCards, setIsLoading } = useTasks();
  const { id } = useParams();
  const poppingTask = cards.find((card) => card._id == id);
  const { user } = useUser();
  const navigate = useNavigate();

  const [newTask, setNewTask] = useState({
    title: poppingTask.title,
    description: poppingTask.description,
    topic: poppingTask.topic,
    date: poppingTask.date,
    status: poppingTask.status,
  });
  const [isEdit, setIsEdit] = useState(false);
  const [selectedDate, setSelectedDate] = useState(poppingTask.date);
  if (!poppingTask) {
    return navigate(appRoutes.MAIN);
  }
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
      _id: poppingTask._id,
      date: selectedDate,
    };
    console.log({ taskData });

    await editTodo({ token: user.token }, { taskData })
      .then((todos) => {
        console.log(todos.tasks);
        setCards(todos.tasks);
        setIsLoading(false);
        navigate(appRoutes.MAIN);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const handleTaskDelete = async (e) => {
    e.preventDefault();
    await deleteTodo({ token: user.token }, id)
      .then((todos) => {
        console.log("После удаления задачи список: " + todos.tasks);
        setCards(todos.tasks);
        navigate(appRoutes.MAIN);
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  const handleEditCancel = () => {
    setNewTask({
      title: poppingTask.title,
      description: poppingTask.description,
      topic: poppingTask.topic,
      date: poppingTask.date,
      status: poppingTask.status,
    });
    setIsEdit(false);
  }

  return (
    <B.PopBrowseDiv>
      <C.Container>
        <C.Block>
          <B.Content>
            <B.TopBlock>
              {isEdit ? (
                <C.FormNewInput
                  type="text"
                  onChange={handleInputChange}
                  value={newTask.title}
                  name="title"
                  id="formTitle"
                  placeholder="Введите название задачи..."
                  autoFocus=""
                />
              ) : (
                <B.Ttl>{poppingTask.title}</B.Ttl>
              )}
              <B.ActiveCategory>
                <CardTopic $themeColor={topicHeader[poppingTask.topic]}>
                  <TopicText>{poppingTask.topic}</TopicText>
                </CardTopic>
              </B.ActiveCategory>
            </B.TopBlock>
            <B.Status>
              <B.StatusP>Статус</B.StatusP>
              {isEdit ? (
                <B.StatusThemes>
                  {/* <B.ActiveStatus>
                    <input
                      type="radio"
                      id="radio1"
                      name="status"
                      value="Без статуса"
                      onChange={handleInputChange}
                    />
                    <B.StatusTheme htmlFor="radio1">Без статуса</B.StatusTheme>
                  </B.ActiveStatus> */}

                  <B.ActiveStatus>
                    <input
                      type="radio"
                      id="radio2"
                      name="status"
                      value="Нужно сделать"
                      onChange={handleInputChange}
                    />
                    <B.StatusTheme htmlFor="radio2">
                      Нужно сделать
                    </B.StatusTheme>
                  </B.ActiveStatus>

                  <B.ActiveStatus>
                    <input
                      type="radio"
                      id="radio3"
                      name="status"
                      value="В работе"
                      onChange={handleInputChange}
                    />
                    <B.StatusTheme htmlFor="radio3">В работе</B.StatusTheme>
                  </B.ActiveStatus>

                  <B.ActiveStatus>
                    <input
                      type="radio"
                      id="radio4"
                      name="status"
                      value="Тестирование"
                      onChange={handleInputChange}
                    />
                    <B.StatusTheme htmlFor="radio4">Тестирование</B.StatusTheme>
                  </B.ActiveStatus>

                  <B.ActiveStatus>
                    <input
                      className="status__theme"
                      type="radio"
                      id="radio5"
                      name="status"
                      value="Готово"
                      onChange={handleInputChange}
                    />
                    <B.StatusTheme htmlFor="radio5">Готово</B.StatusTheme>
                  </B.ActiveStatus>
                </B.StatusThemes>
              ) : (
                <B.StatusThemes>
                  <B.StatusTheme>
                    <p>{poppingTask.status}</p>
                  </B.StatusTheme>
                </B.StatusThemes>
              )}
              {/* // <div className="status__themes">
                //   <div className="status__theme">
                //     <p>{poppingTask.status}</p>
                //   </div>
                //   <div className="status__theme _gray">
                //     <p className="_gray">Нужно сделать</p>
                //   </div>
                //   <div className="status__theme">
                //     <p>В работе</p>
                //   </div>
                //   <div className="status__theme">
                //     <p>Тестирование</p>
                //   </div>
                //   <div className="status__theme">
                //     <p>Готово</p>
                //   </div>
                // </div>
              // )} */}
            </B.Status>
            <C.Wrap>
              <C.Form id="formBrowseCard" action="#">
                <C.FormNewBlock>
                  <SubTtl htmlFor="textArea01">Описание задачи</SubTtl>
                  {isEdit ? (
                    <B.FormArea
                      name="description"
                      onChange={handleInputChange}
                      id="textArea01"
                      value={newTask.description}
                      placeholder="Введите описание задачи..."
                    ></B.FormArea>
                  ) : (
                    <B.FormArea
                      name="description"
                      onChange={handleInputChange}
                      disabled
                      id="textArea01"
                      value={newTask.description}
                      placeholder="Введите описание задачи..."
                    ></B.FormArea>
                  )}
                </C.FormNewBlock>
              </C.Form>
              {isEdit ? (
                <Calendar
                  selectedDate={selectedDate}
                  setSelectedDate={setSelectedDate}
                />
              ) : (
                <Calendar selectedDate={poppingTask.date} />
              )}
            </C.Wrap>
            {isEdit && (
              <C.Categories>
                <C.CategoriesP>Категория</C.CategoriesP>
                <C.CategoriesThemes>
                  <C.Orange>
                    <input
                      type="radio"
                      id="radio6"
                      name="topic"
                      value="Web Design"
                      onChange={handleInputChange}
                    />
                    <C.CategoriesTheme htmlFor="radio6">
                      Web Design
                    </C.CategoriesTheme>
                  </C.Orange>

                  <C.Green>
                    <input
                      type="radio"
                      id="radio7"
                      name="topic"
                      value="Research"
                      onChange={handleInputChange}
                    />
                    <C.CategoriesTheme htmlFor="radio7">
                      Research
                    </C.CategoriesTheme>
                  </C.Green>

                  <C.Purple>
                    <input
                      type="radio"
                      id="radio8"
                      name="topic"
                      value="Copywriting"
                      onChange={handleInputChange}
                    />
                    <C.CategoriesTheme htmlFor="radio8">
                      Copywriting
                    </C.CategoriesTheme>
                  </C.Purple>
                </C.CategoriesThemes>
              </C.Categories>
            )}
            {/* <div className="theme-down__categories theme-down">
              <p className="categories__p subttl">Категория</p>
              <div className="categories__theme _orange _active-category">
                <p className="_orange">Web Design</p>
              </div>
            </div> */}
            <B.Btns>
              {isEdit ? (
                <B.BtnGroup>
                  <BlueButton onClick={handleFormSubmit}>Сохранить</BlueButton>
                  <TransparentButton onClick={handleEditCancel}>
                    Отменить
                  </TransparentButton>
                  <TransparentButton onClick={handleTaskDelete}>
                    Удалить задачу
                  </TransparentButton>
                </B.BtnGroup>
              ) : (
                <B.BtnGroup>
                  <TransparentButton
                    onClick={() => {
                      setIsEdit(true);
                    }}
                  >
                    Редактировать задачу
                  </TransparentButton>
                  <TransparentButton onClick={handleTaskDelete}>
                    Удалить задачу
                  </TransparentButton>
                </B.BtnGroup>
              )}

              <BlueButton
                onClick={() => {
                  navigate(appRoutes.MAIN);
                }}
              >
                Закрыть
              </BlueButton>
            </B.Btns>
          </B.Content>
        </C.Block>
      </C.Container>
    </B.PopBrowseDiv>
  );
}
