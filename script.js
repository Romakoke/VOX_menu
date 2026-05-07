const categoryGroups = {
  kitchen: [
    { id: "all", name: "Барлығы" },
    { id: "cold", name: "Холодные закуски" },
    { id: "salads", name: "Салаты" },
    { id: "beer", name: "Закуски к пиву" },
    { id: "company", name: "На компанию" },
    { id: "second", name: "Вторые блюда" },
    { id: "soups", name: "Супы" },
    { id: "steaks", name: "Стейки" },
    { id: "pizza", name: "Пицца" },
    { id: "rolls", name: "Роллы" },
    { id: "shashlyk", name: "Шашлыки" },
    { id: "sauces", name: "Соусы" }
  ],

  bar: [
    { id: "all", name: "Барлығы" },
    { id: "lemonade", name: "Лимонады" },
    { id: "tea", name: "Чай" },
    { id: "water", name: "Минеральная вода" },
    { id: "cocktails", name: "Коктейли" },
    { id: "wine", name: "Вина" },
    { id: "beer_bar", name: "Пиво" },
    { id: "vodka", name: "Водка" },
    { id: "whiskey", name: "Виски" },
    { id: "rum", name: "Ром" },
    { id: "tequila", name: "Текила" },
    { id: "liqueur", name: "Ликеры" }
  ]
};

