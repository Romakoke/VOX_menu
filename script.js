const placeholder = "images/placeholder.webp";

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
    ingredients: "Қоспасы:",
  },
  ru: {
    service: "Обслуживание +15%",
    subtitle: "Выберите категорию",
    kitchen: "Кухня",
    bar: "Бар",
    more: "Состав",
    ingredients: "Состав:",
  },
  en: {
    service: "Service +15%",
    subtitle: "Choose a category",
    kitchen: "Kitchen",
    bar: "Bar",
    more: "Ingredients",
    ingredients: "Ingredients:",
  }
};

const categoryGroups = {
  kitchen: [
    { id: "all", name: { kz: "Барлығы", ru: "Все", en: "All" } },
    { id: "cold", name: { kz: "Салқын тағамдар", ru: "Холодные закуски", en: "Cold Starters" } },
    { id: "salads", name: { kz: "Салаттар", ru: "Салаты", en: "Salads" } },
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
    { id: "rum", name: { kz: "Ром", ru: "Ром", en: "Rum" } },
    { id: "sparkling_wine", name: { kz: "Игристые вина", ru: "Игристые вина", en: "Sparkling Wines" } },
{ id: "white_wine", name: { kz: "Ақ шараптар", ru: "Белые вина", en: "White Wines" } },
{ id: "red_wine", name: { kz: "Қызыл шараптар", ru: "Красные вина", en: "Red Wines" } },
{ id: "draft_wine", name: { kz: "Разливные вина", ru: "Разливные вина", en: "Draft Wines" } },
{ id: "beer_bar", name: { kz: "Разливное пиво", ru: "Разливное пиво", en: "Draft Beer" } },
{ id: "bottle_beer", name: { kz: "Бөтелкедегі сыра", ru: "Бутылочное пиво", en: "Bottled Beer" } },
{ id: "bar_snacks", name: { kz: "Сыраға тіскебасар", ru: "Закуски к пиву", en: "Beer Snacks" } },
          { id: "other", name: { kz: "Басқа", ru: "Прочее", en: "Other" } }

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
    image:  "images/Мясной.webp",
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
    image:  "images/Нарезка из овощей.webp",
    ingKz: "Көкөніс ассорти.",
    ingRu: "Ассорти из свежих овощей.",
    ingEn: "Assorted fresh vegetables."
  }),
  makeItem({
    ru: "Сельдь по-русски",
    en: "Russian-Style Herring",
    price: "5 000 ₸",
    category: "cold",
    image:  "images/Сельдь по-русски.webp",
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
    image:  "images/Соленья.webp",
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
    image: "images/fruit_assorti.webp",
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
    image:  "images/Салат от шефа.webp",
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
    image: "images/salad_greek.webp",
    ingKz: "Қияр, қызанақ, фета, зәйтүн.",
    ingRu: "Огурцы, помидоры, фета, оливки.",
    ingEn: "Cucumber, tomatoes, feta, olives."
  }),
  makeItem({
    ru: "Сытный папа",
    en: "Hearty Papa",
    price: "3 000 ₸",
    category: "salads",
    image: "images/salad_sytyi_papa.webp",
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
    image: "images/salad_asian_eggplant.webp",
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
    image: "images/salad_caesar_chicken.webp",
    ingKz: "Тауық, салат, сыр, сухари, соус.",
    ingRu: "Курица, салат, сыр, сухари, соус.",
    ingEn: "Chicken, lettuce, cheese, croutons, sauce."
  }),
  makeItem({
    ru: "Оливье",
    en: "Olivier Salad",
    price: "2 500 ₸",
    category: "salads",
    image: "images/salad_olivie.webp",
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
    image: "images/salad_rucola_shrimp.webp",
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
    image:  "images/Свежий салат.webp",
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
    image: "images/Фруктовый салат.webp",
    ingKz: "Жеміс ассорти.",
    ingRu: "Фруктовое ассорти.",
    ingEn: "Assorted fruits."
  }),

  // ===== ЗАКУСКИ К ПИВУ =====

  // ===== СОУСЫ =====
  makeItem({
    ru: "Чесночный",
    kz: "Сарымсақ соусы",
    en: "Garlic Sauce",
    price: "500 ₸",
    category: "sauces",
    image: "images/sauce_garlic.webp",
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
    image: "images/sauce_cheese.webp",
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
    image: "images/pasta_alfredo.webp",
    ingKz: "Паста, тауық еті, кілегейлі соус.",
    ingRu: "Паста, курица, сливочный соус.",
    ingEn: "Pasta, chicken, creamy sauce."
  }),
  makeItem({
    ru: "Паста Болоньезе",
    en: "Bolognese Pasta",
    price: "3 800 ₸",
    category: "pasta",
    image: "images/Bolognese Pasta.webp",
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
    image: "images/telyatina-s-ovoshami.webp",
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
    image: "images/kuyrdak_gaviadina.webp",
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
    image: "images/telyatina-s-gribami-v-slivochnom-souse.webp",
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
    image: "images/kuyrdak_baranina.webp",
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
    image: "images/kurinoe-file-s-ovoshami.webp",
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
    image: "images/chicken_mushroom_cream.webp",
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
    image: "images/zharenaya-ryba.webp",
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
    image: "images/shurpa-iz-baraniny.webp",
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
    image: "images/shurpa-iz-govyadiny.webp",
    ingKz: "Сиыр еті, көкөніс, сорпа.",
    ingRu: "Говядина, овощи, бульон.",
    ingEn: "Beef, vegetables, broth."
  }),
  makeItem({
    ru: "Цомян",
    en: "Tsoman",
    price: "3 000 ₸",
    category: "soups",
    image: "images/tsomyan.webp",
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
    image: "images/ramen_chicken.webp",
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
    image: "images/ramen_beef.webp",
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
    image: "images/steak_ribeye.webp",
    ingKz: "Рибай стейк.",
    ingRu: "Стейк рибай.",
    ingEn: "Ribeye steak."
  }),
  makeItem({
    ru: "Тибон",
    en: "T-Bone",
    price: "7 000 ₸",
    category: "steaks",
    image: "images/steak_tbone.webp",
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
    image: "images/Медальон.webp",
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
    image: "images/steyk-iz-lososya.webp",
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
    image: "images/ris.webp",
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
    image: "images/dolki.webp",
    ingKz: "Картоп дольки.",
    ingRu: "Картофельные дольки.",
    ingEn: "Potato wedges."
  }),
  makeItem({
    ru: "Фри",
    en: "French Fries",
    price: "1 000 ₸",
    category: "garnish",
    image: "images/fri.webp",
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
    image: "images/ovoshchi-na-grile.webp",
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
    image: "images/pizza_kazakhstan.webp",
    ingKz: "Қазы, сыр, томат соусы.",
    ingRu: "Казы, сыр, томатный соус.",
    ingEn: "Kazy, cheese, tomato sauce."
  }),
  makeItem({
    ru: "Пепперони",
    en: "Pepperoni",
    price: "3 500 ₸",
    category: "pizza",
    image: "images/peperoni.webp",
    ingKz: "Пепперони, моцарелла, томат соусы.",
    ingRu: "Пепперони, моцарелла, томатный соус.",
    ingEn: "Pepperoni, mozzarella, tomato sauce."
  }),
  makeItem({
    ru: "Альфредо",
    en: "Alfredo",
    price: "3 800 ₸",
    category: "pizza",
    image: "images/pizza_alfredo.webp",
    ingKz: "Тауық еті, сыр, кілегейлі соус.",
    ingRu: "Курица, сыр, сливочный соус.",
    ingEn: "Chicken, cheese, creamy sauce."
  }),
  makeItem({
    ru: "Болоньезе",
    en: "Bolognese",
    price: "4 000 ₸",
    category: "pizza",
    image: "images/pizza_bolognese.webp",
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
    image: "images/roll_philadelphia.webp",
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
    image: "images/roll_caesar_fried.webp",
    ingKz: "Тауық еті, күріш, сыр, соус.",
    ingRu: "Курица, рис, сыр, соус.",
    ingEn: "Chicken, rice, cheese, sauce."
  }),
  makeItem({
    ru: "Америка темпура",
    en: "America Tempura",
    price: "3 500 ₸",
    category: "rolls",
    image: "images/roll_america_tempura.webp",
    ingKz: "Темпура ролл.",
    ingRu: "Темпура ролл.",
    ingEn: "Tempura roll."
  }),
  makeItem({
    ru: "Унаги темпура",
    en: "Unagi Tempura",
    price: "3 000 ₸",
    category: "rolls",
    image: "images/roll_unagi_tempura.webp",
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
    image: "images/kuskovaya-govyadina.webp",
    ingKz: "Сиыр етінен шашлык.",
    ingRu: "Шашлык из говядины.",
    ingEn: "Beef shashlik."
  }),
  makeItem({
    ru: "Люля кебаб",
    en: "Lula Kebab",
    price: "1 250 ₸",
    category: "shashlyk",
    image: "images/lyulya-kebab.webp",
    ingKz: "Люля кебаб.",
    ingRu: "Люля кебаб.",
    ingEn: "Lula kebab."
  }),
  makeItem({
    ru: "Окорочка",
    en: "Chicken Leg Shashlik",
    price: "1 050 ₸",
    category: "shashlyk",
    image: "images/okorochka-kebab.webp",
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
    image: "images/pechen-v-obolochke-kebab.webp",
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
    image: "images/utka-shashlyk.webp",
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
    image: "images/set_fox.webp",
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
    image: "images/kuyrdak.webp",
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
    image: "images/beshbarmak.webp",
    ingKz: "Компанияға арналған бешбармақ.",
    ingRu: "Бешбармак на компанию.",
    ingEn: "Beshbarmak for a company."
  }),
  makeItem({
    ru: "Микс суши",
    en: "Sushi Mix",
    price: "18 000 ₸",
    category: "company",
    image: "images/mix_sushi_1200x800.webp",
    ingKz: "Суши сет ассорти, соус, имбирь, васаби.",
    ingRu: "Суши сет ассорти, соус, имбирь, васаби.",
    ingEn: "Assorted sushi set, sauce, ginger, wasabi."
  }),
  makeItem({
    ru: "Мясной микс",
    en: "Meat Mix",
    price: "25 000 ₸",
    category: "company",
    image: "images/meat_mix_1200x800.webp",
    ingKz: "Ет ассорти, гарнир, көкөніс, соустар.",
    ingRu: "Мясное ассорти, гарнир, овощи, соусы.",
    ingEn: "Assorted meat, side dish, vegetables, sauces."
  }),
  makeItem({
    ru: "Куриное асорти",
    en: "Chicken Assorted",
    price: "8 000 ₸",
    category: "company",
    image: "images/chicken_assorti_1200x800.webp",
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
    image:  "images/Тропикалық.webp",
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
    image: "images/Мохито классический.webp",
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
    image:  "images/Киви-лайм.webp",
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
    image:  "images/Манго-маракуйя.webp",
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
    image:  "images/Ягодный.webp",
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
    image:  "images/Клубника-банан.webp",
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
    image: "images/Coca-Colafsz.webp",
    ingKz: "Салқын сусын.",
    ingRu: "Прохладительный напиток.",
    ingEn: "Soft drink."
  }),
  makeItem({
    ru: "Schweppes Tonic 0.25",
    en: "Schweppes Tonic 0.25",
    price: "1 300 ₸",
    category: "soft",
    image: "images/Schweppes Tonic.webp",
    ingRu: "Тоник."
  }),
  makeItem({
    ru: "Red Bull 0.25",
    en: "Red Bull 0.25",
    price: "2 000 ₸",
    category: "soft",
    image: "images/Red Bull.webp",
    ingRu: "Энергетический напиток."
  }),
  makeItem({
    ru: "Piko",
    en: "Piko Juice",
    price: "2 200 ₸",
    category: "soft",
    image: "images/Piko.webp",
    ingRu: "Сок Piko."
  }),
  makeItem({
    ru: "Coca-Cola 1L",
    en: "Coca-Cola 1L",
    price: "1 200 ₸",
    category: "soft",
    image: "images/Coca-Cola.webp",
    ingRu: "Coca-Cola, 1 л."
  }),

  // ===== МИНЕРАЛЬНАЯ ВОДА =====
  makeItem({
    ru: "Природная вода Turan 0.5",
    kz: "Turan табиғи суы 0.5",
    en: "Turan Natural Water 0.5",
    price: "1 200 ₸",
    category: "water",
    image: "images/Turan.webp",
    ingRu: "Природная вода."
  }),
  makeItem({
    ru: "Borjomi 0.5",
    en: "Borjomi 0.5",
    price: "1 600 ₸",
    category: "water",
    image: "images/Borjomi.webp",
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
    image: "images/chai-chernyy.webp",
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
    image: "images/chai-zelenyy.webp",
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
    image: "images/Tashkent Tea.webp",
    ingRu: "Фирменный чай."
  }),
  makeItem({
    ru: "Ягодный чай",
    kz: "Жидекті шай",
    en: "Berry Tea",
    price: "2 000 ₸",
    category: "tea",
    image: "images/Berry Tea.webp",
    ingRu: "Ягодный чай."
  }),

  // ===== БЕЗАЛКОГОЛЬНЫЕ КОКТЕЙЛИ =====
 // ===== БЕЗАЛКОГОЛЬНЫЕ КОКТЕЙЛИ =====
