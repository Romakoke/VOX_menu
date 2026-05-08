const placeholder = "images/placeholder.jpg";

let currentLang = "kz";
let activeType = "kitchen";
let activeCategory = "all";

const text = {
  kz: {
    service: "Қызмет көрсету +15%",
    subtitle: "Категорияны таңдаңыз",
    kitchen: "Кухня",
    bar: "Бар",
    more: "Қоспасы",
    ingredients: "Қоспасы:"
  },
  ru: {
    service: "Обслуживание +15%",
    subtitle: "Выберите категорию",
    kitchen: "Кухня",
    bar: "Бар",
    more: "Состав",
    ingredients: "Состав:"
  },
  en: {
    service: "Service +15%",
    subtitle: "Choose a category",
    kitchen: "Kitchen",
    bar: "Bar",
    more: "Ingredients",
    ingredients: "Ingredients:"
  }
};

const categoryGroups = {
  kitchen: [
    { id: "all", name: { kz: "Барлығы", ru: "Все", en: "All" } },
    { id: "cold", name: { kz: "Салқын тағамдар", ru: "Холодные закуски", en: "Cold Starters" } },
    { id: "salads", name: { kz: "Салаттар", ru: "Салаты", en: "Salads" } },
    { id: "beer", name: { kz: "Сыраға тіскебасар", ru: "Закуски к пиву", en: "Beer Snacks" } },
    { id: "sauces", name: { kz: "Соустар", ru: "Соусы", en: "Sauces" } },
    { id: "pasta", name: { kz: "Паста", ru: "Паста", en: "Pasta" } },
    { id: "second", name: { kz: "Екінші тағамдар", ru: "Вторые блюда", en: "Main Dishes" } },
    { id: "soups", name: { kz: "Сорпалар", ru: "Супы", en: "Soups" } },
    { id: "steaks", name: { kz: "Стейктер", ru: "Стейки", en: "Steaks" } },
    { id: "garnish", name: { kz: "Гарнирлер", ru: "Гарниры", en: "Side Dishes" } },
    { id: "pizza", name: { kz: "Пицца", ru: "Пицца", en: "Pizza" } },
    { id: "rolls", name: { kz: "Роллдар", ru: "Роллы", en: "Rolls" } },
    { id: "shashlyk", name: { kz: "Шашлыктар", ru: "Шашлыки", en: "Shashlik" } },
    { id: "company", name: { kz: "Компанияға сеттер", ru: "Сеты на компанию", en: "Company Sets" } }
  ],

  bar: [
    { id: "all", name: { kz: "Барлығы", ru: "Все", en: "All" } },
    { id: "lemonade", name: { kz: "Лимонадтар", ru: "Лимонады", en: "Lemonades" } },
    { id: "soft", name: { kz: "Салқын сусындар", ru: "Прохладительные напитки", en: "Soft Drinks" } },
    { id: "water", name: { kz: "Минералды су", ru: "Минеральная вода", en: "Mineral Water" } },
    { id: "tea", name: { kz: "Шай", ru: "Чай", en: "Tea" } },
    { id: "mocktails", name: { kz: "Алкогольсіз коктейльдер", ru: "Безалкогольные коктейли", en: "Mocktails" } },
    { id: "cocktails", name: { kz: "Алкогольді коктейльдер", ru: "Алкогольные коктейли", en: "Alcoholic Cocktails" } },
    { id: "long_drinks", name: { kz: "Лонг дринктер", ru: "Алкогольные лонг дринк", en: "Long Drinks" } },
    { id: "shots", name: { kz: "Шоттар", ru: "Алкогольные шоты", en: "Shots" } },
    { id: "vermouth", name: { kz: "Вермуттар", ru: "Вермуты и аперитивы", en: "Vermouths & Aperitifs" } },
    { id: "armenian_cognac", name: { kz: "Армян коньягы", ru: "Армянский коньяк", en: "Armenian Cognac" } },
    { id: "french_cognac", name: { kz: "Француз коньягы", ru: "Французский коньяк", en: "French Cognac" } },
    { id: "vodka", name: { kz: "Импорттық водка", ru: "Водка импортная", en: "Imported Vodka" } },
    { id: "liqueur", name: { kz: "Ликерлер", ru: "Ликеры", en: "Liqueurs" } },
    { id: "whiskey", name: { kz: "Виски", ru: "Виски", en: "Whiskey" } },
    { id: "infusion", name: { kz: "Настойкалар", ru: "Настойки", en: "Infusions" } },
    { id: "tequila", name: { kz: "Текила", ru: "Текила", en: "Tequila" } },
    { id: "gin", name: { kz: "Джин", ru: "Джин", en: "Gin" } },
    { id: "rum", name: { kz: "Ром", ru: "Ром", en: "Rum" } }
  ]
};

function makeItem({ ru, kz, en, price, category, image = placeholder, ingRu = "", ingKz = "", ingEn = "" }) {
  return {
    name: {
      kz: kz || ru,
      ru: ru,
      en: en || ru
    },
    price,
    category,
    image,
    ingredients: {
      kz: ingKz || ingRu || "Құрамы кейін қосылады.",
      ru: ingRu || "Состав будет добавлен позже.",
      en: ingEn || ingRu || "Ingredients will be added later."
    }
  };
}

