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
    warningTop: "ЕСКЕРТУ: Бой посуда — 3 000 ₸ | Мүлікті бүлдіру — 10 000 ₸ және жоғары"
  },
  ru: {
    service: "Обслуживание +15%",
    subtitle: "Выберите категорию",
    kitchen: "Кухня",
    bar: "Бар",
    more: "Состав",
    ingredients: "Состав:",
    warningTop: "ВНИМАНИЕ: бой посуды — 3 000 ₸ | порча имущества — от 10 000 ₸"
  },
  en: {
    service: "Service +15%",
    subtitle: "Choose a category",
    kitchen: "Kitchen",
    bar: "Bar",
    more: "Ingredients",
    ingredients: "Ingredients:",
    warningTop: "WARNING: broken dishes — 3 000 ₸ | property damage — from 10 000 ₸"
  }
};

const categoryGroups = {
  kitchen: [
    { id: "all", name: { kz: "Барлығы", ru: "Все", en: "All" } },
    { id: "salads", name: { kz: "Салаттар", ru: "Салаты", en: "Salads" } },
    { id: "pasta", name: { kz: "Паста", ru: "Паста", en: "Pasta" } },
    { id: "sauces", name: { kz: "Соустар", ru: "Соус", en: "Sauces" } },
    { id: "cold", name: { kz: "Салқын тағамдар", ru: "Холодные закуски", en: "Cold Starters" } },
    { id: "beer", name: { kz: "Сыраға тіскебасар", ru: "Закуски к пиву", en: "Beer Snacks" } },
    { id: "soups", name: { kz: "Бірінші тағамдар", ru: "Первые блюда", en: "First Courses" } },
    { id: "second", name: { kz: "Екінші тағамдар", ru: "Вторые блюда", en: "Main Dishes" } },
    { id: "steaks", name: { kz: "Стейктер", ru: "Стейки", en: "Steaks" } },
    { id: "garnish", name: { kz: "Гарнирлер", ru: "Гарниры", en: "Side Dishes" } },
    { id: "pizza", name: { kz: "Пицца", ru: "Пицца", en: "Pizza" } },
    { id: "rolls", name: { kz: "Суши ролл", ru: "Суши ролл", en: "Sushi Roll" } },
    { id: "shashlyk", name: { kz: "Шашлық", ru: "Шашлык", en: "Shashlik" } }
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
  // ===== КУХНЯ: САЛАТЫ =====
  makeItem({
    ru: "Греческий салат",
    kz: "Грек салаты",
    en: "Greek Salad",
    price: "2 290 ₸",
    category: "salads",
    image: "images/salad_greek.webp",
    ingKz: "Қияр, қызанақ, фета, зәйтүн.",
    ingRu: "Огурцы, помидоры, фета, оливки.",
    ingEn: "Cucumber, tomatoes, feta, olives."
  }),
  makeItem({
    ru: "Цезарь курица",
    kz: "Тауықпен Цезарь",
    en: "Chicken Caesar",
    price: "2 590 ₸",
    category: "salads",
    image: "images/salad_caesar_chicken.webp",
    ingKz: "Тауық, салат, сыр, сухари, соус.",
    ingRu: "Курица, салат, сыр, сухари, соус.",
    ingEn: "Chicken, lettuce, cheese, croutons, sauce."
  }),
  makeItem({
    ru: "Мужской каприз",
    kz: "Мужской каприз",
    en: "Мужской каприз",
    price: "2 390 ₸",
    category: "salads",
    image: placeholder,
    ingKz: "Қоспасы кейін қосылады.",
    ingRu: "Состав будет добавлен позже.",
    ingEn: "Ingredients will be added later."
  }),
  makeItem({
    ru: "Оливье",
    kz: "Оливье",
    en: "Olivier Salad",
    price: "2 000 ₸",
    category: "salads",
    image: "images/salad_olivie.webp",
    ingKz: "Картоп, сәбіз, жұмыртқа, қияр, майонез.",
    ingRu: "Картофель, морковь, яйцо, огурец, майонез.",
    ingEn: "Potato, carrot, egg, cucumber, mayonnaise."
  }),
  makeItem({
    ru: "Свежий салат",
    kz: "Жаңа салат",
    en: "Fresh Salad",
    price: "1 500 ₸",
    category: "salads",
    image: "images/Свежий салат.webp",
    ingKz: "Қияр, қызанақ, көк шөп.",
    ingRu: "Огурцы, помидоры, зелень.",
    ingEn: "Cucumber, tomatoes, greens."
  }),
  makeItem({
    ru: "Хрустящий баклажан",
    kz: "Қытырлақ баклажан",
    en: "Crispy Eggplant",
    price: "2 390 ₸",
    category: "salads",
    image: "images/salad_asian_eggplant.webp",
    ingKz: "Баклажан, көкөніс, соус.",
    ingRu: "Баклажан, овощи, соус.",
    ingEn: "Eggplant, vegetables, sauce."
  }),
  makeItem({
    ru: "Буррата с помидор",
    kz: "Буррата қызанақпен",
    en: "Burrata with Tomatoes",
    price: "3 850 ₸",
    category: "salads",
    image: placeholder,
    ingKz: "Буррата, қызанақ, зейтүн майы.",
    ingRu: "Буррата, помидоры, оливковое масло.",
    ingEn: "Burrata, tomatoes, olive oil."
  }),
  makeItem({
    ru: "Рукола с креветками",
    kz: "Креветкамен рукола",
    en: "Arugula with Shrimp",
    price: "3 000 ₸",
    category: "salads",
    image: "images/salad_rucola_shrimp.webp",
    ingKz: "Рукола, креветка, көкөніс, соус.",
    ingRu: "Рукола, креветки, овощи, соус.",
    ingEn: "Arugula, shrimp, vegetables, sauce."
  }),
  makeItem({
    ru: "Фруктовый салат",
    kz: "Жеміс салаты",
    en: "Fruit Salad",
    price: "2 200 ₸",
    category: "salads",
    image: "images/Фруктовый салат.webp",
    ingKz: "Жеміс ассорти.",
    ingRu: "Фруктовое ассорти.",
    ingEn: "Assorted fruits."
  }),
  makeItem({
    ru: "Салат от Шефа",
    kz: "Шеф салаты",
    en: "Chef Salad",
    price: "3 290 ₸",
    category: "salads",
    image: "images/Салат от шефа.webp",
    ingKz: "Фирмалық салат.",
    ingRu: "Фирменный салат.",
    ingEn: "Signature salad."
  }),

  // ===== КУХНЯ: ПАСТА =====
  makeItem({
    ru: "Альфредо",
    kz: "Альфредо паста",
    en: "Alfredo Pasta",
    price: "3 190 ₸",
    category: "pasta",
    image: "images/pasta_alfredo.webp",
    ingKz: "Паста, тауық еті, кілегейлі соус.",
    ingRu: "Паста, курица, сливочный соус.",
    ingEn: "Pasta, chicken, creamy sauce."
  }),
  makeItem({
    ru: "Болоньезе",
    kz: "Болоньезе паста",
    en: "Bolognese Pasta",
    price: "3 190 ₸",
    category: "pasta",
    image: "images/Bolognese Pasta.webp",
    ingKz: "Паста, фарш, томат соусы.",
    ingRu: "Паста, фарш, томатный соус.",
    ingEn: "Pasta, minced meat, tomato sauce."
  }),
  makeItem({
    ru: "Курица с грибами",
    kz: "Саңырауқұлақпен тауық паста",
    en: "Chicken with Mushrooms Pasta",
    price: "2 790 ₸",
    category: "pasta",
    image: "images/chicken_mushroom_cream.webp",
    ingKz: "Паста, тауық еті, саңырауқұлақ, кілегейлі соус.",
    ingRu: "Паста, курица, грибы, сливочный соус.",
    ingEn: "Pasta, chicken, mushrooms, creamy sauce."
  }),
  makeItem({
    ru: "Паста с лососем",
    kz: "Лосось паста",
    en: "Salmon Pasta",
    price: "3 490 ₸",
    category: "pasta",
    image: placeholder,
    ingKz: "Паста, лосось, кілегейлі соус.",
    ingRu: "Паста, лосось, сливочный соус.",
    ingEn: "Pasta, salmon, creamy sauce."
  }),

  // ===== КУХНЯ: СОУС =====
  makeItem({
    ru: "Тар тар",
    kz: "Тар тар соусы",
    en: "Tartar Sauce",
    price: "450 ₸",
    category: "sauces",
    image: placeholder,
    ingKz: "Тар тар соусы.",
    ingRu: "Соус тар тар.",
    ingEn: "Tartar sauce."
  }),
  makeItem({
    ru: "Сырный",
    kz: "Сыр соусы",
    en: "Cheese Sauce",
    price: "450 ₸",
    category: "sauces",
    image: "images/sauce_cheese.webp",
    ingKz: "Сыр соусы.",
    ingRu: "Сырный соус.",
    ingEn: "Cheese sauce."
  }),
  makeItem({
    ru: "Кетчуп",
    kz: "Кетчуп",
    en: "Ketchup",
    price: "450 ₸",
    category: "sauces",
    image: placeholder,
    ingKz: "Кетчуп соусы.",
    ingRu: "Кетчуп.",
    ingEn: "Ketchup."
  }),
  makeItem({
    ru: "Майонез",
    kz: "Майонез",
    en: "Mayonnaise",
    price: "450 ₸",
    category: "sauces",
    image: placeholder,
    ingKz: "Майонез.",
    ingRu: "Майонез.",
    ingEn: "Mayonnaise."
  }),
  makeItem({
    ru: "BBQ-соус",
    kz: "BBQ соусы",
    en: "BBQ Sauce",
    price: "500 ₸",
    category: "sauces",
    image: placeholder,
    ingKz: "BBQ соусы.",
    ingRu: "Соус BBQ.",
    ingEn: "BBQ sauce."
  }),

  // ===== КУХНЯ: ХОЛОДНЫЕ ЗАКУСКИ =====
  makeItem({
    ru: "Мясная нарезка",
    kz: "Ет нарезкасы",
    en: "Meat Platter",
    price: "6 490 ₸",
    category: "cold",
    image: "images/Мясной.webp",
    ingKz: "Ет ассорти, қазы, шұжық, көкөніс.",
    ingRu: "Мясное ассорти, казы, колбаса, овощи.",
    ingEn: "Assorted meat, kazy, sausage, vegetables."
  }),
  makeItem({
    ru: "Сырная тарелка",
    kz: "Сыр тарелкасы",
    en: "Cheese Plate",
    price: "4 590 ₸",
    category: "cold",
    image: placeholder,
    ingKz: "Сыр ассорти.",
    ingRu: "Ассорти сыров.",
    ingEn: "Assorted cheeses."
  }),
  makeItem({
    ru: "Овощная нарезка",
    kz: "Көкөніс нарезкасы",
    en: "Vegetable Platter",
    price: "3 790 ₸",
    category: "cold",
    image: "images/Нарезка из овощей.webp",
    ingKz: "Көкөніс ассорти.",
    ingRu: "Ассорти из свежих овощей.",
    ingEn: "Assorted fresh vegetables."
  }),
  makeItem({
    ru: "Фруктовое ассорти",
    kz: "Жеміс ассорти",
    en: "Fruit Platter",
    price: "6 590 ₸",
    category: "cold",
    image: "images/fruit_assorti.webp",
    ingKz: "Маусымдық жемістер.",
    ingRu: "Сезонные фрукты.",
    ingEn: "Seasonal fruits."
  }),
  makeItem({
    ru: "Соленья микс",
    kz: "Тұздалған көкөністер микс",
    en: "Pickles Mix",
    price: "3 990 ₸",
    category: "cold",
    image: "images/Соленья.webp",
    ingKz: "Тұздалған көкөністер ассорти.",
    ingRu: "Ассорти из солений.",
    ingEn: "Assorted pickled vegetables."
  }),

  // ===== КУХНЯ: ЗАКУСКИ К ПИВУ =====
  makeItem({
    ru: "Сет (похрустим)",
    kz: "Сет (қытырлақ)",
    en: "Crunch Set",
    price: "5 390 ₸",
    category: "beer",
    image: "images/Сет по хрустим.webp",
    ingKz: "Пиволық закуска ассорти.",
    ingRu: "Ассорти закусок к пиву.",
    ingEn: "Assorted beer snacks."
  }),
  makeItem({
    ru: "Сельдь по русский",
    kz: "Орысша сельдь",
    en: "Russian-Style Herring",
    price: "3 900 ₸",
    category: "beer",
    image: "images/Сельдь по-русски.webp",
    ingKz: "Сельдь, картоп, пияз.",
    ingRu: "Сельдь, картофель, лук.",
    ingEn: "Herring, potatoes, onion."
  }),
  makeItem({
    ru: "Креветки к пиву",
    kz: "Сыраға креветка",
    en: "Shrimp for Beer",
    price: "2 900 ₸",
    category: "beer",
    image: "images/Криветки.webp",
    ingKz: "Креветка, лимон, соус.",
    ingRu: "Креветки, лимон, соус.",
    ingEn: "Shrimp, lemon, sauce."
  }),
  makeItem({
    ru: "Колбаски",
    kz: "Колбаски",
    en: "Sausages",
    price: "2 990 ₸",
    category: "beer",
    image: "images/Калбоски.webp",
    ingKz: "Гриль колбаски.",
    ingRu: "Колбаски гриль.",
    ingEn: "Grilled sausages."
  }),
  makeItem({
    ru: "Наггетсы",
    kz: "Наггетсы",
    en: "Nuggets",
    price: "1 500 ₸",
    category: "beer",
    image: "images/nuggets.webp",
    ingKz: "Тауық наггетсы, соус.",
    ingRu: "Куриные наггетсы, соус.",
    ingEn: "Chicken nuggets, sauce."
  }),
  makeItem({
    ru: "Пивной сет Классика",
    kz: "Классика сыра сеті",
    en: "Classic Beer Set",
    price: "3 900 ₸",
    category: "beer",
    image: placeholder,
    ingKz: "Пиволық закуска классика сеті.",
    ingRu: "Классический пивной сет.",
    ingEn: "Classic beer snack set."
  }),

  // ===== КУХНЯ: ПЕРВЫЕ БЛЮДА =====
  makeItem({
    ru: "Пельменный суп",
    kz: "Пельмен сорпасы",
    en: "Dumpling Soup",
    price: "1 600 ₸",
    category: "soups",
    image: placeholder,
    ingKz: "Пельмен, сорпа, көкөніс.",
    ingRu: "Пельмени, бульон, овощи.",
    ingEn: "Dumplings, broth, vegetables."
  }),
  makeItem({
    ru: "Суп куриная лапша",
    kz: "Тауық кеспе сорпасы",
    en: "Chicken Noodle Soup",
    price: "1 600 ₸",
    category: "soups",
    image: placeholder,
    ingKz: "Тауық еті, кеспе, сорпа.",
    ingRu: "Курица, лапша, бульон.",
    ingEn: "Chicken, noodles, broth."
  }),
  makeItem({
    ru: "Чечевичный суп",
    kz: "Жасымық сорпасы",
    en: "Lentil Soup",
    price: "1 500 ₸",
    category: "soups",
    image: placeholder,
    ingKz: "Жасымық, көкөніс, дәмдеуіштер.",
    ingRu: "Чечевица, овощи, специи.",
    ingEn: "Lentils, vegetables, spices."
  }),
  makeItem({
    ru: "Суп грибной крем",
    kz: "Саңырауқұлақ крем сорпасы",
    en: "Mushroom Cream Soup",
    price: "1 690 ₸",
    category: "soups",
    image: placeholder,
    ingKz: "Саңырауқұлақ, кілегей, сорпа.",
    ingRu: "Грибы, сливки, бульон.",
    ingEn: "Mushrooms, cream, broth."
  }),
  makeItem({
    ru: "Том ям",
    kz: "Том ям",
    en: "Tom Yum",
    price: "3 190 ₸",
    category: "soups",
    image: placeholder,
    ingKz: "Кокос сүті, қарақұйрық, лемонграсс.",
    ingRu: "Кокосовое молоко, креветки, лемонграсс.",
    ingEn: "Coconut milk, shrimp, lemongrass."
  }),
  makeItem({
    ru: "Рамен из курицы",
    kz: "Тауықпен рамен",
    en: "Chicken Ramen",
    price: "2 390 ₸",
    category: "soups",
    image: "images/ramen_chicken.webp",
    ingKz: "Рамен, тауық еті, жұмыртқа.",
    ingRu: "Рамен, курица, яйцо.",
    ingEn: "Ramen, chicken, egg."
  }),
  makeItem({
    ru: "Рамен из говядины",
    kz: "Сиыр етімен рамен",
    en: "Beef Ramen",
    price: "2 690 ₸",
    category: "soups",
    image: "images/ramen_beef.webp",
    ingKz: "Рамен, сиыр еті, жұмыртқа.",
    ingRu: "Рамен, говядина, яйцо.",
    ingEn: "Ramen, beef, egg."
  }),
  makeItem({
    ru: "Солянка",
    kz: "Солянка",
    en: "Solyanka",
    price: "2 090 ₸",
    category: "soups",
    image: placeholder,
    ingKz: "Ет, шұжық, зәйтүн, лимон.",
    ingRu: "Мясо, колбаса, оливки, лимон.",
    ingEn: "Meat, sausage, olives, lemon."
  }),
  makeItem({
    ru: "Гуйру лагман",
    kz: "Гуйру лағман",
    en: "Guiru Lagman",
    price: "1 890 ₸",
    category: "soups",
    image: placeholder,
    ingKz: "Қолмен жайылған кеспе, ет, көкөніс.",
    ingRu: "Лагман тянутый, мясо, овощи.",
    ingEn: "Hand-pulled noodles, meat, vegetables."
  }),
  makeItem({
    ru: "Шурпа из говядины",
    kz: "Сиыр етінен шурпа",
    en: "Beef Shurpa",
    price: "1 990 ₸",
    category: "soups",
    image: "images/shurpa-iz-govyadiny.webp",
    ingKz: "Сиыр еті, көкөніс, сорпа.",
    ingRu: "Говядина, овощи, бульон.",
    ingEn: "Beef, vegetables, broth."
  }),

  // ===== КУХНЯ: ВТОРЫЕ БЛЮДА =====
  makeItem({
    ru: "Телятина с овощами",
    kz: "Көкөніспен телятина",
    en: "Veal with Vegetables",
    price: "2 290 ₸",
    category: "second",
    image: "images/telyatina-s-ovoshami.webp",
    ingKz: "Бұзау еті, көкөністер.",
    ingRu: "Телятина, овощи.",
    ingEn: "Veal, vegetables."
  }),
  makeItem({
    ru: "Курица с овощами",
    kz: "Көкөніспен тауық",
    en: "Chicken with Vegetables",
    price: "2 090 ₸",
    category: "second",
    image: "images/kurinoe-file-s-ovoshami.webp",
    ingKz: "Тауық еті, көкөністер.",
    ingRu: "Курица, овощи.",
    ingEn: "Chicken, vegetables."
  }),
  makeItem({
    ru: "Чахохбили",
    kz: "Чахохбили",
    en: "Chakhokhbili",
    price: "2 190 ₸",
    category: "second",
    image: placeholder,
    ingKz: "Тауық еті, қызанақ, дәмдеуіштер.",
    ingRu: "Курица, томаты, специи.",
    ingEn: "Chicken, tomatoes, spices."
  }),
  makeItem({
    ru: "Бефстроганов",
    kz: "Бефстроганов",
    en: "Beef Stroganoff",
    price: "2 490 ₸",
    category: "second",
    image: placeholder,
    ingKz: "Сиыр еті, кілегейлі соус, саңырауқұлақ.",
    ingRu: "Говядина, сливочный соус, грибы.",
    ingEn: "Beef, creamy sauce, mushrooms."
  }),
  makeItem({
    ru: "Курица в соусе",
    kz: "Соустағы тауық",
    en: "Chicken in Sauce",
    price: "2 390 ₸",
    category: "second",
    image: "images/chicken_mushroom_cream.webp",
    ingKz: "Тауық еті, соус.",
    ingRu: "Курица в соусе.",
    ingEn: "Chicken in sauce."
  }),
  makeItem({
    ru: "Куырдак из говядины",
    kz: "Сиыр етінен қуырдақ",
    en: "Beef Kuyrdak",
    price: "3 990 ₸",
    category: "second",
    image: "images/kuyrdak_gaviadina.webp",
    ingKz: "Сиыр етінен қуырдақ.",
    ingRu: "Куырдак из говядины.",
    ingEn: "Beef kuyrdak."
  }),
  makeItem({
    ru: "Куырдак из баранины",
    kz: "Қой етінен қуырдақ",
    en: "Lamb Kuyrdak",
    price: "4 090 ₸",
    category: "second",
    image: "images/kuyrdak_baranina.webp",
    ingKz: "Қой етінен қуырдақ.",
    ingRu: "Куырдак из баранины.",
    ingEn: "Lamb kuyrdak."
  }),
  makeItem({
    ru: "Лагман Цомян",
    kz: "Лағман Цомян",
    en: "Lagman Tsomyan",
    price: "2 190 ₸",
    category: "second",
    image: "images/tsomyan.png",
    ingKz: "Лағман, ет, көкөніс.",
    ingRu: "Лагман, мясо, овощи.",
    ingEn: "Lagman, meat, vegetables."
  }),

  // ===== КУХНЯ: СТЕЙКИ =====
  makeItem({
    ru: "Рибай",
    kz: "Рибай стейк",
    en: "Ribeye",
    price: "5 990 ₸",
    category: "steaks",
    image: "images/steak_ribeye.webp",
    ingKz: "Рибай стейк.",
    ingRu: "Стейк рибай.",
    ingEn: "Ribeye steak."
  }),
  makeItem({
    ru: "Тибон",
    kz: "Тибон стейк",
    en: "T-Bone",
    price: "5 990 ₸",
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
    price: "4 990 ₸",
    category: "steaks",
    image: "images/Медальон.webp",
    ingKz: "Ет медальоны, көкөністер.",
    ingRu: "Мясные медальоны, овощи.",
    ingEn: "Meat medallions, vegetables."
  }),
  makeItem({
    ru: "Куриный стейк с овощами",
    kz: "Тауық стейкі көкөніспен",
    en: "Chicken Steak with Vegetables",
    price: "4 090 ₸",
    category: "steaks",
    image: placeholder,
    ingKz: "Тауық стейк, көкөністер.",
    ingRu: "Куриный стейк, овощи.",
    ingEn: "Chicken steak, vegetables."
  }),
  makeItem({
    ru: "Стейк из лосося",
    kz: "Лосось стейкі",
    en: "Salmon Steak",
    price: "5 990 ₸",
    category: "steaks",
    image: "images/steyk-iz-lososya.webp",
    ingKz: "Лосось стейк.",
    ingRu: "Стейк из лосося.",
    ingEn: "Salmon steak."
  }),

  // ===== КУХНЯ: ГАРНИРЫ =====
  makeItem({
    ru: "Рис с овощами",
    kz: "Көкөніспен күріш",
    en: "Rice with Vegetables",
    price: "1 090 ₸",
    category: "garnish",
    image: "images/ris.webp",
    ingKz: "Күріш, көкөніс.",
    ingRu: "Рис, овощи.",
    ingEn: "Rice, vegetables."
  }),
  makeItem({
    ru: "Овощи на гриле",
    kz: "Гриль көкөністер",
    en: "Grilled Vegetables",
    price: "1 290 ₸",
    category: "garnish",
    image: "images/ovoshchi-na-grile.webp",
    ingKz: "Гриль көкөністер.",
    ingRu: "Овощи на гриле.",
    ingEn: "Grilled vegetables."
  }),
  makeItem({
    ru: "Фри",
    kz: "Картоп фри",
    en: "French Fries",
    price: "950 ₸",
    category: "garnish",
    image: "images/fri.webp",
    ingKz: "Картоп фри.",
    ingRu: "Картофель фри.",
    ingEn: "French fries."
  }),
  makeItem({
    ru: "Дольки",
    kz: "Картоп дольки",
    en: "Potato Wedges",
    price: "950 ₸",
    category: "garnish",
    image: "images/dolki.webp",
    ingKz: "Картоп дольки.",
    ingRu: "Картофельные дольки.",
    ingEn: "Potato wedges."
  }),

  // ===== КУХНЯ: ПИЦЦА =====
  makeItem({
    ru: "Пепперони",
    kz: "Пепперони пицца",
    en: "Pepperoni",
    price: "3 090 ₸",
    category: "pizza",
    image: "images/peperoni.webp",
    ingKz: "Пепперони, моцарелла, томат соусы.",
    ingRu: "Пепперони, моцарелла, томатный соус.",
    ingEn: "Pepperoni, mozzarella, tomato sauce."
  }),
  makeItem({
    ru: "Маргарита",
    kz: "Маргарита пицца",
    en: "Margherita",
    price: "2 800 ₸",
    category: "pizza",
    image: placeholder,
    ingKz: "Моцарелла, қызанақ, базилик.",
    ingRu: "Моцарелла, томаты, базилик.",
    ingEn: "Mozzarella, tomatoes, basil."
  }),
  makeItem({
    ru: "Болоньезе",
    kz: "Болоньезе пицца",
    en: "Bolognese Pizza",
    price: "3 190 ₸",
    category: "pizza",
    image: "images/pizza_bolognese.webp",
    ingKz: "Фарш, томат соусы, сыр.",
    ingRu: "Фарш, томатный соус, сыр.",
    ingEn: "Minced meat, tomato sauce, cheese."
  }),
  makeItem({
    ru: "Казахстан",
    kz: "Қазақстан пицца",
    en: "Kazakhstan Pizza",
    price: "3 490 ₸",
    category: "pizza",
    image: "images/pizza_kazakhstan.webp",
    ingKz: "Қазы, сыр, томат соусы.",
    ingRu: "Казы, сыр, томатный соус.",
    ingEn: "Kazy, cheese, tomato sauce."
  }),
  makeItem({
    ru: "Курица с грибами",
    kz: "Саңырауқұлақпен тауық пицца",
    en: "Chicken with Mushrooms Pizza",
    price: "3 000 ₸",
    category: "pizza",
    image: placeholder,
    ingKz: "Тауық еті, саңырауқұлақ, сыр.",
    ingRu: "Курица, грибы, сыр.",
    ingEn: "Chicken, mushrooms, cheese."
  }),
  makeItem({
    ru: "Пицца с лососем",
    kz: "Лосось пицца",
    en: "Salmon Pizza",
    price: "3 300 ₸",
    category: "pizza",
    image: placeholder,
    ingKz: "Лосось, кілегейлі соус, сыр.",
    ingRu: "Лосось, сливочный соус, сыр.",
    ingEn: "Salmon, creamy sauce, cheese."
  }),
  makeItem({
    ru: "Хачапури по Аджарски",
    kz: "Аджарлық хачапури",
    en: "Adjarian Khachapuri",
    price: "3 000 ₸",
    category: "pizza",
    image: placeholder,
    ingKz: "Хачапури, жұмыртқа, сыр.",
    ingRu: "Хачапури, яйцо, сыр.",
    ingEn: "Khachapuri, egg, cheese."
  }),
  makeItem({
    ru: "Хачапури по Мегрельски",
    kz: "Мегрелдік хачапури",
    en: "Megrelian Khachapuri",
    price: "3 000 ₸",
    category: "pizza",
    image: placeholder,
    ingKz: "Хачапури, сыр.",
    ingRu: "Хачапури, сыр.",
    ingEn: "Khachapuri, cheese."
  }),
  makeItem({
    ru: "Хлебная корзинка",
    kz: "Нан себеті",
    en: "Bread Basket",
    price: "1 190 ₸",
    category: "pizza",
    image: placeholder,
    ingKz: "Нан, соус.",
    ingRu: "Хлеб, соус.",
    ingEn: "Bread, sauce."
  }),
  makeItem({
    ru: "Лепешка",
    kz: "Жалпақ нан",
    en: "Flatbread",
    price: "300 ₸",
    category: "pizza",
    image: placeholder,
    ingKz: "Жалпақ нан.",
    ingRu: "Лепешка.",
    ingEn: "Flatbread."
  }),

  // ===== КУХНЯ: СУШИ РОЛЛ =====
  makeItem({
    ru: "Филадельфия",
    kz: "Филадельфия ролл",
    en: "Philadelphia Roll",
    price: "3 290 ₸",
    category: "rolls",
    image: "images/roll_philadelphia.webp",
    ingKz: "Лосось, күріш, сыр, нори.",
    ingRu: "Лосось, рис, сыр, нори.",
    ingEn: "Salmon, rice, cheese, nori."
  }),
  makeItem({
    ru: "Канада",
    kz: "Канада ролл",
    en: "Canada Roll",
    price: "3 400 ₸",
    category: "rolls",
    image: placeholder,
    ingKz: "Крабы, авокадо, күріш.",
    ingRu: "Краб, авокадо, рис.",
    ingEn: "Crab, avocado, rice."
  }),
  makeItem({
    ru: "Сливочный с лососем",
    kz: "Лосось кілегейлі ролл",
    en: "Creamy Salmon Roll",
    price: "2 890 ₸",
    category: "rolls",
    image: placeholder,
    ingKz: "Лосось, кілегейлі соус, күріш.",
    ingRu: "Лосось, сливочный соус, рис.",
    ingEn: "Salmon, creamy sauce, rice."
  }),
  makeItem({
    ru: "Сливочный с угрем",
    kz: "Жылан балық кілегейлі ролл",
    en: "Creamy Eel Roll",
    price: "3 200 ₸",
    category: "rolls",
    image: placeholder,
    ingKz: "Жылан балық, кілегейлі соус, күріш.",
    ingRu: "Угорь, сливочный соус, рис.",
    ingEn: "Eel, creamy sauce, rice."
  }),
  makeItem({
    ru: "Цезарь",
    kz: "Цезарь ролл",
    en: "Caesar Roll",
    price: "3 290 ₸",
    category: "rolls",
    image: "images/roll_caesar_fried.webp",
    ingKz: "Тауық еті, күріш, сыр, соус.",
    ingRu: "Курица, рис, сыр, соус.",
    ingEn: "Chicken, rice, cheese, sauce."
  }),
  makeItem({
    ru: "Унаги темпура",
    kz: "Унаги темпура ролл",
    en: "Unagi Tempura Roll",
    price: "2 900 ₸",
    category: "rolls",
    image: "images/roll_unagi_tempura.webp",
    ingKz: "Унаги темпура ролл.",
    ingRu: "Ролл унаги темпура.",
    ingEn: "Unagi tempura roll."
  }),
  makeItem({
    ru: "Америка с лососем",
    kz: "Лосось Америка ролл",
    en: "America with Salmon Roll",
    price: "3 890 ₸",
    category: "rolls",
    image: "images/roll_america_tempura.webp",
    ingKz: "Лосось, темпура, күріш.",
    ingRu: "Лосось, темпура, рис.",
    ingEn: "Salmon, tempura, rice."
  }),
  makeItem({
    ru: "Запеченная лосось",
    kz: "Піскен лосось ролл",
    en: "Baked Salmon Roll",
    price: "3 690 ₸",
    category: "rolls",
    image: placeholder,
    ingKz: "Піскен лосось, күріш, нори.",
    ingRu: "Запечённый лосось, рис, нори.",
    ingEn: "Baked salmon, rice, nori."
  }),
  makeItem({
    ru: "Запеченная угорь",
    kz: "Піскен жылан балық ролл",
    en: "Baked Eel Roll",
    price: "3 690 ₸",
    category: "rolls",
    image: placeholder,
    ingKz: "Піскен жылан балық, күріш, нори.",
    ingRu: "Запечённый угорь, рис, нори.",
    ingEn: "Baked eel, rice, nori."
  }),

  // ===== КУХНЯ: ШАШЛЫК =====
  makeItem({
    ru: "Люля кебаб",
    kz: "Люля кебаб",
    en: "Lula Kebab",
    price: "1 150 ₸",
    category: "shashlyk",
    image: "images/lyulya-kebab.webp",
    ingKz: "Люля кебаб.",
    ingRu: "Люля кебаб.",
    ingEn: "Lula kebab."
  }),
  makeItem({
    ru: "Окорочка",
    kz: "Тауық санынан шашлык",
    en: "Chicken Leg Shashlik",
    price: "1 100 ₸",
    category: "shashlyk",
    image: "images/okorochka-kebab.webp",
    ingKz: "Тауық окорочка.",
    ingRu: "Куриные окорочка.",
    ingEn: "Chicken legs."
  }),
  makeItem({
    ru: "Кусковой говядина",
    kz: "Сиыр етінен шашлык",
    en: "Beef Shashlik",
    price: "1 300 ₸",
    category: "shashlyk",
    image: "images/kuskovaya-govyadina.webp",
    ingKz: "Сиыр етінен шашлык.",
    ingRu: "Шашлык из говядины.",
    ingEn: "Beef shashlik."
  }),
  makeItem({
    ru: "Печень",
    kz: "Бауыр шашлык",
    en: "Liver Shashlik",
    price: "950 ₸",
    category: "shashlyk",
    image: "images/pechen-v-obolochke-kebab.webp",
    ingKz: "Бауыр шашлык.",
    ingRu: "Шашлык из печени.",
    ingEn: "Liver shashlik."
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
    image: "images/Schweppes Tonic.png",
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
    category: "beer",
    image: "images/Сет по хрустим.webp",
    ingKz: "Пиволық закуска ассорти.",
    ingRu: "Ассорти закусок к пиву.",
    ingEn: "Assorted beer snacks."
  }),
  makeItem({
    ru: "Сет «Добрый»",
    en: "Dobry Set",
    price: "7 000 ₸",
    category: "beer",
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
    category: "beer",
    image:  "images/Криветки.webp",
    ingKz: "Креветка, лимон, соус.",
    ingRu: "Креветки, лимон, соус.",
    ingEn: "Shrimp, lemon, sauce."
  }),
  makeItem({
    ru: "Колбаски",
    en: "Sausages",
    price: "3 000 ₸",
    category: "beer",
    image:  "images/Калбоски.webp",
    ingKz: "Гриль колбаски.",
    ingRu: "Колбаски гриль.",
    ingEn: "Grilled sausages."
  }),
  makeItem({
    ru: "Наггетсы",
    en: "Nuggets",
    price: "1 500 ₸",
    category: "beer",
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

function getText(value) {
  if (value && typeof value === "object") {
    return value[currentLang] || value.ru || value.kz || value.en || "";
  }

  return value || "";
}

function setText(id, value) {
  const el = document.getElementById(id);
  if (el) el.textContent = value;
}

function updateStaticText() {
  setText("serviceText", text[currentLang].service);
  setText("subtitle", text[currentLang].subtitle);
  setText("kitchenTab", text[currentLang].kitchen);
  setText("barTab", text[currentLang].bar);
  setText("ingredientsTitle", text[currentLang].ingredients);
  setText("warningTopText", text[currentLang].warningTop);

  document.documentElement.lang = currentLang;

  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.lang === currentLang);
  });

  document.querySelectorAll(".menu-tab").forEach(tab => {
    tab.classList.toggle("active", tab.dataset.type === activeType);
  });
}

function renderCategories() {
  if (!categoriesBox) return;

  const categories = categoryGroups[activeType] || [];

  categoriesBox.innerHTML = categories.map(cat => `
    <button class="category-btn ${cat.id === activeCategory ? "active" : ""}" data-id="${cat.id}">
      ${getText(cat.name)}
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
  if (!menuGrid) return;

  const currentCategoryIds = (categoryGroups[activeType] || [])
    .filter(cat => cat.id !== "all")
    .map(cat => cat.id);

  const filtered = menuItems.filter(item => {
    if (activeCategory === "all") return currentCategoryIds.includes(item.category);
    return item.category === activeCategory;
  });

  if (!filtered.length) {
    menuGrid.innerHTML = `
      <div class="empty-menu">
        ${currentLang === "ru" ? "В этой категории пока нет позиций." :
          currentLang === "en" ? "There are no items in this category yet." :
          "Бұл категорияда әзірге позициялар жоқ."}
      </div>
    `;
    return;
  }

  menuGrid.innerHTML = filtered.map(item => {
    const itemIndex = menuItems.indexOf(item);
    const itemName = getText(item.name);
    const itemPrice = getText(item.price);

    return `
      <div class="card">
        <img src="${item.image}" alt="${itemName}" loading="lazy" onerror="this.src='${placeholder}'">
        <div class="card-body">
          <h3>${itemName}</h3>
          <div class="price">${itemPrice}</div>
          <button class="more-btn" onclick="openModal(${itemIndex})">
            ${text[currentLang].more}
          </button>
        </div>
      </div>
    `;
  }).join("");
}

function openModal(index) {
  const item = menuItems[index];
  if (!item || !modal) return;

  if (modalImg) {
    modalImg.src = item.image || placeholder;
    modalImg.onerror = () => {
      modalImg.src = placeholder;
    };
  }

  if (modalTitle) modalTitle.textContent = getText(item.name);
  if (modalPrice) modalPrice.textContent = getText(item.price);
  if (modalIngredients) modalIngredients.textContent = getText(item.ingredients);

  modal.classList.add("active");
}

if (closeModal && modal) {
  closeModal.addEventListener("click", () => {
    modal.classList.remove("active");
  });
}

if (modal) {
  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.classList.remove("active");
  });
}

document.querySelectorAll(".menu-tab").forEach(tab => {
  tab.addEventListener("click", () => {
    activeType = tab.dataset.type || "kitchen";
    activeCategory = "all";

    updateStaticText();
    renderCategories();
    renderMenu();
  });
});

document.querySelectorAll(".lang-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    currentLang = btn.dataset.lang || "kz";
    localStorage.setItem("voxMenuLang", currentLang);

    updateStaticText();
    renderCategories();
    renderMenu();
  });
});

const savedLang = localStorage.getItem("voxMenuLang");
if (savedLang && text[savedLang]) {
  currentLang = savedLang;
}

updateStaticText();
renderCategories();
renderMenu();