makeItem({
  ru: "Мохито",
  kz: "Мохито",
  en: "Mojito",
  price: "2 500 ₸",
  category: "mocktails",
  image: "images/Мохито-коктейл.webp",
  ingKz: "Алкогольсіз коктейль.",
  ingRu: "Безалкогольный коктейль.",
  ingEn: "Non-alcoholic cocktail."
}),
makeItem({
  ru: "Блю галакси",
  kz: "Блю галакси",
  en: "Blue Galaxy",
  price: "2 500 ₸",
  category: "mocktails",
  image: "images/Блю галакси.webp",
  ingKz: "Алкогольсіз коктейль.",
  ingRu: "Безалкогольный коктейль.",
  ingEn: "Non-alcoholic cocktail."
}),
makeItem({
  ru: "Бора-Бора",
  kz: "Бора-Бора",
  en: "Bora Bora",
  price: "2 500 ₸",
  category: "mocktails",
  image: "images/Бора-Бора.webp",
  ingKz: "Алкогольсіз коктейль.",
  ingRu: "Безалкогольный коктейль.",
  ingEn: "Non-alcoholic cocktail."
}),
  makeItem({
    ru: "Пина колада",
    kz: "Пина колада",
    en: "Virgin Pina Colada",
    price: "2 500 ₸",
    category: "mocktails",
    image: "images/Пина колада.webp",
    ingRu: "Безалкогольный коктейль."
  }),

  // ===== АЛКОГОЛЬНЫЕ КОКТЕЙЛИ =====
  makeItem({
    ru: "Aperol Spritz",
    en: "Aperol Spritz",
    price: "4 000 ₸",
    category: "cocktails",
    image: "images/Aperol Spritz.webp",
    ingKz: "Aperol, prosecco, soda, апельсин, мұз.",
    ingRu: "Aperol, prosecco, soda, апельсин, лед.",
    ingEn: "Aperol, prosecco, soda, orange, ice."
  }),
  makeItem({
    ru: "Cuba Libre",
    en: "Cuba Libre",
    price: "4 000 ₸",
    category: "cocktails",
    image:  "images/Cuba Libre.webp",
    ingRu: "Алкогольный коктейль."
  }),
  makeItem({
    ru: "Лонг Айленд",
    en: "Long Island",
    price: "4 000 ₸",
    category: "cocktails",
    image:  "images/Long Island.webp",
    ingRu: "Алкогольный коктейль."
  }),
  makeItem({
    ru: "Негрони",
    en: "Negroni",
    price: "4 000 ₸",
    category: "cocktails",
    image:  "images/Negroni.webp",
    ingRu: "Алкогольный коктейль."
  }),
  makeItem({
    ru: "Пина Колада",
    en: "Pina Colada",
    price: "4 000 ₸",
    category: "cocktails",
    image:  "images/Pina Colada.webp",
    ingRu: "Алкогольный коктейль."
  }),
  makeItem({
    ru: "Секс на пляже",
    en: "Sex on the Beach",
    price: "4 000 ₸",
    category: "cocktails",
    image:  "images/Beach.webp",
    ingRu: "Алкогольный коктейль."
  }),
  makeItem({
    ru: "Текила Санрайз",
    en: "Tequila Sunrise",
    price: "4 000 ₸",
    category: "cocktails",
    image:  "images/Tequila Sunrise.webp",
    ingRu: "Алкогольный коктейль."
  }),

  // ===== ЛОНГ ДРИНК =====
  makeItem({
    ru: "BACARDI MOJITO",
    en: "Bacardi Mojito",
    price: "3 500 ₸",
    category: "long_drinks",
    image:  "images/BACARDI MOJ.webp",
    ingRu: "Алкогольный лонг дринк."
  }),
  makeItem({
    ru: "BOMBAY & TONIC",
    en: "Bombay & Tonic",
    price: "3 500 ₸",
    category: "long_drinks",
    image:  "images/BOMBAY & TONIC.webp",
    ingRu: "Алкогольный лонг дринк."
  }),
  makeItem({
    ru: "MARTINI FIERO & TONIC",
    en: "Martini Fiero & Tonic",
    price: "3 500 ₸",
    category: "long_drinks",
    image:  "images/MARTINI FIERO & TONIC.webp",
    ingRu: "Алкогольный лонг дринк."
  }),
  makeItem({
    ru: "Голубые Гавайи",
    en: "Blue Hawaii",
    price: "3 500 ₸",
    category: "long_drinks",
    image:  "images/Голубые.webp",
    ingRu: "Алкогольный лонг дринк."
  }),
  makeItem({
    ru: "Маргарита",
    en: "Margarita",
    price: "3 500 ₸",
    category: "long_drinks",
    image:  "images/Маргарита-лонг дринк.webp",
    ingRu: "Алкогольный лонг дринк."
  }),
  makeItem({
    ru: "Beefeater Tonic",
    en: "Beefeater Tonic",
    price: "3 500 ₸",
    category: "long_drinks",
    image:  "images/Beefeater Tonic.webp",
    ingRu: "Алкогольный лонг дринк."
  }),

  // ===== ШОТЫ =====
  makeItem({
    ru: "Б-52",
    en: "B-52",
    price: "3 000 ₸",
    category: "shots",
    image:  "images/B-52 шоты.webp",
    ingRu: "Алкогольный шот, 50 мл."
  }),
  makeItem({
    ru: "Б-53",
    en: "B-53",
    price: "3 000 ₸",
    category: "shots",
    image:  "images/B-53 шоты.webp",
    ingRu: "Алкогольный шот, 50 мл."
  }),
  makeItem({
    ru: "Б-54",
    en: "B-54",
    price: "3 000 ₸",
    category: "shots",
    image:  "images/B-54 шоты.webp",
    ingRu: "Алкогольный шот, 50 мл."
  }),

  // ===== ВЕРМУТЫ И АПЕРИТИВЫ =====
  makeItem({
    ru: "Martini Fiero",
    price: "2 500 ₸",
    category: "vermouth",
    image:  "images/Martini Fiero.webp",
    ingRu: "Вермут, 100 мл."
  }),
  makeItem({
    ru: "Martini Bianco",
    price: "2 500 ₸",
    category: "vermouth",
    image:  "images/Martini Bianco.webp",
    ingRu: "Вермут, 100 мл."
  }),
  makeItem({
    ru: "Martini Extra Dry",
    price: "2 500 ₸",
    category: "vermouth",
    image:  "images/Martini Extra Dry.webp",
    ingRu: "Вермут, 100 мл."
  }),
  makeItem({
    ru: "Martini Rosso",
    price: "2 500 ₸",
    category: "vermouth",
    image:  "images/Martini Rosso.webp",
    ingRu: "Вермут, 100 мл."
  }),

  // ===== АРМЯНСКИЙ КОНЬЯК =====
  makeItem({
    ru: "Ararat 3 Y.O.",
    price: "1 400 ₸",
    category: "armenian_cognac",
    image:  "images/Ararat3.webp",
    ingRu: "Армянский коньяк, 50 мл."
  }),
  makeItem({
    ru: "Ararat 5 Y.O.",
    price: "2 100 ₸",
    category: "armenian_cognac",
    image:  "images/Ararat5.webp",
    ingRu: "Армянский коньяк, 50 мл."
  }),
  makeItem({
    ru: "Ahtamar 10 Y.O.",
    price: "2 700 ₸",
    category: "armenian_cognac",
    image:  "images/Ararat10.webp",
    ingRu: "Армянский коньяк, 50 мл."
  }),

  // ===== ФРАНЦУЗСКИЙ КОНЬЯК =====
  makeItem({
    ru: "Martell V.S.",
    price: "3 500 ₸",
    category: "french_cognac",
    image:  "images/Martell V.S..webp",
    ingRu: "Французский коньяк, 50 мл."
  }),
  makeItem({
    ru: "Martell V.S.O.P",
    price: "5 200 ₸",
    category: "french_cognac",
    image:  "images/Martell V.S.O.P.webp",
    ingRu: "Французский коньяк, 50 мл."
  }),
  makeItem({
    ru: "Hennessy V.S.",
    price: "4 500 ₸",
    category: "french_cognac",
    image:  "images/Hennessy V.S..webp",
    ingRu: "Французский коньяк, 50 мл."
  }),
  makeItem({
    ru: "Hennessy V.S.O.P",
    price: "7 000 ₸",
    category: "french_cognac",
    image:  "images/Hennessy V.S.O.P.webp",
    ingRu: "Французский коньяк, 50 мл."
  }),

  // ===== ВОДКА ИМПОРТНАЯ =====
  makeItem({
    ru: "Absolut",
    price: "1 700 ₸",
    category: "vodka",
    image: "images/Absolut.webp",
    ingRu: "Водка, 50 мл."
  }),
  makeItem({
    ru: "Kyzylzhar Legend 0.5",
    price: "10 000 ₸",
    category: "vodka",
    image:  "images/Kyzylzhar Legend 0.5.webp",
    ingRu: "Водка, 0.5 л."
  }),
  makeItem({
    ru: "Царская Оригинал",
    price: "1 500 ₸",
    category: "vodka",
    image:  "images/Царская Оригинал.webp",
    ingRu: "Водка, 50 мл."
  }),
  makeItem({
    ru: "SKYY California Vodka 0.7",
    price: "23 500 ₸",
    category: "vodka",
    image:  "images/SKYY California.webp",
    ingRu: "Водка, 0.7 л."
  }),
  makeItem({
    ru: "Онегин",
    price: "3 000 ₸",
    category: "vodka",
    image:  "images/Онегин.webp",
    ingRu: "Водка, 50 мл."
  }),
  makeItem({
    ru: "Beluga",
    price: "3 400 ₸",
    category: "vodka",
    image:  "images/Beluga.webp",
    ingRu: "Водка, 50 мл."
  }),
  makeItem({
    ru: "Belvedere",
    price: "4 000 ₸",
    category: "vodka",
    image:  "images/Belvedere.webp",
    ingRu: "Водка, 50 мл."
  }),

  // ===== ЛИКЕРЫ =====
  makeItem({
    ru: "Malibu Coconut Rum",
    price: "2 000 ₸",
    category: "liqueur",
    image:  "images/Malibu Coconut Rum.webp",
    ingRu: "Ликер, 50 мл."
  }),
  makeItem({
    ru: "Kahlua",
    price: "2 200 ₸",
    category: "liqueur",
    image:  "images/Kahlua.webp",
    ingRu: "Ликер, 50 мл."
  }),
  makeItem({
    ru: "Cointreau",
    price: "2 200 ₸",
    category: "liqueur",
    image:  "images/Cointreau.webp",
    ingRu: "Ликер, 50 мл."
  }),
  makeItem({
    ru: "Absinthe Green",
    price: "2 700 ₸",
    category: "liqueur",
    image:  "images/Absinthe Green.webp",
    ingRu: "Абсент, 50 мл."
  }),
  makeItem({
    ru: "Baileys",
    price: "2 000 ₸",
    category: "liqueur",
    image: "images/Baileys.webp",
    ingRu: "Ликер, 50 мл."
  }),
  makeItem({
    ru: "Sambuca",
    price: "2 350 ₸",
    category: "liqueur",
    image:  "images/Sambuca.webp",
    ingRu: "Ликер, 50 мл."
  }),
  makeItem({
    ru: "Aperol",
    price: "1 600 ₸",
    category: "liqueur",
    image:  "images/Aperol.webp",
    ingRu: "Аперитив, 50 мл."
  }),

  // ===== ВИСКИ =====
  makeItem({
    ru: "The Glenlivet Founder's Reserve",
    price: "4 100 ₸",
    category: "whiskey",
    image:  "images/The Glenlivet Founder's Reserve.webp",
    ingRu: "Односолодовый виски, 50 мл."
  }),
  makeItem({
    ru: "The Glenlivet Excellence 12 Y.O.",
    price: "5 800 ₸",
    category: "whiskey",
    image:  "images/The Glenlivet Excellence 12 Y.O..webp",
    ingRu: "Односолодовый виски, 50 мл."
  }),
  makeItem({
    ru: "Glenmorangie Original",
    price: "5 500 ₸",
    category: "whiskey",
    image:  "images/Glenmorangie Original.webp",
    ingRu: "Односолодовый виски, 50 мл."
  }),
  makeItem({
    ru: "Glenfiddich 12 Y.O.",
    price: "5 800 ₸",
    category: "whiskey",
    image:  "images/Glenfiddich 12 Y.O..webp",
    ingRu: "Односолодовый виски, 50 мл."
  }),
  makeItem({
    ru: "Macallan 12 Y.O.",
    price: "8 500 ₸",
    category: "whiskey",
    image:  "images/Macallan 12 Y.O..webp",
    ingRu: "Односолодовый виски, 50 мл."
  }),
  makeItem({
    ru: "Chivas Regal 12 Y.O.",
    price: "3 900 ₸",
    category: "whiskey",
    image: "images/Chivas Regal 12 YO.webp",
    ingRu: "Купажированный виски, 50 мл."
  }),
  makeItem({
    ru: "Chivas Regal 15 Y.O.",
    price: "5 200 ₸",
    category: "whiskey",
    image:  "images/Chivas Regal 15 Y.O..webp",
    ingRu: "Купажированный виски, 50 мл."
  }),
  makeItem({
    ru: "Chivas Regal 18 Y.O.",
    price: "7 800 ₸",
    category: "whiskey",
    image:  "images/Chivas Regal 18 Y.O..webp",
    ingRu: "Купажированный виски, 50 мл."
  }),
  makeItem({
    ru: "Ballantine's Finest",
    price: "2 400 ₸",
    category: "whiskey",
    image:  "images/Ballantine's Finest.webp",
    ingRu: "Купажированный виски, 50 мл."
  }),
  makeItem({
    ru: "Ballantine's 7 Y.O.",
    price: "2 200 ₸",
    category: "whiskey",
    image:  "images/Ballantine's 7 Y.O..webp",
    ingRu: "Купажированный виски, 50 мл."
  }),
  makeItem({
    ru: "Ballantine's Passion",
    price: "2 200 ₸",
    category: "whiskey",
    image: "images/Ballantine's Passion.webp",
    ingRu: "Купажированный виски, 50 мл."
  }),
  makeItem({
    ru: "Dewar's Caribbean 8 Y.O.",
    price: "2 500 ₸",
    category: "whiskey",
    image: "images/Dewar's Caribbean 8 Y.O..webp",
    ingRu: "Купажированный виски, 50 мл."
  }),
  makeItem({
    ru: "Dewar's Japanese 8 Y.O.",
    price: "2 500 ₸",
    category: "whiskey",
    image: "images/Dewar's Japanese 8 Y.O..webp",
    ingRu: "Купажированный виски, 50 мл."
  }),
  makeItem({
    ru: "Dewar's Portuguese 8 Y.O.",
    price: "2 500 ₸",
    category: "whiskey",
    image: "images/Dewar's Portuguese 8 Y.O..webp",
    ingRu: "Купажированный виски, 50 мл."
  }),
  makeItem({
    ru: "William Lawson's",
    price: "2 100 ₸",
    category: "whiskey",
    image: "images/William Lawson's.webp",
    ingRu: "Купажированный виски, 50 мл."
  }),
  makeItem({
    ru: "William Lawson's Super Spiced",
    price: "2 100 ₸",
    category: "whiskey",
    image: "images/William Lawson's Super Spiced.webp",
    ingRu: "Купажированный виски, 50 мл."
  }),
  makeItem({
    ru: "Jameson Original",
    price: "2 900 ₸",
    category: "whiskey",
    image: "images/Jameson.webp",
    ingRu: "Jameson Family, 50 мл."
  }),
  makeItem({
    ru: "Jameson Crested",
    price: "3 200 ₸",
    category: "whiskey",
    image: "images/Jameson Crested.webp",
    ingRu: "Jameson Family, 50 мл."
  }),
  makeItem({
    ru: "Jameson Black Barrel",
    price: "3 500 ₸",
    category: "whiskey",
    image: "images/Jameson Black Barrel.webp",
    ingRu: "Jameson Family, 50 мл."
  }),
  makeItem({
    ru: "Jack Daniel's",
    price: "2 850 ₸",
    category: "whiskey",
    image: "images/Jack Daniel's.webp",
    ingRu: "Бурбон, 50 мл."
  }),

  // ===== НАСТОЙКИ =====
  makeItem({
    ru: "Campari",
    price: "2 000 ₸",
    category: "infusion",
    image:  "images/Campari.webp",
    ingRu: "Настойка, 50 мл."
  }),
  makeItem({
    ru: "Jagermeister",
    price: "2 400 ₸",
    category: "infusion",
    image: "images/Jagermeister.webp",
    ingRu: "Настойка, 50 мл."
  }),

  // ===== ТЕКИЛА =====
  makeItem({
    ru: "Olmeca Blanco",
    price: "2 200 ₸",
    category: "tequila",
    image: "images/Olmeca Blanco.webp",
    ingRu: "Текила, 50 мл."
  }),
  makeItem({
    ru: "Olmeca Gold",
    price: "2 200 ₸",
    category: "tequila",
    image: "images/Olmeca Gold.webp",
    ingRu: "Текила, 50 мл."
  }),

  // ===== ДЖИН =====
  makeItem({
    ru: "Beefeater",
    price: "2 000 ₸",
    category: "gin",
    image:  "images/Beefeater.webp",
    ingRu: "Джин, 50 мл."
  }),
  makeItem({
    ru: "Beefeater Pink Strawberry",
    price: "2 000 ₸",
    category: "gin",
    image:  "images/Beefeater Pink Strawberry.webp",
    ingRu: "Джин, 50 мл."
  }),
  makeItem({
    ru: "Beefeater Blood Orange",
    price: "2 000 ₸",
    category: "gin",
    image:  "images/Beefeater Blood Orange.webp",
    ingRu: "Джин, 50 мл."
  }),
  makeItem({
    ru: "Bombay Sapphire",
    price: "2 000 ₸",
    category: "gin",
    image:  "images/Bombay Sapphire.webp",
    ingRu: "Джин, 50 мл."
  }),
