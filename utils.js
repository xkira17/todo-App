const TODOS_KEY = "todos";

export const saveTodosIntoLocalStorage = (todos) => {
  localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
};

export const getItemFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem(TODOS_KEY)) || [];
};

export const getDateRepresentation = (date) => {
  return Intl.DateTimeFormat("ru-Ru", {
    day: "numeric",
    month: "numeric",
    year: "numeric",
  }).format(date);
};
