import { useParams, useNavigate } from "react-router-dom";
import { appRoutes } from "../../../lib/appRoutes";
import { useTasks } from "../../../hooks/useTasks";
import { useState } from "react";
import Calendar from "../../Calendar/Calendar";
import { deleteTodo, editTodo } from "../../../api";
import { useUser } from "../../../hooks/useUser";
import { topicHeader } from "../../../lib/topic";
import { CardTopic } from "../../Card/Card.styled";

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
      date: selectedDate,
    };
    console.log({ taskData });

    await editTodo({ token: user.token }, taskData)
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

  return (
    <div className="pop-browse" id="popBrowse">
      <div className="pop-browse__container">
        <div className="pop-browse__block">
          <div className="pop-browse__content">
            <div className="pop-browse__top-block">
              {isEdit ? (
                <input
                  className="form-new__input"
                  type="text"
                  onChange={handleInputChange}
                  value={newTask.title}
                  name="title"
                  id="formTitle"
                  placeholder="Введите название задачи..."
                  autoFocus=""
                />
              ) : (
                <h3 className="pop-browse__ttl">{poppingTask.title}</h3>
              )}
              <div className="categories__theme theme-top _active-category">
                <CardTopic $themeColor={topicHeader[poppingTask.topic]}>
                  {poppingTask.topic}
                </CardTopic>
              </div>
            </div>
            <div className="pop-browse__status status">
              <p className="status__p subttl">Статус</p>
              {isEdit ? (
                <div className="status__themes">
                  <input
                    type="radio"
                    id="radio1"
                    name="status"
                    value="Без статуса"
                    onChange={handleInputChange}
                  />
                  <label htmlFor="radio1" className="status__theme _gray">
                    Без статуса
                  </label>

                  <input
                    type="radio"
                    id="radio2"
                    name="status"
                    value="Нужно сделать"
                    onChange={handleInputChange}
                  />
                  <label htmlFor="radio2" className="status__theme">
                    Нужно сделать
                  </label>

                  <input
                    className="status__theme"
                    type="radio"
                    id="radio3"
                    name="status"
                    value="В работе"
                    onChange={handleInputChange}
                  />
                  <label htmlFor="radio3" className="status__theme">
                    В работе
                  </label>

                  <input
                    className="status__theme"
                    type="radio"
                    id="radio4"
                    name="status"
                    value="Тестирование"
                    onChange={handleInputChange}
                  />
                  <label htmlFor="radio4" className="status__theme">
                    Тестирование
                  </label>

                  <input
                    className="status__theme"
                    type="radio"
                    id="radio5"
                    name="status"
                    value="Готово"
                    onChange={handleInputChange}
                  />
                  <label htmlFor="radio5" className="status__theme">
                    Готово
                  </label>
                </div>
              ) : (
                <div className="status__themes">
                  <div className="status__theme">
                    <p>{poppingTask.status}</p>
                  </div>
                </div>
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
            </div>
            <div className="pop-browse__wrap">
              <form
                className="pop-browse__form form-browse"
                id="formBrowseCard"
                action="#"
              >
                <div className="form-browse__block">
                  <label htmlFor="textArea01" className="subttl">
                    Описание задачи
                  </label>
                  {isEdit ? (
                    <textarea
                      className="form-browse__area"
                      name="description"
                      onChange={handleInputChange}
                      id="textArea01"
                      value={newTask.description}
                      placeholder="Введите описание задачи..."
                    ></textarea>
                  ) : (
                    <textarea
                      className="form-browse__area"
                      name="description"
                      onChange={handleInputChange}
                      disabled
                      id="textArea01"
                      value={newTask.description}
                      placeholder="Введите описание задачи..."
                    ></textarea>
                  )}
                </div>
              </form>
              {isEdit ? (
                <Calendar
                  selectedDate={selectedDate}
                  setSelectedDate={setSelectedDate}
                />
              ) : (
                <Calendar />
              )}
            </div>
            {isEdit && (
              <div className="pop-new-card__categories categories">
                <p className="categories__p subttl">Категория</p>
                <div className="categories__themes">
                  <input
                    type="radio"
                    id="radio1"
                    name="topic"
                    value="Web Design"
                    onChange={handleInputChange}
                  />
                  <label htmlFor="radio1" className="categories__theme _orange">
                    Web Design
                  </label>

                  <input
                    type="radio"
                    id="radio2"
                    name="topic"
                    value="Research"
                    onChange={handleInputChange}
                  />
                  <label htmlFor="radio2" className="categories__theme _green">
                    Research
                  </label>

                  <input
                    type="radio"
                    id="radio3"
                    name="topic"
                    value="Copywriting"
                    onChange={handleInputChange}
                  />
                  <label htmlFor="radio3" className="categories__theme _purple">
                    Copywriting
                  </label>
                </div>
              </div>
            )}
            {/* <div className="theme-down__categories theme-down">
              <p className="categories__p subttl">Категория</p>
              <div className="categories__theme _orange _active-category">
                <p className="_orange">Web Design</p>
              </div>
            </div> */}

            {isEdit ? (
              <div className="pop-browse__btn-edit">
                <div className="btn-group">
                  <button
                    className="_btn-bg _hover01"
                    onClick={handleFormSubmit}
                  >
                    Сохранить
                  </button>
                  <button
                    className="_btn-bor _hover03"
                    onClick={navigate(appRoutes.MAIN)}
                  >
                    Отменить
                  </button>
                </div>
              </div>
            ) : (
              <div className="pop-browse__btn-browse ">
                <div className="btn-group">
                  <button
                    className="_btn-bor _hover03"
                    onClick={() => {
                      setIsEdit(true);
                    }}
                  >
                    Редактировать задачу
                  </button>
                  <button
                    className="_btn-bor _hover03"
                    onClick={handleTaskDelete}
                  >
                    Удалить задачу
                  </button>
                  <button
                    onClick={navigate(appRoutes.MAIN)}
                    className="_btn-bg _hover01"
                  >
                    Закрыть
                  </button>
                </div>
              </div>
            )}

            {/* <div className="btn-group">
                <button className="_btn-bg _hover01" 
                onClick={() => {
                      handleFormSubmit;
                      setIsEdit(false);
                    }}>
                  Сохранить
                </button>
                <button className="_btn-bor _hover03" 
                onClick={setIsEdit(false)}>
                  Отменить
                </button>
                </div> */}

            {/* //   <button
                //     className="_btn-bor _hover03"
                //     onClick={() => {
                //       handleFormSubmit;
                //       setIsEdit(false);
                //     }}
                //   >
                //     Сохранить задачу
                //   </button> */}
          </div>
        </div>
      </div>
    </div>
  );
}