// ===== ИГРИСТЫЕ ВИНА =====
makeItem({
  ru: "Jacob’s Creek Sparkling Moscato",
  en: "Jacob’s Creek Sparkling Moscato",
  price: "17 000 ₸",
  category: "sparkling_wine",
  image: "images/Jacob’s Creek Sparkling Moscato.webp",
  ingRu: "Игристое вино, 750 мл."
}),
makeItem({
  ru: "Martini Asti D.O.C.G",
  en: "Martini Asti D.O.C.G",
  price: "21 000 ₸",
  category: "sparkling_wine",
  image: "images/Martini Asti D.O.C.G.webp",
  ingRu: "Игристое вино, 750 мл."
}),
makeItem({
  ru: "Martini Prosecco D.O.C",
  en: "Martini Prosecco D.O.C",
  price: "21 000 ₸",
  category: "sparkling_wine",
  image: "images/Martini Prosecco D.O.C.webp",
  ingRu: "Игристое вино, 750 мл."
}),
makeItem({
  ru: "Martini Brut",
  en: "Martini Brut",
  price: "21 000 ₸",
  category: "sparkling_wine",
  image: "images/Martini Brut.webp",
  ingRu: "Игристое вино, 750 мл."
}),
makeItem({
  ru: "Cinzano Prosecco",
  en: "Cinzano Prosecco",
  price: "15 000 ₸",
  category: "sparkling_wine",
  image: "images/Cinzano Prosecco.webp",
  ingRu: "Игристое вино, 750 мл."
}),
makeItem({
  ru: "Tavernello Lambrusco Emilia",
  en: "Tavernello Lambrusco Emilia",
  price: "12 000 ₸",
  category: "sparkling_wine",
  image: "images/Tavernello Lambrusco Emilia.webp",
  ingRu: "Игристое вино, 750 мл."
}),
makeItem({
  ru: "Chandon Brut",
  en: "Chandon Brut",
  price: "35 000 ₸",
  category: "sparkling_wine",
  image: "images/Chandon Brut.webp",
  ingRu: "Игристое вино, 750 мл."
}),