const menuItems = [
  // ===== КУХНЯ: ХОЛОДНЫЕ ЗАКУСКИ =====
  makeItem({
    ru: "Мясная нарезка",
    kz: "Мясная нарезка",
    en: "Meat Platter",
    price: "7 000 ₸",
    category: "cold",
    image: placeholder,
    ingKz: "Ет ассорти, қазы, шұжық, көкөніс.",
    ingRu: "Мясное ассорти, казы, колбаса, овощи.",
    ingEn: "Assorted meat, kazy, sausage, vegetables."
  }),
  makeItem({
    ru: "Нарезка из овощей",
    kz: "Көкөніс нарезкасы",
    en: "Vegetable Platter",
    price: "5 000 ₸",
    category: "cold",
    image: placeholder,
    ingKz: "Көкөніс ассорти.",
    ingRu: "Ассорти из свежих овощей.",
    ingEn: "Assorted fresh vegetables."
  }),
  makeItem({
    ru: "Сельдь по-русски",
    en: "Russian-Style Herring",
    price: "5 000 ₸",
    category: "cold",
    image: placeholder,
    ingKz: "Сельдь, картоп, пияз.",
    ingRu: "Сельдь, картофель, лук.",
    ingEn: "Herring, potatoes, onion."
  }),
  makeItem({
    ru: "Соленья",
    kz: "Тұздалған көкөністер",
    en: "Pickles",
    price: "4 500 ₸",
    category: "cold",
    image: placeholder,
    ingKz: "Тұздалған көкөністер.",
    ingRu: "Ассорти из солений.",
    ingEn: "Assorted pickled vegetables."
  }),
  makeItem({
    ru: "Фруктовое ассорти",
    kz: "Жеміс ассорти",
    en: "Fruit Platter",
    price: "8 000 ₸",
    category: "cold",
    image: "images/fruit_assorti.png",
    ingKz: "Маусымдық жемістер.",
    ingRu: "Сезонные фрукты.",
    ingEn: "Seasonal fruits."
  }),

  // ===== САЛАТЫ =====
  makeItem({
    ru: "Салат от шефа",
    kz: "Шеф салаты",
    en: "Chef Salad",
    price: "4 000 ₸",
    category: "salads",
    image: placeholder,
    ingKz: "Фирмалық салат.",
    ingRu: "Фирменный салат.",
    ingEn: "Signature salad."
  }),
  makeItem({
    ru: "Греческий",
    kz: "Грек салаты",
    en: "Greek Salad",
    price: "2 000 ₸",
    category: "salads",
    image: "images/salad_greek.jpg",
    ingKz: "Қияр, қызанақ, фета, зәйтүн.",
    ingRu: "Огурцы, помидоры, фета, оливки.",
    ingEn: "Cucumber, tomatoes, feta, olives."
  }),
  makeItem({
    ru: "Сытный папа",
    en: "Hearty Papa",
    price: "3 000 ₸",
    category: "salads",
    image: "images/salad_sytyi_papa.png",
    ingKz: "Ет, картоп, жұмыртқа, көкөніс.",
    ingRu: "Мясо, картофель, яйцо, овощи.",
    ingEn: "Meat, potatoes, egg, vegetables."
  }),
  makeItem({
    ru: "Азиатский с баклажанами",
    kz: "Баклажанмен азиялық салат",
    en: "Asian Eggplant Salad",
    price: "3 000 ₸",
    category: "salads",
    image: "images/salad_asian_eggplant.jpg",
    ingKz: "Баклажан, көкөніс, азиялық соус.",
    ingRu: "Баклажан, овощи, азиатский соус.",
    ingEn: "Eggplant, vegetables, Asian sauce."
  }),
  makeItem({
    ru: "Цезарь с курицей",
    kz: "Тауықпен Цезарь",
    en: "Chicken Caesar",
    price: "3 000 ₸",
    category: "salads",
    image: "images/salad_caesar_chicken.jpg",
    ingKz: "Тауық, салат, сыр, сухари, соус.",
    ingRu: "Курица, салат, сыр, сухари, соус.",
    ingEn: "Chicken, lettuce, cheese, croutons, sauce."
  }),
  makeItem({
    ru: "Оливье",
    en: "Olivier Salad",
    price: "2 500 ₸",
    category: "salads",
    image: "images/salad_olivie.jpg",
    ingKz: "Картоп, сәбіз, жұмыртқа, қияр, майонез.",
    ingRu: "Картофель, морковь, яйцо, огурец, майонез.",
    ingEn: "Potato, carrot, egg, cucumber, mayonnaise."
  }),
  makeItem({
    ru: "Рукола с креветками",
    kz: "Креветкамен рукола",
    en: "Arugula with Shrimp",
    price: "4 000 ₸",
    category: "salads",
    image: "images/salad_rucola_shrimp.jpg",
    ingKz: "Рукола, креветка, көкөніс, соус.",
    ingRu: "Рукола, креветки, овощи, соус.",
    ingEn: "Arugula, shrimp, vegetables, sauce."
  }),
  makeItem({
    ru: "Свежий по-домашнему",
    kz: "Үйше жаңа салат",
    en: "Fresh Homemade Salad",
    price: "2 000 ₸",
    category: "salads",
    image: placeholder,
    ingKz: "Қияр, қызанақ, көк шөп.",
    ingRu: "Огурцы, помидоры, зелень.",
    ingEn: "Cucumber, tomatoes, greens."
  }),
  makeItem({
    ru: "Фруктовый",
    kz: "Жеміс салаты",
    en: "Fruit Salad",
    price: "4 000 ₸",
    category: "salads",
    image: "images/fruit_assorti.png",
    ingKz: "Жеміс ассорти.",
    ingRu: "Фруктовое ассорти.",
    ingEn: "Assorted fruits."
  }),

  // ===== ЗАКУСКИ К ПИВУ =====
  makeItem({
    ru: "Сет «Похрустим»",
    en: "Crunch Set",
    price: "6 000 ₸",
    category: "beer",
    image: "images/snack_samsa_baursak_pelmeni.png",
    ingKz: "Пиволық закуска ассорти.",
    ingRu: "Ассорти закусок к пиву.",
    ingEn: "Assorted beer snacks."
  }),
  makeItem({
    ru: "Сет «Добрый»",
    en: "Dobry Set",
    price: "7 000 ₸",
    category: "beer",
    image: placeholder,
    ingKz: "Пиволық закуска ассорти.",
    ingRu: "Ассорти закусок к пиву.",
    ingEn: "Assorted beer snacks."
  }),
  makeItem({
    ru: "Креветки к пиву",
    kz: "Сыраға креветка",
    en: "Shrimp for Beer",
    price: "5 200 ₸",
    category: "beer",
    image: placeholder,
    ingKz: "Креветка, лимон, соус.",
    ingRu: "Креветки, лимон, соус.",
    ingEn: "Shrimp, lemon, sauce."
  }),
  makeItem({
    ru: "Колбаски",
    en: "Sausages",
    price: "3 000 ₸",
    category: "beer",
    image: placeholder,
    ingKz: "Гриль колбаски.",
    ingRu: "Колбаски гриль.",
    ingEn: "Grilled sausages."
  }),
  makeItem({
    ru: "Наггетсы",
    en: "Nuggets",
    price: "1 500 ₸",
    category: "beer",
    image: "images/nuggets.jpg",
    ingKz: "Тауық наггетсы, соус.",
    ingRu: "Куриные наггетсы, соус.",
    ingEn: "Chicken nuggets, sauce."
  }),

  // ===== СОУСЫ =====
  makeItem({
    ru: "Чесночный",
    kz: "Сарымсақ соусы",
    en: "Garlic Sauce",
    price: "500 ₸",
    category: "sauces",
    image: "images/sauce_garlic.jpg",
    ingKz: "Сарымсақ соусы.",
    ingRu: "Чесночный соус.",
    ingEn: "Garlic sauce."
  }),
  makeItem({
    ru: "Сырный",
    kz: "Сыр соусы",
    en: "Cheese Sauce",
    price: "500 ₸",
    category: "sauces",
    image: "images/sauce_cheese.jpg",
    ingKz: "Сыр соусы.",
    ingRu: "Сырный соус.",
    ingEn: "Cheese sauce."
  }),

  // ===== ПАСТА =====
  makeItem({
    ru: "Паста Альфредо",
    en: "Alfredo Pasta",
    price: "3 500 ₸",
    category: "pasta",
    image: "images/pasta_alfredo.png",
    ingKz: "Паста, тауық еті, кілегейлі соус.",
    ingRu: "Паста, курица, сливочный соус.",
    ingEn: "Pasta, chicken, creamy sauce."
  }),
  makeItem({
    ru: "Паста Болоньезе",
    en: "Bolognese Pasta",
    price: "3 800 ₸",
    category: "pasta",
    image: "images/Bolognese Pasta.png",
    ingKz: "Паста, фарш, томат соусы.",
    ingRu: "Паста, фарш, томатный соус.",
    ingEn: "Pasta, minced meat, tomato sauce."
  }),

  // ===== ВТОРЫЕ БЛЮДА =====
  makeItem({
    ru: "Телятина с овощами",
    kz: "Көкөніспен телятина",
    en: "Veal with Vegetables",
    price: "3 500 ₸",
    category: "second",
    image: "images/telyatina-s-ovoshami.png",
    ingKz: "Бұзау еті, көкөністер.",
    ingRu: "Телятина, овощи.",
    ingEn: "Veal, vegetables."
  }),
  makeItem({
    ru: "Куырдак",
    kz: "Қуырдақ",
    en: "Kuyrdak",
    price: "4 500 ₸",
    category: "second",
    image: "images/kuyrdak_gaviadina.png",
    ingKz: "Сиыр етінен қуырдақ.",
    ingRu: "Куырдак из говядины.",
    ingEn: "Beef kuyrdak."
  }),
  makeItem({
    ru: "Телятина с грибами в сливочном соусе",
    kz: "Саңырауқұлақпен телятина",
    en: "Veal with Mushrooms",
    price: "3 500 ₸",
    category: "second",
    image: "images/telyatina-s-gribami-v-slivochnom-souse.png",
    ingKz: "Бұзау еті, саңырауқұлақ, кілегейлі соус.",
    ingRu: "Телятина, грибы, сливочный соус.",
    ingEn: "Veal, mushrooms, creamy sauce."
  }),
  makeItem({
    ru: "Куырдак из баранины",
    kz: "Қой етінен қуырдақ",
    en: "Lamb Kuyrdak",
    price: "4 000 ₸",
    category: "second",
    image: "images/kuyrdak_baranina.png",
    ingKz: "Қой етінен қуырдақ.",
    ingRu: "Куырдак из баранины.",
    ingEn: "Lamb kuyrdak."
  }),
  makeItem({
    ru: "Куриное филе с овощами",
    kz: "Көкөніспен тауық филесі",
    en: "Chicken Fillet with Vegetables",
    price: "3 000 ₸",
    category: "second",
    image: "images/kurinoe-file-s-ovoshami.png",
    ingKz: "Тауық филесі, көкөністер.",
    ingRu: "Куриное филе, овощи.",
    ingEn: "Chicken fillet, vegetables."
  }),
  makeItem({
    ru: "Курица с грибами в сливочном соусе",
    kz: "Саңырауқұлақпен тауық",
    en: "Chicken with Mushrooms",
    price: "3 500 ₸",
    category: "second",
    image: "images/chicken_mushroom_cream.png",
    ingKz: "Тауық еті, саңырауқұлақ, кілегейлі соус.",
    ingRu: "Курица, грибы, сливочный соус.",
    ingEn: "Chicken, mushrooms, creamy sauce."
  }),
  makeItem({
    ru: "Жареная рыба",
    kz: "Қуырылған балық",
    en: "Fried Fish",
    price: "4 500 ₸",
    category: "second",
    image: "images/zharenaya-ryba.png",
    ingKz: "Қуырылған балық.",
    ingRu: "Жареная рыба.",
    ingEn: "Fried fish."
  }),

  // ===== СУПЫ =====
  makeItem({
    ru: "Шурпа из баранины",
    kz: "Қой етінен шурпа",
    en: "Lamb Shurpa",
    price: "2 000 ₸",
    category: "soups",
    image: "images/shurpa-iz-baraniny.png",
    ingKz: "Қой еті, көкөніс, сорпа.",
    ingRu: "Баранина, овощи, бульон.",
    ingEn: "Lamb, vegetables, broth."
  }),
  makeItem({
    ru: "Шурпа из говядины",
    kz: "Сиыр етінен шурпа",
    en: "Beef Shurpa",
    price: "2 500 ₸",
    category: "soups",
    image: "images/shurpa-iz-govyadiny.png",
    ingKz: "Сиыр еті, көкөніс, сорпа.",
    ingRu: "Говядина, овощи, бульон.",
    ingEn: "Beef, vegetables, broth."
  }),
  makeItem({
    ru: "Цомян",
    en: "Tsoman",
    price: "3 000 ₸",
    category: "soups",
    image: "images/tsomyan.png",
    ingKz: "Цомян.",
    ingRu: "Цомян.",
    ingEn: "Tsoman."
  }),
  makeItem({
    ru: "Рамен с курицей",
    kz: "Тауықпен рамен",
    en: "Chicken Ramen",
    price: "2 000 ₸",
    category: "soups",
    image: "images/ramen_chicken.jpg",
    ingKz: "Рамен, тауық еті, жұмыртқа.",
    ingRu: "Рамен, курица, яйцо.",
    ingEn: "Ramen, chicken, egg."
  }),
  makeItem({
    ru: "Рамен с говядиной",
    kz: "Сиыр етімен рамен",
    en: "Beef Ramen",
    price: "2 500 ₸",
    category: "soups",
    image: "images/ramen_beef.jpg",
    ingKz: "Рамен, сиыр еті, жұмыртқа.",
    ingRu: "Рамен, говядина, яйцо.",
    ingEn: "Ramen, beef, egg."
  }),

  // ===== СТЕЙКИ =====
  makeItem({
    ru: "Рибай",
    en: "Ribeye",
    price: "7 000 ₸",
    category: "steaks",
    image: "images/steak_ribeye.png",
    ingKz: "Рибай стейк.",
    ingRu: "Стейк рибай.",
    ingEn: "Ribeye steak."
  }),
  makeItem({
    ru: "Тибон",
    en: "T-Bone",
    price: "7 000 ₸",
    category: "steaks",
    image: "images/steak_tbone.jpg",
    ingKz: "T-bone стейк.",
    ingRu: "Стейк T-bone.",
    ingEn: "T-bone steak."
  }),
  makeItem({
    ru: "Медальоны с овощами",
    kz: "Көкөніспен медальондар",
    en: "Medallions with Vegetables",
    price: "6 500 ₸",
    category: "steaks",
    image: "images/medalony-s-ovoshami.png",
    ingKz: "Ет медальоны, көкөністер.",
    ingRu: "Мясные медальоны, овощи.",
    ingEn: "Meat medallions, vegetables."
  }),
  makeItem({
    ru: "Стейк из лосося",
    kz: "Лосось стейкі",
    en: "Salmon Steak",
    price: "7 500 ₸",
    category: "steaks",
    image: "images/steyk-iz-lososya.png",
    ingKz: "Лосось стейк.",
    ingRu: "Стейк из лосося.",
    ingEn: "Salmon steak."
  }),

  // ===== ГАРНИРЫ =====
  makeItem({
    ru: "Рис",
    kz: "Күріш",
    en: "Rice",
    price: "700 ₸",
    category: "garnish",
    image: "images/ris.png",
    ingKz: "Күріш.",
    ingRu: "Рис.",
    ingEn: "Rice."
  }),
  makeItem({
    ru: "Дольки",
    kz: "Картоп дольки",
    en: "Potato Wedges",
    price: "800 ₸",
    category: "garnish",
    image: "images/dolki.png",
    ingKz: "Картоп дольки.",
    ingRu: "Картофельные дольки.",
    ingEn: "Potato wedges."
  }),
  makeItem({
    ru: "Фри",
    en: "French Fries",
    price: "1 000 ₸",
    category: "garnish",
    image: "images/fri.png",
    ingKz: "Картоп фри.",
    ingRu: "Картофель фри.",
    ingEn: "French fries."
  }),
  makeItem({
    ru: "Овощи на гриле",
    kz: "Гриль көкөністер",
    en: "Grilled Vegetables",
    price: "1 500 ₸",
    category: "garnish",
    image: "images/ovoshchi-na-grile.png",
    ingKz: "Гриль көкөністер.",
    ingRu: "Овощи на гриле.",
    ingEn: "Grilled vegetables."
  }),

  // ===== ПИЦЦА =====
  makeItem({
    ru: "Казахстан",
    kz: "Қазақстан",
    en: "Kazakhstan Pizza",
    price: "4 500 ₸",
    category: "pizza",
    image: "images/pizza_kazakhstan.jpg",
    ingKz: "Қазы, сыр, томат соусы.",
    ingRu: "Казы, сыр, томатный соус.",
    ingEn: "Kazy, cheese, tomato sauce."
  }),
  makeItem({
    ru: "Пепперони",
    en: "Pepperoni",
    price: "3 500 ₸",
    category: "pizza",
    image: "images/peperoni.jpg",
    ingKz: "Пепперони, моцарелла, томат соусы.",
    ingRu: "Пепперони, моцарелла, томатный соус.",
    ingEn: "Pepperoni, mozzarella, tomato sauce."
  }),
  makeItem({
    ru: "Альфредо",
    en: "Alfredo",
    price: "3 800 ₸",
    category: "pizza",
    image: "images/pizza_alfredo.jpg",
    ingKz: "Тауық еті, сыр, кілегейлі соус.",
    ingRu: "Курица, сыр, сливочный соус.",
    ingEn: "Chicken, cheese, creamy sauce."
  }),
  makeItem({
    ru: "Болоньезе",
    en: "Bolognese",
    price: "4 000 ₸",
    category: "pizza",
    image: "images/pizza_bolognese.jpg",
    ingKz: "Фарш, томат соусы, сыр.",
    ingRu: "Фарш, томатный соус, сыр.",
    ingEn: "Minced meat, tomato sauce, cheese."
  }),

  // ===== РОЛЛЫ =====
  makeItem({
    ru: "Филадельфия",
    en: "Philadelphia",
    price: "3 800 ₸",
    category: "rolls",
    image: "images/roll_philadelphia.jpg",
    ingKz: "Лосось, күріш, сыр, нори.",
    ingRu: "Лосось, рис, сыр, нори.",
    ingEn: "Salmon, rice, cheese, nori."
  }),
  makeItem({
    ru: "Цезарь",
    kz: "Цезарь ролл",
    en: "Caesar Roll",
    price: "3 300 ₸",
    category: "rolls",
    image: "images/roll_caesar_fried.jpg",
    ingKz: "Тауық еті, күріш, сыр, соус.",
    ingRu: "Курица, рис, сыр, соус.",
    ingEn: "Chicken, rice, cheese, sauce."
  }),
  makeItem({
    ru: "Америка темпура",
    en: "America Tempura",
    price: "3 500 ₸",
    category: "rolls",
    image: "images/roll_america_tempura.jpg",
    ingKz: "Темпура ролл.",
    ingRu: "Темпура ролл.",
    ingEn: "Tempura roll."
  }),
  makeItem({
    ru: "Унаги темпура",
    en: "Unagi Tempura",
    price: "3 000 ₸",
    category: "rolls",
    image: "images/roll_unagi_tempura.jpg",
    ingKz: "Унаги темпура ролл.",
    ingRu: "Ролл унаги темпура.",
    ingEn: "Unagi tempura roll."
  }),

  // ===== ШАШЛЫКИ =====
  makeItem({
    ru: "Кусковой говядина",
    kz: "Сиыр етінен шашлык",
    en: "Beef Shashlik",
    price: "1 150 ₸",
    category: "shashlyk",
    image: "images/kuskovaya-govyadina.png",
    ingKz: "Сиыр етінен шашлык.",
    ingRu: "Шашлык из говядины.",
    ingEn: "Beef shashlik."
  }),
  makeItem({
    ru: "Люля кебаб",
    en: "Lula Kebab",
    price: "1 250 ₸",
    category: "shashlyk",
    image: "images/lyulya-kebab.png",
    ingKz: "Люля кебаб.",
    ingRu: "Люля кебаб.",
    ingEn: "Lula kebab."
  }),
  makeItem({
    ru: "Окорочка",
    en: "Chicken Leg Shashlik",
    price: "1 050 ₸",
    category: "shashlyk",
    image: "images/okorochka-kebab.png",
    ingKz: "Тауық окорочка.",
    ingRu: "Куриные окорочка.",
    ingEn: "Chicken legs."
  }),
  makeItem({
    ru: "Печень в оболочке",
    kz: "Қабықтағы бауыр",
    en: "Liver in Caul Fat",
    price: "1 300 ₸",
    category: "shashlyk",
    image: "images/pechen-v-obolochke-kebab.png",
    ingKz: "Бауыр шашлык.",
    ingRu: "Шашлык из печени.",
    ingEn: "Liver shashlik."
  }),
  makeItem({
    ru: "Утка",
    kz: "Үйрек",
    en: "Duck",
    price: "2 000 ₸",
    category: "shashlyk",
    image: "images/utka-shashlyk.png",
    ingKz: "Үйрек еті.",
    ingRu: "Утиное мясо.",
    ingEn: "Duck meat."
  }),

  // ===== СЕТЫ НА КОМПАНИЮ =====
  makeItem({
    ru: "Сет FOX на 6–8 персон",
    kz: "Сет FOX 6–8 адамға",
    en: "FOX Set for 6–8 People",
    price: "38 000 ₸",
    category: "company",
    image: "images/set_fox.png",
    ingKz: "Рибай, тибон, қуырдақ, цыпленок табака, колбаски, салат, дольки, көкөніс.",
    ingRu: "Рибай, тибон, куырдак, цыпленок табака, колбаски, салат, дольки, овощи.",
    ingEn: "Ribeye, T-bone, kuyrdak, chicken tabaka, sausages, salad, wedges, vegetables."
  }),
  makeItem({
    ru: "Сет SHELBY на 12–15 персон",
    kz: "Сет SHELBY 12–15 адамға",
    en: "SHELBY Set for 12–15 People",
    price: "50 000 ₸",
    category: "company",
    image: placeholder,
    ingKz: "Компанияға арналған үлкен ет сеті.",
    ingRu: "Большой мясной сет на компанию.",
    ingEn: "Large meat set for a company."
  }),
  makeItem({
    ru: "Куырдак",
    kz: "Қуырдақ",
    en: "Kuyrdak",
    price: "30 000 ₸",
    category: "company",
    image: "images/kuyrdak.png",
    ingKz: "Компанияға арналған қуырдақ.",
    ingRu: "Куырдак на компанию.",
    ingEn: "Kuyrdak for a company."
  }),
  makeItem({
    ru: "Бешбармак",
    kz: "Бешбармақ",
    en: "Beshbarmak",
    price: "25 000 ₸",
    category: "company",
    image: "images/beshbarmak.png",
    ingKz: "Компанияға арналған бешбармақ.",
    ingRu: "Бешбармак на компанию.",
    ingEn: "Beshbarmak for a company."
  }),
  makeItem({
    ru: "Микс суши",
    en: "Sushi Mix",
    price: "18 000 ₸",
    category: "company",
    image: "images/mix_sushi_1200x800.png",
    ingKz: "Суши сет ассорти, соус, имбирь, васаби.",
    ingRu: "Суши сет ассорти, соус, имбирь, васаби.",
    ingEn: "Assorted sushi set, sauce, ginger, wasabi."
  }),
  makeItem({
    ru: "Мясной микс",
    en: "Meat Mix",
    price: "25 000 ₸",
    category: "company",
    image: "images/meat_mix_1200x800.png",
    ingKz: "Ет ассорти, гарнир, көкөніс, соустар.",
    ingRu: "Мясное ассорти, гарнир, овощи, соусы.",
    ingEn: "Assorted meat, side dish, vegetables, sauces."
  }),
  makeItem({
    ru: "Куриное асорти",
    en: "Chicken Assorted",
    price: "8 000 ₸",
    category: "company",
    image: "images/chicken_assorti_1200x800.png",
    ingKz: "Тауық ассорти, соус.",
    ingRu: "Куриное ассорти, соус.",
    ingEn: "Assorted chicken, sauce."
  }),

  // ===== БАР: ЛИМОНАДЫ =====
  makeItem({
    ru: "Тропический",
    kz: "Тропикалық",
    en: "Tropical",
    price: "2 500 ₸",
    category: "lemonade",
    image: placeholder,
    ingKz: "Лимонад, 1 л.",
    ingRu: "Лимонад, 1 л.",
    ingEn: "Lemonade, 1 L."
  }),
  makeItem({
    ru: "Мохито классический",
    kz: "Классикалық мохито",
    en: "Classic Mojito",
    price: "2 500 ₸",
    category: "lemonade",
    image: "images/mohito-klassicheskiy.png",
    ingKz: "Лайм, жалбыз, сироп, газды су, мұз.",
    ingRu: "Лайм, мята, сироп, газированная вода, лед.",
    ingEn: "Lime, mint, syrup, sparkling water, ice."
  }),
  makeItem({
    ru: "Киви-лайм",
    kz: "Киви-лайм",
    en: "Kiwi Lime",
    price: "2 500 ₸",
    category: "lemonade",
    image: placeholder,
    ingKz: "Киви, лайм, сироп, газды су.",
    ingRu: "Киви, лайм, сироп, газированная вода.",
    ingEn: "Kiwi, lime, syrup, sparkling water."
  }),
  makeItem({
    ru: "Манго-маракуйя",
    kz: "Манго-маракуйя",
    en: "Mango Passion Fruit",
    price: "2 500 ₸",
    category: "lemonade",
    image: placeholder,
    ingKz: "Манго, маракуйя, сироп, газды су.",
    ingRu: "Манго, маракуйя, сироп, газированная вода.",
    ingEn: "Mango, passion fruit, syrup, sparkling water."
  }),
  makeItem({
    ru: "Ягодный",
    kz: "Жидекті",
    en: "Berry",
    price: "2 500 ₸",
    category: "lemonade",
    image: placeholder,
    ingKz: "Жидек, сироп, газды су.",
    ingRu: "Ягоды, сироп, газированная вода.",
    ingEn: "Berries, syrup, sparkling water."
  }),
  makeItem({
    ru: "Клубника-банан",
    kz: "Құлпынай-банан",
    en: "Strawberry Banana",
    price: "2 500 ₸",
    category: "lemonade",
    image: placeholder,
    ingKz: "Құлпынай, банан, сироп.",
    ingRu: "Клубника, банан, сироп.",
    ingEn: "Strawberry, banana, syrup."
  }),

  // ===== ПРОХЛАДИТЕЛЬНЫЕ НАПИТКИ =====
  makeItem({
    ru: "Coca-Cola / Cola Zero / Sprite / Fanta 0.5",
    kz: "Coca-Cola / Cola Zero / Sprite / Fanta 0.5",
    en: "Coca-Cola / Cola Zero / Sprite / Fanta 0.5",
    price: "1 000 ₸",
    category: "soft",
    image: "images/Coca-Cola.png",
    ingKz: "Салқын сусын.",
    ingRu: "Прохладительный напиток.",
    ingEn: "Soft drink."
  }),
  makeItem({
    ru: "Schweppes Tonic 0.25",
    en: "Schweppes Tonic 0.25",
    price: "1 300 ₸",
    category: "soft",
    image: "images/Schweppes Tonic.png",
    ingRu: "Тоник."
  }),
  makeItem({
    ru: "Red Bull 0.25",
    en: "Red Bull 0.25",
    price: "2 000 ₸",
    category: "soft",
    image: "images/Red Bull.png",
    ingRu: "Энергетический напиток."
  }),
  makeItem({
    ru: "Piko",
    en: "Piko Juice",
    price: "2 200 ₸",
    category: "soft",
    image: "images/Piko.png",
    ingRu: "Сок Piko."
  }),
  makeItem({
    ru: "Coca-Cola 1L",
    en: "Coca-Cola 1L",
    price: "1 200 ₸",
    category: "soft",
    image: "images/Coca-Cola.png",
    ingRu: "Coca-Cola, 1 л."
  }),

  // ===== МИНЕРАЛЬНАЯ ВОДА =====
  makeItem({
    ru: "Природная вода Turan 0.5",
    kz: "Turan табиғи суы 0.5",
    en: "Turan Natural Water 0.5",
    price: "1 200 ₸",
    category: "water",
    image: "images/Turan.png",
    ingRu: "Природная вода."
  }),
  makeItem({
    ru: "Borjomi 0.5",
    en: "Borjomi 0.5",
    price: "1 600 ₸",
    category: "water",
    image: "images/Borjomi.png",
    ingKz: "Минералды су.",
    ingRu: "Минеральная вода.",
    ingEn: "Mineral water."
  }),

  // ===== ЧАЙ =====
  makeItem({
    ru: "Черный чай",
    kz: "Қара шай",
    en: "Black Tea",
    price: "1 000 ₸",
    category: "tea",
    image: "images/chai-chernyy.png",
    ingKz: "Қара шай.",
    ingRu: "Черный чай.",
    ingEn: "Black tea."
  }),
  makeItem({
    ru: "Зеленый чай",
    kz: "Көк шай",
    en: "Green Tea",
    price: "1 000 ₸",
    category: "tea",
    image: "images/chai-zelenyy.png",
    ingKz: "Көк шай.",
    ingRu: "Зеленый чай.",
    ingEn: "Green tea."
  }),
  makeItem({
    ru: "Ташкентский чай",
    kz: "Ташкент шайы",
    en: "Tashkent Tea",
    price: "2 000 ₸",
    category: "tea",
    image: "images/Tashkent Tea.png",
    ingRu: "Фирменный чай."
  }),
  makeItem({
    ru: "Ягодный чай",
    kz: "Жидекті шай",
    en: "Berry Tea",
    price: "2 000 ₸",
    category: "tea",
    image: "images/Berry Tea.png",
    ingRu: "Ягодный чай."
  }),

  // ===== БЕЗАЛКОГОЛЬНЫЕ КОКТЕЙЛИ =====
  makeItem({
    ru: "Руби краш",
    kz: "Руби краш",
    en: "Ruby Crush",
    price: "2 500 ₸",
    category: "mocktails",
    image: placeholder,
    ingRu: "Безалкогольный коктейль."
  }),
  makeItem({
    ru: "Пина колада",
    kz: "Пина колада",
    en: "Virgin Pina Colada",
    price: "2 500 ₸",
    category: "mocktails",
    image: placeholder,
    ingRu: "Безалкогольный коктейль."
  }),

  // ===== АЛКОГОЛЬНЫЕ КОКТЕЙЛИ =====
  makeItem({
    ru: "Aperol Spritz",
    en: "Aperol Spritz",
    price: "4 000 ₸",
    category: "cocktails",
    image: "images/Aperol Spritz.png",
    ingKz: "Aperol, prosecco, soda, апельсин, мұз.",
    ingRu: "Aperol, prosecco, soda, апельсин, лед.",
    ingEn: "Aperol, prosecco, soda, orange, ice."
  }),
  makeItem({
    ru: "Cuba Libre",
    en: "Cuba Libre",
    price: "4 000 ₸",
    category: "cocktails",
    image:  "images/Cuba Libre.png",
    ingRu: "Алкогольный коктейль."
  }),
  makeItem({
    ru: "Лонг Айленд",
    en: "Long Island",
    price: "4 000 ₸",
    category: "cocktails",
    image:  "images/Long Island.png",
    ingRu: "Алкогольный коктейль."
  }),
  makeItem({
    ru: "Негрони",
    en: "Negroni",
    price: "4 000 ₸",
    category: "cocktails",
    image:  "images/Negroni.png",
    ingRu: "Алкогольный коктейль."
  }),
  makeItem({
    ru: "Пина Колада",
    en: "Pina Colada",
    price: "4 000 ₸",
    category: "cocktails",
    image:  "images/Pina Colada.png",
    ingRu: "Алкогольный коктейль."
  }),
  makeItem({
    ru: "Секс на пляже",
    en: "Sex on the Beach",
    price: "4 000 ₸",
    category: "cocktails",
    image:  "images/Sex on the Beach.png",
    ingRu: "Алкогольный коктейль."
  }),
  makeItem({
    ru: "Текила Санрайз",
    en: "Tequila Sunrise",
    price: "4 000 ₸",
    category: "cocktails",
    image:  "images/Tequila Sunrise.png",
    ingRu: "Алкогольный коктейль."
  }),

  // ===== ЛОНГ ДРИНК =====
  makeItem({
    ru: "BACARDI MOJITO",
    en: "Bacardi Mojito",
    price: "3 500 ₸",
    category: "long_drinks",
    image:  "images/BACARDI MOJITO.png",
    ingRu: "Алкогольный лонг дринк."
  }),
  makeItem({
    ru: "BOMBAY & TONIC",
    en: "Bombay & Tonic",
    price: "3 500 ₸",
    category: "long_drinks",
    image: placeholder,
    ingRu: "Алкогольный лонг дринк."
  }),
  makeItem({
    ru: "MARTINI FIERO & TONIC",
    en: "Martini Fiero & Tonic",
    price: "3 500 ₸",
    category: "long_drinks",
    image: placeholder,
    ingRu: "Алкогольный лонг дринк."
  }),
  makeItem({
    ru: "Голубые Гавайи",
    en: "Blue Hawaii",
    price: "3 500 ₸",
    category: "long_drinks",
    image: placeholder,
    ingRu: "Алкогольный лонг дринк."
  }),
  makeItem({
    ru: "Маргарита",
    en: "Margarita",
    price: "3 500 ₸",
    category: "long_drinks",
    image: placeholder,
    ingRu: "Алкогольный лонг дринк."
  }),
  makeItem({
    ru: "Beefeater Tonic",
    en: "Beefeater Tonic",
    price: "3 500 ₸",
    category: "long_drinks",
    image: placeholder,
    ingRu: "Алкогольный лонг дринк."
  }),

  // ===== ШОТЫ =====
  makeItem({
    ru: "Б-52",
    en: "B-52",
    price: "3 000 ₸",
    category: "shots",
    image: placeholder,
    ingRu: "Алкогольный шот, 50 мл."
  }),
  makeItem({
    ru: "Б-53",
    en: "B-53",
    price: "3 000 ₸",
    category: "shots",
    image: placeholder,
    ingRu: "Алкогольный шот, 50 мл."
  }),
  makeItem({
    ru: "Б-54",
    en: "B-54",
    price: "3 000 ₸",
    category: "shots",
    image: placeholder,
    ingRu: "Алкогольный шот, 50 мл."
  }),

  // ===== ВЕРМУТЫ И АПЕРИТИВЫ =====
  makeItem({
    ru: "Martini Fiero",
    price: "2 500 ₸",
    category: "vermouth",
    image: placeholder,
    ingRu: "Вермут, 100 мл."
  }),
  makeItem({
    ru: "Martini Bianco",
    price: "2 500 ₸",
    category: "vermouth",
    image: placeholder,
    ingRu: "Вермут, 100 мл."
  }),
  makeItem({
    ru: "Martini Extra Dry",
    price: "2 500 ₸",
    category: "vermouth",
    image: placeholder,
    ingRu: "Вермут, 100 мл."
  }),
  makeItem({
    ru: "Martini Rosso",
    price: "2 500 ₸",
    category: "vermouth",
    image: placeholder,
    ingRu: "Вермут, 100 мл."
  }),

  // ===== АРМЯНСКИЙ КОНЬЯК =====
  makeItem({
    ru: "Ararat 3 Y.O.",
    price: "1 400 ₸",
    category: "armenian_cognac",
    image: placeholder,
    ingRu: "Армянский коньяк, 50 мл."
  }),
  makeItem({
    ru: "Ararat 5 Y.O.",
    price: "2 100 ₸",
    category: "armenian_cognac",
    image: placeholder,
    ingRu: "Армянский коньяк, 50 мл."
  }),
  makeItem({
    ru: "Ahtamar 10 Y.O.",
    price: "2 700 ₸",
    category: "armenian_cognac",
    image: placeholder,
    ingRu: "Армянский коньяк, 50 мл."
  }),

  // ===== ФРАНЦУЗСКИЙ КОНЬЯК =====
  makeItem({
    ru: "Martell V.S.",
    price: "3 500 ₸",
    category: "french_cognac",
    image: placeholder,
    ingRu: "Французский коньяк, 50 мл."
  }),
  makeItem({
    ru: "Martell V.S.O.P",
    price: "5 200 ₸",
    category: "french_cognac",
    image: placeholder,
    ingRu: "Французский коньяк, 50 мл."
  }),
  makeItem({
    ru: "Hennessy V.S.",
    price: "4 500 ₸",
    category: "french_cognac",
    image: placeholder,
    ingRu: "Французский коньяк, 50 мл."
  }),
  makeItem({
    ru: "Hennessy V.S.O.P",
    price: "7 000 ₸",
    category: "french_cognac",
    image: placeholder,
    ingRu: "Французский коньяк, 50 мл."
  }),

  // ===== ВОДКА ИМПОРТНАЯ =====
  makeItem({
    ru: "Absolut",
    price: "1 700 ₸",
    category: "vodka",
    image: "images/Absolut.png",
    ingRu: "Водка, 50 мл."
  }),
  makeItem({
    ru: "Kyzylzhar Legend 0.5",
    price: "10 000 ₸",
    category: "vodka",
    image: placeholder,
    ingRu: "Водка, 0.5 л."
  }),
  makeItem({
    ru: "Царская Оригинал",
    price: "1 500 ₸",
    category: "vodka",
    image: placeholder,
    ingRu: "Водка, 50 мл."
  }),
  makeItem({
    ru: "SKYY California Vodka 0.7",
    price: "23 500 ₸",
    category: "vodka",
    image: placeholder,
    ingRu: "Водка, 0.7 л."
  }),
  makeItem({
    ru: "Онегин",
    price: "3 000 ₸",
    category: "vodka",
    image: placeholder,
    ingRu: "Водка, 50 мл."
  }),
  makeItem({
    ru: "Beluga",
    price: "3 400 ₸",
    category: "vodka",
    image: placeholder,
    ingRu: "Водка, 50 мл."
  }),
  makeItem({
    ru: "Belvedere",
    price: "4 000 ₸",
    category: "vodka",
    image: placeholder,
    ingRu: "Водка, 50 мл."
  }),

  // ===== ЛИКЕРЫ =====
  makeItem({
    ru: "Malibu Coconut Rum",
    price: "2 000 ₸",
    category: "liqueur",
    image: placeholder,
    ingRu: "Ликер, 50 мл."
  }),
  makeItem({
    ru: "Kahlua",
    price: "2 200 ₸",
    category: "liqueur",
    image: placeholder,
    ingRu: "Ликер, 50 мл."
  }),
  makeItem({
    ru: "Cointreau",
    price: "2 200 ₸",
    category: "liqueur",
    image: placeholder,
    ingRu: "Ликер, 50 мл."
  }),
  makeItem({
    ru: "Absinthe Green",
    price: "2 700 ₸",
    category: "liqueur",
    image: placeholder,
    ingRu: "Абсент, 50 мл."
  }),
  makeItem({
    ru: "Baileys",
    price: "2 000 ₸",
    category: "liqueur",
    image: "images/Baileys.png",
    ingRu: "Ликер, 50 мл."
  }),
  makeItem({
    ru: "Sambuca",
    price: "2 350 ₸",
    category: "liqueur",
    image: placeholder,
    ingRu: "Ликер, 50 мл."
  }),
  makeItem({
    ru: "Aperol",
    price: "1 600 ₸",
    category: "liqueur",
    image: placeholder,
    ingRu: "Аперитив, 50 мл."
  }),

  // ===== ВИСКИ =====
  makeItem({
    ru: "The Glenlivet Founder's Reserve",
    price: "4 100 ₸",
    category: "whiskey",
    image: placeholder,
    ingRu: "Односолодовый виски, 50 мл."
  }),
  makeItem({
    ru: "The Glenlivet Excellence 12 Y.O.",
    price: "5 800 ₸",
    category: "whiskey",
    image: placeholder,
    ingRu: "Односолодовый виски, 50 мл."
  }),
  makeItem({
    ru: "Glenmorangie Original",
    price: "5 500 ₸",
    category: "whiskey",
    image: placeholder,
    ingRu: "Односолодовый виски, 50 мл."
  }),
  makeItem({
    ru: "Glenfiddich 12 Y.O.",
    price: "5 800 ₸",
    category: "whiskey",
    image: placeholder,
    ingRu: "Односолодовый виски, 50 мл."
  }),
  makeItem({
    ru: "Macallan 12 Y.O.",
    price: "8 500 ₸",
    category: "whiskey",
    image: placeholder,
    ingRu: "Односолодовый виски, 50 мл."
  }),
  makeItem({
    ru: "Chivas Regal 12 Y.O.",
    price: "3 900 ₸",
    category: "whiskey",
    image: "images/Chivas Regal 12 YO.png",
    ingRu: "Купажированный виски, 50 мл."
  }),
  makeItem({
    ru: "Chivas Regal 15 Y.O.",
    price: "5 200 ₸",
    category: "whiskey",
    image: placeholder,
    ingRu: "Купажированный виски, 50 мл."
  }),
  makeItem({
    ru: "Chivas Regal 18 Y.O.",
    price: "7 800 ₸",
    category: "whiskey",
    image: placeholder,
    ingRu: "Купажированный виски, 50 мл."
  }),
  makeItem({
    ru: "Ballantine's Finest",
    price: "2 400 ₸",
    category: "whiskey",
    image: placeholder,
    ingRu: "Купажированный виски, 50 мл."
  }),
  makeItem({
    ru: "Ballantine's 7 Y.O.",
    price: "2 200 ₸",
    category: "whiskey",
    image: placeholder,
    ingRu: "Купажированный виски, 50 мл."
  }),
  makeItem({
    ru: "Ballantine's Passion",
    price: "2 200 ₸",
    category: "whiskey",
    image: placeholder,
    ingRu: "Купажированный виски, 50 мл."
  }),
  makeItem({
    ru: "Dewar's Caribbean 8 Y.O.",
    price: "2 500 ₸",
    category: "whiskey",
    image: placeholder,
    ingRu: "Купажированный виски, 50 мл."
  }),
  makeItem({
    ru: "Dewar's Japanese 8 Y.O.",
    price: "2 500 ₸",
    category: "whiskey",
    image: placeholder,
    ingRu: "Купажированный виски, 50 мл."
  }),
  makeItem({
    ru: "Dewar's Portuguese 8 Y.O.",
    price: "2 500 ₸",
    category: "whiskey",
    image: placeholder,
    ingRu: "Купажированный виски, 50 мл."
  }),
  makeItem({
    ru: "William Lawson's",
    price: "2 100 ₸",
    category: "whiskey",
    image: placeholder,
    ingRu: "Купажированный виски, 50 мл."
  }),
  makeItem({
    ru: "William Lawson's Super Spiced",
    price: "2 100 ₸",
    category: "whiskey",
    image: placeholder,
    ingRu: "Купажированный виски, 50 мл."
  }),
  makeItem({
    ru: "Jameson Original",
    price: "2 900 ₸",
    category: "whiskey",
    image: "images/Jameson.png",
    ingRu: "Jameson Family, 50 мл."
  }),
  makeItem({
    ru: "Jameson Crested",
    price: "3 200 ₸",
    category: "whiskey",
    image: placeholder,
    ingRu: "Jameson Family, 50 мл."
  }),
  makeItem({
    ru: "Jameson Black Barrel",
    price: "3 500 ₸",
    category: "whiskey",
    image: placeholder,
    ingRu: "Jameson Family, 50 мл."
  }),
  makeItem({
    ru: "Jack Daniel's",
    price: "2 850 ₸",
    category: "whiskey",
    image: placeholder,
    ingRu: "Бурбон, 50 мл."
  }),

  // ===== НАСТОЙКИ =====
  makeItem({
    ru: "Campari",
    price: "2 000 ₸",
    category: "infusion",
    image: placeholder,
    ingRu: "Настойка, 50 мл."
  }),
  makeItem({
    ru: "Jagermeister",
    price: "2 400 ₸",
    category: "infusion",
    image: "images/Jagermeister.png",
    ingRu: "Настойка, 50 мл."
  }),

  // ===== ТЕКИЛА =====
  makeItem({
    ru: "Olmeca Blanco",
    price: "2 200 ₸",
    category: "tequila",
    image: "images/Olmeca Blanco.png",
    ingRu: "Текила, 50 мл."
  }),
  makeItem({
    ru: "Olmeca Gold",
    price: "2 200 ₸",
    category: "tequila",
    image: "images/Olmeca Gold.png",
    ingRu: "Текила, 50 мл."
  }),

  // ===== ДЖИН =====
  makeItem({
    ru: "Beefeater",
    price: "2 000 ₸",
    category: "gin",
    image: placeholder,
    ingRu: "Джин, 50 мл."
  }),
  makeItem({
    ru: "Beefeater Pink Strawberry",
    price: "2 000 ₸",
    category: "gin",
    image: placeholder,
    ingRu: "Джин, 50 мл."
  }),
  makeItem({
    ru: "Beefeater Blood Orange",
    price: "2 000 ₸",
    category: "gin",
    image: placeholder,
    ingRu: "Джин, 50 мл."
  }),
  makeItem({
    ru: "Bombay Sapphire",
    price: "2 000 ₸",
    category: "gin",
    image: placeholder,
    ingRu: "Джин, 50 мл."
  }),

  // ===== РОМ =====
  makeItem({
    ru: "Havana Club 3 Y.O.",
    price: "2 000 ₸",
    category: "rum",
    image: placeholder,
    ingRu: "Кубинский ром, 50 мл."
  }),
  makeItem({
    ru: "Havana Club Especial",
    price: "2 200 ₸",
    category: "rum",
    image: placeholder,
    ingRu: "Кубинский ром, 50 мл."
  }),
  makeItem({
    ru: "Havana Club Cuban Spiced",
    price: "2 000 ₸",
    category: "rum",
    image: placeholder,
    ingRu: "Кубинский ром, 50 мл."
  }),
  makeItem({
    ru: "Bacardi Carta Blanca",
    price: "2 100 ₸",
    category: "rum",
    image: "images/Bacardi Carta Blanca.png",
    ingRu: "Пуэрто-рико ром, 50 мл."
  }),
  makeItem({
    ru: "Bacardi Carta Negra",
    price: "2 100 ₸",
    category: "rum",
    image: placeholder,
    ingRu: "Пуэрто-рико ром, 50 мл."
  }),
  makeItem({
    ru: "Bacardi Spiced",
    price: "2 100 ₸",
    category: "rum",
    image: placeholder,
    ingRu: "Пуэрто-рико ром, 50 мл."
  }),
  makeItem({
    ru: "Oakheart",
    price: "2 100 ₸",
    category: "rum",
    image: placeholder,
    ingRu: "Пуэрто-рико ром, 50 мл."
  })
];