const menuItems = [
  {
    name: "Мясная нарезка",
    price: "7 000 ₸",
    category: "cold",
    image: "images/placeholder.jpg",
    ingredients: "Ет ассорти, қазы, шұжық, көкөніс."
  },
  {
    name: "Сырная нарезка",
    price: "5 000 ₸",
    category: "cold",
    image: "images/placeholder.jpg",
    ingredients: "Ірімшік ассорти, жаңғақ, бал, жүзім."
  },
  {
    name: "Салями",
    price: "4 500 ₸",
    category: "cold",
    image: "images/placeholder.jpg",
    ingredients: "Салями, көкөніс, жасыл салат."
  },
  {
    name: "Фруктовое ассорти",
    price: "8 000 ₸",
    category: "cold",
    image: "images/placeholder.jpg",
    ingredients: "Маусымдық жемістер ассорти."
  },

  {
    name: "Салат с шефа",
    price: "4 000 ₸",
    category: "salads",
    image: "images/placeholder.jpg",
    ingredients: "Фирмалық салат, ет, көкөніс, арнайы соус."
  },
  {
    name: "Греческий",
    price: "3 000 ₸",
    category: "salads",
    image: "images/placeholder.jpg",
    ingredients: "Қияр, қызанақ, сыр фета, зәйтүн, зәйтүн майы."
  },
  {
    name: "Сытный папа",
    price: "3 000 ₸",
    category: "salads",
    image: "images/placeholder.jpg",
    ingredients: "Ет, картоп, жұмыртқа, көкөніс, майонез."
  },
  {
    name: "Цезарь с курицей",
    price: "3 000 ₸",
    category: "salads",
    image: "images/placeholder.jpg",
    ingredients: "Тауық еті, салат жапырағы, сыр, сухари, цезарь соусы."
  },
  {
    name: "Оливье",
    price: "2 500 ₸",
    category: "salads",
    image: "images/placeholder.jpg",
    ingredients: "Картоп, сәбіз, жұмыртқа, қияр, майонез."
  },

  {
    name: "Сет Баварский",
    price: "7 000 ₸",
    category: "beer",
    image: "images/placeholder.jpg",
    ingredients: "Пиволық закуска ассорти, фри, соус."
  },
  {
    name: "Креветки в кляре",
    price: "4 500 ₸",
    category: "beer",
    image: "images/placeholder.jpg",
    ingredients: "Креветка, кляр, лимон, соус."
  },
  {
    name: "Кольца кальмара",
    price: "3 000 ₸",
    category: "beer",
    image: "images/placeholder.jpg",
    ingredients: "Кальмар сақиналары, панировка, соус."
  },
  {
    name: "Наггетсы",
    price: "1 500 ₸",
    category: "beer",
    image: "images/placeholder.jpg",
    ingredients: "Тауық наггетсы, фирмалық соус."
  },

  {
    name: "Сет FOX",
    price: "38 000 ₸",
    category: "company",
    image: "images/placeholder.jpg",
    ingredients: "Үлкен компанияға арналған ет және закуска ассорти."
  },
  {
    name: "Сет MEDVED",
    price: "50 000 ₸",
    category: "company",
    image: "images/placeholder.jpg",
    ingredients: "VIP ассорти, ет тағамдары, гарнир, соустар."
  },
  {
    name: "Наурыз Latay",
    price: "30 000 ₸",
    category: "company",
    image: "images/placeholder.jpg",
    ingredients: "Компанияға арналған ұлттық және ет тағамдары."
  },

  {
    name: "Телятина с овощами",
    price: "3 500 ₸",
    category: "second",
    image: "images/placeholder.jpg",
    ingredients: "Бұзау еті, көкөністер, арнайы соус."
  },
  {
    name: "Курица",
    price: "4 500 ₸",
    category: "second",
    image: "images/placeholder.jpg",
    ingredients: "Тауық еті, гарнир, соус."
  },
  {
    name: "Телятина с грибным сливочным соусом",
    price: "3 500 ₸",
    category: "second",
    image: "images/placeholder.jpg",
    ingredients: "Бұзау еті, саңырауқұлақ, кілегейлі соус."
  },
  {
    name: "Куриное филе с овощами",
    price: "3 000 ₸",
    category: "second",
    image: "images/placeholder.jpg",
    ingredients: "Тауық филесі, көкөністер, дәмдеуіштер."
  },
  {
    name: "Жареная рыба",
    price: "4 500 ₸",
    category: "second",
    image: "images/placeholder.jpg",
    ingredients: "Қуырылған балық, лимон, көкөніс."
  },

  {
    name: "Шурпа из баранины",
    price: "2 000 ₸",
    category: "soups",
    image: "images/placeholder.jpg",
    ingredients: "Қой еті, көкөніс, сорпа."
  },
  {
    name: "Шурпа из говядины",
    price: "2 500 ₸",
    category: "soups",
    image: "images/placeholder.jpg",
    ingredients: "Сиыр еті, картоп, сәбіз, сорпа."
  },
  {
    name: "Рамен с курицей",
    price: "2 000 ₸",
    category: "soups",
    image: "images/placeholder.jpg",
    ingredients: "Кеспе, тауық еті, жұмыртқа, сорпа."
  },
  {
    name: "Рамен с говядиной",
    price: "2 500 ₸",
    category: "soups",
    image: "images/placeholder.jpg",
    ingredients: "Кеспе, сиыр еті, жұмыртқа, сорпа."
  },

  {
    name: "Рибай",
    price: "7 000 ₸",
    category: "steaks",
    image: "images/placeholder.jpg",
    ingredients: "Рибай стейк, тұз, бұрыш, соус."
  },
  {
    name: "Тибон",
    price: "7 000 ₸",
    category: "steaks",
    image: "images/placeholder.jpg",
    ingredients: "T-bone стейк, гриль, соус."
  },
  {
    name: "Медальоны с овощами",
    price: "6 500 ₸",
    category: "steaks",
    image: "images/placeholder.jpg",
    ingredients: "Ет медальоны, көкөністер, соус."
  },
  {
    name: "Стейк из лосося",
    price: "7 500 ₸",
    category: "steaks",
    image: "images/placeholder.jpg",
    ingredients: "Лосось, лимон, көкөніс, соус."
  },

  {
    name: "Казахстан",
    price: "4 500 ₸",
    category: "pizza",
    image: "images/placeholder.jpg",
    ingredients: "Қазы, сыр, томат соусы, қамыр."
  },
  {
    name: "Пепперони",
    price: "3 500 ₸",
    category: "pizza",
    image: "images/placeholder.jpg",
    ingredients: "Пепперони, моцарелла, томат соусы."
  },
  {
    name: "Альфредо",
    price: "3 800 ₸",
    category: "pizza",
    image: "images/placeholder.jpg",
    ingredients: "Тауық еті, кілегейлі соус, сыр."
  },
  {
    name: "Болоньезе",
    price: "4 000 ₸",
    category: "pizza",
    image: "images/placeholder.jpg",
    ingredients: "Фарш, томат соусы, сыр."
  },

  {
    name: "Филадельфия",
    price: "3 500 ₸",
    category: "rolls",
    image: "images/placeholder.jpg",
    ingredients: "Лосось, күріш, сыр, нори."
  },
  {
    name: "Цезарь",
    price: "3 000 ₸",
    category: "rolls",
    image: "images/placeholder.jpg",
    ingredients: "Тауық еті, күріш, сыр, соус."
  },
  {
    name: "Америка темпура",
    price: "3 500 ₸",
    category: "rolls",
    image: "images/placeholder.jpg",
    ingredients: "Күріш, нори, балық, темпура."
  },
  {
    name: "Жареная темпура",
    price: "3 000 ₸",
    category: "rolls",
    image: "images/placeholder.jpg",
    ingredients: "Қуырылған ролл, күріш, нори, соус."
  },

  {
    name: "Кусковой говядина",
    price: "1 600 ₸",
    category: "shashlyk",
    image: "images/placeholder.jpg",
    ingredients: "Сиыр еті, маринад, пияз."
  },
  {
    name: "Люля кебаб",
    price: "1 500 ₸",
    category: "shashlyk",
    image: "images/placeholder.jpg",
    ingredients: "Фарш, дәмдеуіштер, пияз."
  },
  {
    name: "Печень в оболочке",
    price: "1 300 ₸",
    category: "shashlyk",
    image: "images/placeholder.jpg",
    ingredients: "Бауыр, май қабығы, дәмдеуіш."
  },
  {
    name: "Утка",
    price: "2 000 ₸",
    category: "shashlyk",
    image: "images/placeholder.jpg",
    ingredients: "Үйрек еті, маринад, пияз."
  },

  {
    name: "Чесночный соус",
    price: "500 ₸",
    category: "sauces",
    image: "images/placeholder.jpg",
    ingredients: "Сарымсақ, майонез, дәмдеуіш."
  },
  {
    name: "Сырный соус",
    price: "500 ₸",
    category: "sauces",
    image: "images/placeholder.jpg",
    ingredients: "Сыр, кілегей, дәмдеуіш."
  },

  {
    name: "Туркестанский лимонад",
    price: "2 500 ₸",
    category: "lemonade",
    image: "images/placeholder.jpg",
    ingredients: "Лимон, газды су, сироп, мұз."
  },
  {
    name: "Мохито классический",
    price: "2 500 ₸",
    category: "lemonade",
    image: "images/placeholder.jpg",
    ingredients: "Лайм, жалбыз, сироп, газды су, мұз."
  },
  {
    name: "Чай черный",
    price: "1 000 ₸",
    category: "tea",
    image: "images/placeholder.jpg",
    ingredients: "Қара шай."
  },
  {
    name: "Чай зеленый",
    price: "1 000 ₸",
    category: "tea",
    image: "images/placeholder.jpg",
    ingredients: "Көк шай."
  },
  {
    name: "Borjomi",
    price: "1 600 ₸",
    category: "water",
    image: "images/placeholder.jpg",
    ingredients: "Минералды су."
  },
  {
    name: "Coca-Cola",
    price: "1 200 ₸",
    category: "water",
    image: "images/placeholder.jpg",
    ingredients: "Салқын сусын."
  },
  {
    name: "Aperol Spritz",
    price: "3 500 ₸",
    category: "cocktails",
    image: "images/placeholder.jpg",
    ingredients: "Aperol, prosecco, soda, апельсин, мұз."
  },
  {
    name: "Mojito",
    price: "3 000 ₸",
    category: "cocktails",
    image: "images/placeholder.jpg",
    ingredients: "Ром, лайм, жалбыз, қант сиропы, soda."
  },
  {
    name: "Jacob's Creek Sparkling Moscato",
    price: "17 000 ₸",
    category: "wine",
    image: "images/placeholder.jpg",
    ingredients: "Игристое вино, 750 мл."
  },
  {
    name: "Martini Prosecco DOC",
    price: "21 000 ₸",
    category: "wine",
    image: "images/placeholder.jpg",
    ingredients: "Игристое вино, 750 мл."
  },
  {
    name: "Toso Asti",
    price: "18 000 ₸",
    category: "wine",
    image: "images/placeholder.jpg",
    ingredients: "Белое игристое вино, 750 мл."
  },
  {
    name: "Campo Viejo",
    price: "14 000 ₸",
    category: "wine",
    image: "images/placeholder.jpg",
    ingredients: "Красное вино, 750 мл."
  },
  {
    name: "Пиво разливное",
    price: "1 500 ₸",
    category: "beer_bar",
    image: "images/placeholder.jpg",
    ingredients: "Разливное пиво."
  },
  {
    name: "Corona Extra",
    price: "2 500 ₸",
    category: "beer_bar",
    image: "images/placeholder.jpg",
    ingredients: "Бөтелкедегі пиво."
  },
  {
    name: "Absolut",
    price: "1 800 ₸",
    category: "vodka",
    image: "images/placeholder.jpg",
    ingredients: "Водка, 50 мл."
  },
  {
    name: "Grey Goose",
    price: "3 500 ₸",
    category: "vodka",
    image: "images/placeholder.jpg",
    ingredients: "Водка, 50 мл."
  },
  {
    name: "Chivas Regal 12 YO",
    price: "3 900 ₸",
    category: "whiskey",
    image: "images/placeholder.jpg",
    ingredients: "Виски, 50 мл."
  },
  {
    name: "Jameson",
    price: "2 900 ₸",
    category: "whiskey",
    image: "images/placeholder.jpg",
    ingredients: "Ирландский виски, 50 мл."
  },
  {
    name: "Bacardi Carta Blanca",
    price: "2 000 ₸",
    category: "rum",
    image: "images/placeholder.jpg",
    ingredients: "Ром, 50 мл."
  },
  {
    name: "Captain Morgan",
    price: "2 200 ₸",
    category: "rum",
    image: "images/placeholder.jpg",
    ingredients: "Ром, 50 мл."
  },
  {
    name: "Olmeca Blanco",
    price: "2 000 ₸",
    category: "tequila",
    image: "images/placeholder.jpg",
    ingredients: "Текила, 50 мл."
  },
  {
    name: "Olmeca Gold",
    price: "2 200 ₸",
    category: "tequila",
    image: "images/placeholder.jpg",
    ingredients: "Текила, 50 мл."
  },
  {
    name: "Baileys",
    price: "2 300 ₸",
    category: "liqueur",
    image: "images/placeholder.jpg",
    ingredients: "Ликер, 50 мл."
  },
  {
    name: "Jagermeister",
    price: "2 400 ₸",
    category: "liqueur",
    image: "images/placeholder.jpg",
    ingredients: "Ликер, 50 мл."
  }
];