// ===== БЕЛЫЕ ВИНА =====
makeItem({
  ru: "Brancott Estate Sauvignon Blanc",
  en: "Brancott Estate Sauvignon Blanc",
  price: "18 000 ₸",
  category: "white_wine",
  image: "images/Brancott Estate Sauvignon Blanc.webp",
  ingRu: "Белое вино, 750 мл."
}),
makeItem({
  ru: "Jacob’s Creek Classic Sauvignon Blanc",
  en: "Jacob’s Creek Classic Sauvignon Blanc",
  price: "12 000 ₸",
  category: "white_wine",
  image: "images/Jacob’s Creek Classic Sauvignon Blanc.webp",
  ingRu: "Белое вино, 750 мл."
}),
makeItem({
  ru: "Tavernello Pinot Grigio",
  en: "Tavernello Pinot Grigio",
  price: "15 000 ₸",
  category: "white_wine",
  image: "images/Tavernello Pinot Grigio.webp",
  ingRu: "Белое вино, 750 мл."
}),
makeItem({
  ru: "Cuvee Special",
  en: "Cuvee Special",
  price: "15 000 ₸",
  category: "white_wine",
  image: "images/Cuvee Special.webp",
  ingRu: "Белое вино, 750 мл."
}),
makeItem({
  ru: "Villa Antinori Toscana",
  en: "Villa Antinori Toscana",
  price: "18 000 ₸",
  category: "white_wine",
  image: "images/Villa Antinori Toscana.webp",
  ingRu: "Белое вино, 750 мл."
}),
makeItem({
  ru: "San Valentin",
  en: "San Valentin",
  price: "16 000 ₸",
  category: "white_wine",
  image: "images/San Valentin.webp",
  ingRu: "Белое вино, 750 мл."
}),
makeItem({
  ru: "Tocornal Sauvignon Blanc",
  en: "Tocornal Sauvignon Blanc",
  price: "15 000 ₸",
  category: "white_wine",
  image: "images/Tocornal Sauvignon Blanc.webp",
  ingRu: "Белое вино, 750 мл."
}),
makeItem({
  ru: "Tavernello Avernello",
  en: "Tavernello Avernello",
  price: "12 000 ₸",
  category: "white_wine",
  image: "images/Tavernello Avernello.webp",
  ingRu: "Белое вино, 750 мл."
}),