const categoriesBox = document.getElementById("categories");
const menuGrid = document.getElementById("menuGrid");
const modal = document.getElementById("modal");
const closeModal = document.getElementById("closeModal");
const modalImg = document.getElementById("modalImg");
const modalTitle = document.getElementById("modalTitle");
const modalPrice = document.getElementById("modalPrice");
const modalIngredients = document.getElementById("modalIngredients");

function updateStaticText() {
  document.getElementById("serviceText").textContent = text[currentLang].service;
  document.getElementById("subtitle").textContent = text[currentLang].subtitle;
  document.getElementById("kitchenTab").textContent = text[currentLang].kitchen;
  document.getElementById("barTab").textContent = text[currentLang].bar;
  document.getElementById("ingredientsTitle").textContent = text[currentLang].ingredients;
}

function renderCategories() {
  const categories = categoryGroups[activeType];

  categoriesBox.innerHTML = categories.map(cat => `
    <button class="category-btn ${cat.id === activeCategory ? "active" : ""}" data-id="${cat.id}">
      ${cat.name[currentLang]}
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
    if (activeCategory === "all") return currentCategoryIds.includes(item.category);
    return item.category === activeCategory;
  });

  menuGrid.innerHTML = filtered.map(item => `
    <div class="card">
      <img src="${item.image}" alt="${item.name[currentLang]}" onerror="this.src='${placeholder}'">
      <div class="card-body">
        <h3>${item.name[currentLang]}</h3>
        <div class="price">${item.price}</div>
        <button class="more-btn" onclick="openModal(${menuItems.indexOf(item)})">
          ${text[currentLang].more}
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

  modalTitle.textContent = item.name[currentLang];
  modalPrice.textContent = item.price;
  modalIngredients.textContent = item.ingredients[currentLang];

  modal.classList.add("active");
}

closeModal.addEventListener("click", () => {
  modal.classList.remove("active");
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) modal.classList.remove("active");
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

document.querySelectorAll(".lang-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".lang-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    currentLang = btn.dataset.lang;

    updateStaticText();
    renderCategories();
    renderMenu();
  });
});

updateStaticText();
renderCategories();
renderMenu();
