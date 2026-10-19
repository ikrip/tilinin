const greetingForm = document.querySelector("#greeting-form");
const visitorName = document.querySelector("#visitor-name");
const greetingOutput = document.querySelector("#greeting-output");

greetingForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const name = visitorName.value.trim();
  if (name === "") {
    greetingOutput.textContent = "Введите имя.";
    visitorName.focus();
    return;
  }
  greetingOutput.textContent = "Здравствуйте, " + name + "!";
});

const topics = [
  {
    title: "HTML",
    description: "Создаём структуру страницы.",
    category: "layout"
  },
  {
    title: "CSS",
    description: "Настраиваем оформление.",
    category: "layout"
  },
  {
    title: "JavaScript",
    description: "Добавляем действия на странице.",
    category: "logic"
  },
  {
    title: "События",
    description: "Реагируем на клики и выбор пользователя.",
    category: "logic"
  }
];

const topicList = document.querySelector("#topic-list");
const topicCount = document.querySelector("#topic-count");

function addCard(topic) {
  const card = document.createElement("article");
  card.className = "card";
  const title = document.createElement("h3");
  title.textContent = topic.title;
  const description = document.createElement("p");
  description.textContent = topic.description;
  card.append(title, description);
  topicList.append(card);
}

const categoryFilter = document.querySelector("#category-filter");

function renderTopics() {
  topicList.replaceChildren();
  const selectedCategory = categoryFilter.value;
  let shown = 0;
  for (const topic of topics) {
    if (selectedCategory === "all" ||
        topic.category === selectedCategory) {
      addCard(topic);
      shown = shown + 1;
    }
  }
  topicCount.textContent = "Тем на странице: " + shown;
  if (shown === 0) {
    topicCount.textContent = "Тем пока нет.";
  }
}

categoryFilter.addEventListener("change", renderTopics);
renderTopics();