// ===== КРАСНЫЕ ВИНА =====
makeItem({
  ru: "Brancott Estate Pinot Noir",
  en: "Brancott Estate Pinot Noir",
  price: "20 000 ₸",
  category: "red_wine",
  image: "images/Brancott Estate Pinot Noir.webp",
  ingRu: "Красное вино, 750 мл."
}),
makeItem({
  ru: "Jacob’s Creek Shiraz Reserva",
  en: "Jacob’s Creek Shiraz Reserva",
  price: "16 500 ₸",
  category: "red_wine",
  image: "images/Jacob’s Creek Shiraz Reserva.webp",
  ingRu: "Красное вино, 750 мл."
}),
makeItem({
  ru: "Cuvee Special",
  en: "Cuvee Special",
  price: "18 000 ₸",
  category: "red_wine",
  image: "images/Cuvee Special red.webp",
  ingRu: "Красное вино, 750 мл."
}),
makeItem({
  ru: "Tavernello Amabile",
  en: "Tavernello Amabile",
  price: "14 000 ₸",
  category: "red_wine",
  image: "images/Tavernello Amabile.webp",
  ingRu: "Красное вино, 750 мл."
}),
makeItem({
  ru: "Tocornal Cabernet Sauvignon",
  en: "Tocornal Cabernet Sauvignon",
  price: "13 000 ₸",
  category: "red_wine",
  image: "images/Tocornal Cabernet Sauvignon.webp",
  ingRu: "Красное вино, 750 мл."
}),
makeItem({
  ru: "Villa Antinori Toscana",
  en: "Villa Antinori Toscana",
  price: "37 000 ₸",
  category: "red_wine",
  image: "images/Villa Antinori Toscana red.webp",
  ingRu: "Красное вино, 750 мл."
}),
makeItem({
  ru: "Киндзмараули",
  kz: "Киндзмараули",
  en: "Kindzmarauli",
  price: "12 000 ₸",
  category: "red_wine",
  image: "images/Киндзмараули.webp",
  ingRu: "Красное вино, 750 мл."
}),

