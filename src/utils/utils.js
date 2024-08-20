export const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

export const formatDate = (date) => {
  const [year, month, day] = date.split("-");
  return `${day.padStart(2, "0")}/${month.padStart(2, "0")}`;
};

export const sortByDate = (items) => {
  return items.sort((a, b) => new Date(a.date) - new Date(b.date));
};

export const loadTasksFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem("tasks") || "[]");
};

export const saveTasksToLocalStorage = (tasks) => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};
