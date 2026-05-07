const placeholder = "images/vox logo.png";

const categoryGroups = {
  kitchen: [
    { id: "all", name: "Барлығы" },
    { id: "cold", name: "Холодные закуски" },
    { id: "salads", name: "Салаты" },
    { id: "beer", name: "Закуски к пиву" },
    { id: "sauces", name: "Соусы" },
    { id: "pasta", name: "Паста" },
    { id: "second", name: "Вторые блюда" },
    { id: "soups", name: "Супы" },
    { id: "steaks", name: "Стейки" },
    { id: "garnish", name: "Гарниры" },
    { id: "pizza", name: "Пицца" },
    { id: "rolls", name: "Роллы" },
    { id: "shashlyk", name: "Шашлыки" },
    { id: "company", name: "Сеты на компанию" }
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
  { name: "Мясная нарезка", price: "7 000 ₸", category: "cold", image: "images/meat_mix.png", ingredients: "Ет ассорти." },
  { name: "Нарезка из овощей", price: "5 000 ₸", category: "cold", image: placeholder, ingredients: "Көкөніс ассорти." },
  { name: "Сельдь по-русски", price: "5 000 ₸", category: "cold", image: placeholder, ingredients: "Сельдь, картоп, пияз." },
  { name: "Соленья", price: "4 500 ₸", category: "cold", image: placeholder, ingredients: "Тұздалған көкөністер." },
  { name: "Фруктовое ассорти", price: "8 000 ₸", category: "cold", image: "images/fruit_assorti.png", ingredients: "Жеміс ассорти." },

  { name: "Салат от шефа", price: "4 000 ₸", category: "salads", image: placeholder, ingredients: "Фирмалық салат." },
  { name: "Греческий", price: "2 000 ₸", category: "salads", image: "images/salad_greek.jpg", ingredients: "Қияр, қызанақ, сыр фета, зәйтүн." },
  { name: "Сытный папа", price: "3 000 ₸", category: "salads", image: "images/salad_sytyi_papa.png", ingredients: "Ет, картоп, жұмыртқа, көкөніс." },
  { name: "Азиатский с баклажанами", price: "3 000 ₸", category: "salads", image: "images/salad_asian_eggplant.jpg", ingredients: "Баклажан, көкөніс, азиялық соус." },
  { name: "Цезарь с курицей", price: "3 000 ₸", category: "salads", image: "images/salad_caesar_chicken.jpg", ingredients: "Тауық еті, салат, сыр, сухари, соус." },
  { name: "Оливье", price: "2 500 ₸", category: "salads", image: "images/salad_olivie.jpg", ingredients: "Картоп, сәбіз, жұмыртқа, қияр, майонез." },
  { name: "Рукола с креветками", price: "4 000 ₸", category: "salads", image: "images/salad_rucola_shrimp.jpg", ingredients: "Рукола, креветка, көкөніс." },
  { name: "Свежий по-домашнему", price: "2 000 ₸", category: "salads", image: placeholder, ingredients: "Қияр, қызанақ, көк шөп." },
  { name: "Фруктовый", price: "4 000 ₸", category: "salads", image: "images/fruit_assorti.png", ingredients: "Жеміс салаты." },

  { name: "Сет «Похрустим»", price: "6 000 ₸", category: "beer", image: "images/snack_samsa_baursak_pelmeni.png", ingredients: "Пиволық закуска ассорти." },
  { name: "Сет «Добрый»", price: "7 000 ₸", category: "beer", image: placeholder, ingredients: "Пиволық закуска ассорти." },
  { name: "Креветки к пиву", price: "5 200 ₸", category: "beer", image: placeholder, ingredients: "Креветки, лимон, соус." },
  { name: "Колбаски", price: "3 000 ₸", category: "beer", image: placeholder, ingredients: "Гриль колбаски." },
  { name: "Наггетсы", price: "1 500 ₸", category: "beer", image: "images/nuggets.jpg", ingredients: "Тауық наггетсы, соус." },

  { name: "Чесночный", price: "500 ₸", category: "sauces", image: "images/sauce_garlic.jpg", ingredients: "Сарымсақ соусы." },
  { name: "Сырный", price: "500 ₸", category: "sauces", image: "images/sauce_cheese.jpg", ingredients: "Сыр соусы." },

  { name: "Паста Альфредо", price: "3 500 ₸", category: "pasta", image: "images/pasta_alfredo.png", ingredients: "Паста, тауық еті, кілегейлі соус." },
  { name: "Паста Болоньезе", price: "3 800 ₸", category: "pasta", image: "images/pizza_bolognese.jpg", ingredients: "Паста, фарш, томат соусы." },

  { name: "Телятина с овощами", price: "3 500 ₸", category: "second", image: placeholder, ingredients: "Бұзау еті, көкөністер." },
  { name: "Куырдак", price: "4 500 ₸", category: "second", image: "images/kuyrdak_beef.jpg", ingredients: "Қуырдақ." },
  { name: "Телятина с грибами в сливочном соусе", price: "3 500 ₸", category: "second", image: placeholder, ingredients: "Бұзау еті, саңырауқұлақ, кілегейлі соус." },
  { name: "Куырдак из баранины", price: "4 000 ₸", category: "second", image: "images/kuyrdak.png", ingredients: "Қой етінен қуырдақ." },
  { name: "Куриное филе с овощами", price: "3 000 ₸", category: "second", image: "images/chicken_assorti.png", ingredients: "Тауық филесі, көкөністер." },
  { name: "Курица с грибами в сливочном соусе", price: "3 500 ₸", category: "second", image: "images/chicken_mushroom_cream.png", ingredients: "Тауық еті, саңырауқұлақ, кілегейлі соус." },
  { name: "Жареная рыба", price: "4 500 ₸", category: "second", image: placeholder, ingredients: "Қуырылған балық." },

  { name: "Шурпа из баранины", price: "2 000 ₸", category: "soups", image: placeholder, ingredients: "Қой еті, көкөніс, сорпа." },
  { name: "Шурпа из говядины", price: "2 500 ₸", category: "soups", image: placeholder, ingredients: "Сиыр еті, көкөніс, сорпа." },
  { name: "Цомян", price: "3 000 ₸", category: "soups", image: placeholder, ingredients: "Цомян." },
  { name: "Рамен с курицей", price: "2 000 ₸", category: "soups", image: "images/ramen_chicken.jpg", ingredients: "Рамен, тауық еті, жұмыртқа." },
  { name: "Рамен с говядиной", price: "2 500 ₸", category: "soups", image: "images/ramen_beef.jpg", ingredients: "Рамен, сиыр еті, жұмыртқа." },

  { name: "Рибай", price: "7 000 ₸", category: "steaks", image: "images/steak_ribeye.png", ingredients: "Рибай стейк." },
  { name: "Тибон", price: "7 000 ₸", category: "steaks", image: "images/steak_tbone.jpg", ingredients: "T-bone стейк." },
  { name: "Медальоны с овощами", price: "6 500 ₸", category: "steaks", image: placeholder, ingredients: "Ет медальоны, көкөністер." },
  { name: "Стейк из лосося", price: "7 500 ₸", category: "steaks", image: placeholder, ingredients: "Лосось стейк." },

  { name: "Рис", price: "700 ₸", category: "garnish", image: placeholder, ingredients: "Күріш." },
  { name: "Дольки", price: "800 ₸", category: "garnish", image: placeholder, ingredients: "Картоп дольки." },
  { name: "Фри", price: "1 000 ₸", category: "garnish", image: placeholder, ingredients: "Картоп фри." },
  { name: "Овощи на гриле", price: "1 500 ₸", category: "garnish", image: placeholder, ingredients: "Гриль көкөністер." },

  { name: "Казахстан", price: "4 500 ₸", category: "pizza", image: "images/pizza_kazakhstan.jpg", ingredients: "Қазы, сыр, томат соусы." },
  { name: "Пепперони", price: "3 500 ₸", category: "pizza", image: placeholder, ingredients: "Пепперони, моцарелла, томат соусы." },
  { name: "Альфредо", price: "3 800 ₸", category: "pizza", image: "images/pizza_alfredo.jpg", ingredients: "Тауық еті, сыр, кілегейлі соус." },
  { name: "Болоньезе", price: "4 000 ₸", category: "pizza", image: "images/pizza_bolognese.jpg", ingredients: "Фарш, томат соусы, сыр." },
  { name: "Маргарита", price: "3 500 ₸", category: "pizza", image: "images/pizza_margherita.jpg", ingredients: "Томат, моцарелла, соус." },

  { name: "Филадельфия", price: "3 800 ₸", category: "rolls", image: "images/roll_philadelphia.jpg", ingredients: "Лосось, күріш, сыр, нори." },
  { name: "Цезарь", price: "3 300 ₸", category: "rolls", image: "images/roll_caesar_fried.jpg", ingredients: "Тауық еті, күріш, сыр, соус." },
  { name: "Америка темпура", price: "3 500 ₸", category: "rolls", image: "images/roll_america_tempura.jpg", ingredients: "Темпура ролл." },
  { name: "Унаги темпура", price: "3 000 ₸", category: "rolls", image: "images/roll_unagi_tempura.jpg", ingredients: "Унаги темпура ролл." },

  { name: "Кусковой говядина", price: "1 150 ₸", category: "shashlyk", image: placeholder, ingredients: "Сиыр етінен шашлык." },
  { name: "Люля кебаб", price: "1 250 ₸", category: "shashlyk", image: placeholder, ingredients: "Люля кебаб." },
  { name: "Окорочка", price: "1 050 ₸", category: "shashlyk", image: placeholder, ingredients: "Тауық окорочка." },
  { name: "Печень в оболочке", price: "1 300 ₸", category: "shashlyk", image: placeholder, ingredients: "Бауыр шашлык." },
  { name: "Утка", price: "2 000 ₸", category: "shashlyk", image: placeholder, ingredients: "Үйрек еті." },

  { name: "Сет FOX на 6–8 персон", price: "38 000 ₸", category: "company", image: "images/set_fox.png", ingredients: "Рибай 1, тибон 1, куырдак 2, цыпленок табака 2, колбаски 4, микс салата, дольки, овощи." },
  { name: "Сет SHELBY на 12–15 персон", price: "50 000 ₸", category: "company", image: placeholder, ingredients: "Рибай 2, тибон 2, куырдак 2, цыпленок табака 2, сибас, дорадо, дольки 2 порции, микс салата, овощи." },
  { name: "Куырдак", price: "30 000 ₸", category: "company", image: "images/kuyrdak.png", ingredients: "Компанияға арналған қуырдақ." },
  { name: "Бешбармак", price: "25 000 ₸", category: "company", image: "images/beshbarmak.png", ingredients: "Компанияға арналған бешбармак." },

  { name: "Туркестанский лимонад", price: "2 500 ₸", category: "lemonade", image: "images/lemonade_kiwi_lime.jpeg", ingredients: "Лимон, газды су, сироп, мұз." },
  { name: "Мохито классический", price: "2 500 ₸", category: "lemonade", image: placeholder, ingredients: "Лайм, жалбыз, сироп, газды су, мұз." },
  { name: "Чай черный", price: "1 000 ₸", category: "tea", image: placeholder, ingredients: "Қара шай." },
  { name: "Чай зеленый", price: "1 000 ₸", category: "tea", image: placeholder, ingredients: "Көк шай." },
  { name: "Borjomi", price: "1 600 ₸", category: "water", image: placeholder, ingredients: "Минералды су." },
  { name: "Coca-Cola", price: "1 200 ₸", category: "water", image: placeholder, ingredients: "Салқын сусын." },
  { name: "Aperol Spritz", price: "3 500 ₸", category: "cocktails", image: placeholder, ingredients: "Aperol, prosecco, soda, апельсин, мұз." },
  { name: "Mojito", price: "3 000 ₸", category: "cocktails", image: placeholder, ingredients: "Ром, лайм, жалбыз, қант сиропы, soda." },
  { name: "Jacob's Creek Sparkling Moscato", price: "17 000 ₸", category: "wine", image: placeholder, ingredients: "Игристое вино, 750 мл." },
  { name: "Martini Prosecco DOC", price: "21 000 ₸", category: "wine", image: placeholder, ingredients: "Игристое вино, 750 мл." },
  { name: "Toso Asti", price: "18 000 ₸", category: "wine", image: placeholder, ingredients: "Белое игристое вино, 750 мл." },
  { name: "Campo Viejo", price: "14 000 ₸", category: "wine", image: placeholder, ingredients: "Красное вино, 750 мл." },
  { name: "Пиво разливное", price: "1 500 ₸", category: "beer_bar", image: placeholder, ingredients: "Разливное пиво." },
  { name: "Corona Extra", price: "2 500 ₸", category: "beer_bar", image: placeholder, ingredients: "Бөтелкедегі пиво." },
  { name: "Absolut", price: "1 800 ₸", category: "vodka", image: placeholder, ingredients: "Водка, 50 мл." },
  { name: "Grey Goose", price: "3 500 ₸", category: "vodka", image: placeholder, ingredients: "Водка, 50 мл." },
  { name: "Chivas Regal 12 YO", price: "3 900 ₸", category: "whiskey", image: placeholder, ingredients: "Виски, 50 мл." },
  { name: "Jameson", price: "2 900 ₸", category: "whiskey", image: placeholder, ingredients: "Ирландский виски, 50 мл." },
  { name: "Bacardi Carta Blanca", price: "2 000 ₸", category: "rum", image: placeholder, ingredients: "Ром, 50 мл." },
  { name: "Captain Morgan", price: "2 200 ₸", category: "rum", image: placeholder, ingredients: "Ром, 50 мл." },
  { name: "Olmeca Blanco", price: "2 000 ₸", category: "tequila", image: placeholder, ingredients: "Текила, 50 мл." },
  { name: "Olmeca Gold", price: "2 200 ₸", category: "tequila", image: placeholder, ingredients: "Текила, 50 мл." },
  { name: "Baileys", price: "2 300 ₸", category: "liqueur", image: placeholder, ingredients: "Ликер, 50 мл." },
  { name: "Jagermeister", price: "2 400 ₸", category: "liqueur", image: placeholder, ingredients: "Ликер, 50 мл." }
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
      <img src="${item.image}" alt="${item.name}" onerror="this.src='${placeholder}'">
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
    modalImg.src = placeholder;
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