// ===== РАЗЛИВНЫЕ ВИНА =====
makeItem({
  ru: "Tavernello RED&WHITE",
  en: "Tavernello RED&WHITE",
  price: "3 000 ₸",
  category: "draft_wine",
  image: "images/Tavernello RED&WHITE.webp",
  ingRu: "Разливное вино, 150 мл."
}),
makeItem({
  ru: "Cuvee Special",
  en: "Cuvee Special",
  price: "3 000 ₸",
  category: "draft_wine",
  image: "images/Cuvee Special RED&WHITE.webp",
  ingRu: "Разливное вино, 150 мл."
}),

// ===== БУТЫЛОЧНОЕ ПИВО =====
makeItem({
  ru: "Corona Extra",
  en: "Corona Extra",
  price: "3 200 ₸",
  category: "bottle_beer",
  image: "images/Corona Extra.webp",
  ingRu: "Бутылочное пиво, 0.35 л."
}),
makeItem({
  ru: "Miller",
  en: "Miller",
  price: "2 100 ₸",
  category: "bottle_beer",
  image: "images/Miller.webp",
  ingRu: "Бутылочное пиво, 0.33 л."
}),

// ===== ЗАКУСКИ К ПИВУ / БАР =====
makeItem({
  ru: "Арахис",
  kz: "Арахис",
  en: "Peanuts",
  price: "1 300 ₸",
  category: "bar_snacks",
  image: "images/Арахис.webp",
  ingRu: "Закуска к пиву."
}),
makeItem({
  ru: "Курт",
  kz: "Құрт",
  en: "Kurt",
  price: "950 ₸",
  category: "bar_snacks",
  image: "images/Курт.webp",
  ingRu: "Закуска к пиву."
}),
makeItem({
  ru: "Фисташки",
  kz: "Фисташки",
  en: "Pistachios",
  price: "1 600 ₸",
  category: "bar_snacks",
  image: "images/Фисташки.webp",
  ingRu: "Закуска к пиву."
}),
makeItem({
  ru: "Чечил",
  kz: "Чечил",
  en: "Chechil Cheese",
  price: "1 600 ₸",
  category: "bar_snacks",
  image: "images/Чечил.webp",
  ingRu: "Закуска к пиву."
}),
makeItem({
  ru: "Чипсы",
  kz: "Чипсы",
  en: "Chips",
  price: "1 500 ₸",
  category: "bar_snacks",
  image: "images/Чипсы.webp",
  ingRu: "Закуска к пиву."
}),
   makeItem({
    ru: "Сет «Похрустим»",
    en: "Crunch Set",
    price: "6 000 ₸",
    category: "bar_snacks",
    image: "images/Сет по хрустим.webp",
    ingKz: "Пиволық закуска ассорти.",
    ingRu: "Ассорти закусок к пиву.",
    ingEn: "Assorted beer snacks."
  }),
  makeItem({
    ru: "Сет «Добрый»",
    en: "Dobry Set",
    price: "7 000 ₸",
    category: "bar_snacks",
    image:  "images/Сет добрый.webp",
    ingKz: "Пиволық закуска ассорти.",
    ingRu: "Ассорти закусок к пиву.",
    ingEn: "Assorted beer snacks."
  }),
  makeItem({
    ru: "Креветки к пиву",
    kz: "Сыраға креветка",
    en: "Shrimp for Beer",
    price: "5 200 ₸",
    category: "bar_snacks",
    image:  "images/Криветки.webp",
    ingKz: "Креветка, лимон, соус.",
    ingRu: "Креветки, лимон, соус.",
    ingEn: "Shrimp, lemon, sauce."
  }),
  makeItem({
    ru: "Колбаски",
    en: "Sausages",
    price: "3 000 ₸",
    category: "bar_snacks",
    image:  "images/Калбоски.webp",
    ingKz: "Гриль колбаски.",
    ingRu: "Колбаски гриль.",
    ingEn: "Grilled sausages."
  }),
  makeItem({
    ru: "Наггетсы",
    en: "Nuggets",
    price: "1 500 ₸",
    category: "bar_snacks",
    image: "images/nuggets.webp",
    ingKz: "Тауық наггетсы, соус.",
    ingRu: "Куриные наггетсы, соус.",
    ingEn: "Chicken nuggets, sauce."
  }),
  // ===== ҚОСЫМША / БАР =====