const categoriesBox = document.getElementById("categories");
const menuGrid = document.getElementById("menuGrid");

const modal = document.getElementById("modal");
const closeModal = document.getElementById("closeModal");
const modalImg = document.getElementById("modalImg");
const modalTitle = document.getElementById("modalTitle");
const modalPrice = document.getElementById("modalPrice");
const modalIngredients = document.getElementById("modalIngredients");

let activeType = "kitchen";
let activeCategory = "all";

function renderCategories() {
  const categories = categoryGroups[activeType];

  categoriesBox.innerHTML = categories.map(cat => `
    <button class="category-btn ${cat.id === activeCategory ? "active" : ""}" data-id="${cat.id}">
      ${cat.name}
    </button>
  `).join("");

  document.querySelectorAll(".category-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      activeCategory = btn.dataset.id;
      renderCategories();
      renderMenu();
    });
  });
}

function renderMenu() {
  const currentCategoryIds = categoryGroups[activeType]
    .filter(cat => cat.id !== "all")
    .map(cat => cat.id);

  const filtered = menuItems.filter(item => {
    if (activeCategory === "all") {
      return currentCategoryIds.includes(item.category);
    }

    return item.category === activeCategory;
  });

  menuGrid.innerHTML = filtered.map(item => `
    <div class="card">
      <img src="${item.image}" alt="${item.name}" onerror="this.src='images/placeholder.jpg'">
      <div class="card-body">
        <h3>${item.name}</h3>
        <div class="price">${item.price}</div>
        <button class="more-btn" onclick="openModal(${menuItems.indexOf(item)})">
          Тағам қоспасы
        </button>
      </div>
    </div>
  `).join("");
}

function openModal(index) {
  const item = menuItems[index];

  modalImg.src = item.image;
  modalImg.onerror = () => {
    modalImg.src = "images/placeholder.jpg";
  };

  modalTitle.textContent = item.name;
  modalPrice.textContent = item.price;
  modalIngredients.textContent = item.ingredients;

  modal.classList.add("active");
}

closeModal.addEventListener("click", () => {
  modal.classList.remove("active");
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("active");
  }
});

document.querySelectorAll(".menu-tab").forEach(tab => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".menu-tab").forEach(t => t.classList.remove("active"));
    tab.classList.add("active");

    activeType = tab.dataset.type;
    activeCategory = "all";

    renderCategories();
    renderMenu();
  });
});

renderCategories();
renderMenu();