makeItem({
  ru: "Циндао пиво",
  kz: "Циндао пиво",
  en: "Tsingtao Beer",
  price: "2 500 ₸",
  category: "bottle_beer",
  image: "images/Циндао пиво.webp",
  ingKz: "Бөтелкедегі сыра.",
  ingRu: "Бутылочное пиво.",
  ingEn: "Bottled beer."
}),
makeItem({
  ru: "Разливное пиво Прага",
  kz: "Разливное пиво Прага",
  en: "Praga Draft Beer",
  price: "1 000 ₸",
  category: "beer_bar",
  image: "images/Разливное пиво Прага.webp",
  ingKz: "Разливное сыра.",
  ingRu: "Разливное пиво.",
  ingEn: "Draft beer."
}),
makeItem({
  ru: "Сигареты в ассортименте",
  kz: "Сигареттер ассортиментте",
  en: "Cigarettes Assorted",
  price: "2 500 ₸",
  category: "other",
  image: "images/Сигареты в ассортименте.webp",
  ingKz: "Ассортиментте.",
  ingRu: "В ассортименте.",
  ingEn: "Assorted."
}),
makeItem({
  ru: "Зажигалка",
  kz: "Зажигалка",
  en: "Lighter",
  price: "800 ₸",
  category: "other",
  image: "images/Зажигалка.webp",
  ingKz: "Зажигалка.",
  ingRu: "Зажигалка.",
  ingEn: "Lighter."
}),
makeItem({
  ru: "Orbit",
  kz: "Orbit",
  en: "Orbit",
  price: "800 ₸",
  category: "other",
  image: "images/Orbit.webp",
  ingKz: "Сағыз.",
  ingRu: "Жевательная резинка.",
  ingEn: "Chewing gum."
}),
  // ===== РОМ =====
  makeItem({
    ru: "Havana Club 3 Y.O.",
    price: "2 000 ₸",
    category: "rum",
    image:  "images/Havana Club 3 Y.O..webp",
    ingRu: "Кубинский ром, 50 мл."
  }),
  makeItem({
    ru: "Havana Club Especial",
    price: "2 200 ₸",
    category: "rum",
    image:  "images/Havana Club Especial.webp",
    ingRu: "Кубинский ром, 50 мл."
  }),
  makeItem({
    ru: "Havana Club Cuban Spiced",
    price: "2 000 ₸",
    category: "rum",
    image:  "images/Havana Club Cuban Spiced.webp",
    ingRu: "Кубинский ром, 50 мл."
  }),
  makeItem({
    ru: "Bacardi Carta Blanca",
    price: "2 100 ₸",
    category: "rum",
    image: "images/Bacardi Carta Blanca.webp",
    ingRu: "Пуэрто-рико ром, 50 мл."
  }),
  makeItem({
    ru: "Bacardi Carta Negra",
    price: "2 100 ₸",
    category: "rum",
    image:  "images/Bacardi Carta Negra.webp",
    ingRu: "Пуэрто-рико ром, 50 мл."
  }),
  makeItem({
    ru: "Bacardi Spiced",
    price: "2 100 ₸",
    category: "rum",
    image:  "images/Bacardi Spiced.webp",
    ingRu: "Пуэрто-рико ром, 50 мл."
  }),
  makeItem({
    ru: "Oakheart",
    price: "2 100 ₸",
    category: "rum",
    image:  "images/Oakheart.webp",
    ingRu: "Пуэрто-рико ром, 50 мл."
  }),
  
  makeItem({
  ru: "Бой посуды",
  kz: "Ыдыс сындыру",
  en: "Broken Dishes",
  price: "3 000 ₸",
  category: "other",
  image: "images/Ескерту.webp",
  ingKz: "Ыдыс сындырылған жағдайда төлем алынады.",
  ingRu: "При повреждении посуды взимается оплата.",
  ingEn: "A fee is charged for broken dishes."
}),
makeItem({
  ru: "Порча имущества",
  kz: "Мүлікті бүлдіру",
  en: "Property Damage",
  price: "10 000 ₸ және жоғары",
  category: "other",
  image: "images/Ескерту.webp",
  ingKz: "Мүлік бүлінген жағдайда шығын көлеміне қарай төлем алынады.",
  ingRu: "При порче имущества оплата взимается по размеру ущерба.",
  ingEn: "For property damage, the fee depends on the amount of damage."
}),
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
  document.getElementById("warningTopText").textContent = text[currentLang].warningTop;
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
