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
    { id: "tea", name: { kz: "Шай", ru: "Чай", en: "Tea" } },
    { id: "water", name: { kz: "Су", ru: "Минеральная вода", en: "Water" } },
    { id: "cocktails", name: { kz: "Коктейльдер", ru: "Коктейли", en: "Cocktails" } },
    { id: "wine", name: { kz: "Шараптар", ru: "Вина", en: "Wines" } },
    { id: "beer_bar", name: { kz: "Сыра", ru: "Пиво", en: "Beer" } },
    { id: "vodka", name: { kz: "Водка", ru: "Водка", en: "Vodka" } },
    { id: "whiskey", name: { kz: "Виски", ru: "Виски", en: "Whiskey" } },
    { id: "rum", name: { kz: "Ром", ru: "Ром", en: "Rum" } },
    { id: "tequila", name: { kz: "Текила", ru: "Текила", en: "Tequila" } },
    { id: "liqueur", name: { kz: "Ликерлер", ru: "Ликеры", en: "Liqueurs" } }
  ]
};

const menuItems = [
  {
    name: { kz: "Мясная нарезка", ru: "Мясная нарезка", en: "Meat Platter" },
    price: "7 000 ₸",
    category: "cold",
    image: placeholder,
    ingredients: { kz: "Ет ассорти, қазы, шұжық, көкөніс.", ru: "Мясное ассорти, казы, колбаса, овощи.", en: "Assorted meat, kazy, sausage, vegetables." }
  },
  {
    name: { kz: "Көкөніс нарезкасы", ru: "Нарезка из овощей", en: "Vegetable Platter" },
    price: "5 000 ₸",
    category: "cold",
    image: placeholder,
    ingredients: { kz: "Көкөніс ассорти.", ru: "Ассорти из свежих овощей.", en: "Assorted fresh vegetables." }
  },
  {
    name: { kz: "Сельдь по-русски", ru: "Сельдь по-русски", en: "Russian-Style Herring" },
    price: "5 000 ₸",
    category: "cold",
    image: placeholder,
    ingredients: { kz: "Сельдь, картоп, пияз.", ru: "Сельдь, картофель, лук.", en: "Herring, potatoes, onion." }
  },
  {
    name: { kz: "Тұздалған көкөністер", ru: "Соленья", en: "Pickles" },
    price: "4 500 ₸",
    category: "cold",
    image: placeholder,
    ingredients: { kz: "Тұздалған көкөністер.", ru: "Ассорти из солений.", en: "Assorted pickled vegetables." }
  },
  {
    name: { kz: "Жеміс ассорти", ru: "Фруктовое ассорти", en: "Fruit Platter" },
    price: "8 000 ₸",
    category: "cold",
    image: "images/fruit_assorti.png",
    ingredients: { kz: "Маусымдық жемістер.", ru: "Сезонные фрукты.", en: "Seasonal fruits." }
  },

  {
    name: { kz: "Шеф салаты", ru: "Салат от шефа", en: "Chef Salad" },
    price: "4 000 ₸",
    category: "salads",
    image: placeholder,
    ingredients: { kz: "Фирмалық салат.", ru: "Фирменный салат.", en: "Signature salad." }
  },
  {
    name: { kz: "Грек салаты", ru: "Греческий", en: "Greek Salad" },
    price: "2 000 ₸",
    category: "salads",
    image: "images/salad_greek.jpg",
    ingredients: { kz: "Қияр, қызанақ, фета, зәйтүн.", ru: "Огурцы, помидоры, фета, оливки.", en: "Cucumber, tomatoes, feta, olives." }
  },
  {
    name: { kz: "Сытный папа", ru: "Сытный папа", en: "Hearty Papa" },
    price: "3 000 ₸",
    category: "salads",
    image: "images/salad_sytyi_papa.png",
    ingredients: { kz: "Ет, картоп, жұмыртқа, көкөніс.", ru: "Мясо, картофель, яйцо, овощи.", en: "Meat, potatoes, egg, vegetables." }
  },
  {
    name: { kz: "Баклажанмен азиялық салат", ru: "Азиатский с баклажанами", en: "Asian Eggplant Salad" },
    price: "3 000 ₸",
    category: "salads",
    image: "images/salad_asian_eggplant.jpg",
    ingredients: { kz: "Баклажан, көкөніс, азиялық соус.", ru: "Баклажан, овощи, азиатский соус.", en: "Eggplant, vegetables, Asian sauce." }
  },
  {
    name: { kz: "Тауықпен Цезарь", ru: "Цезарь с курицей", en: "Chicken Caesar" },
    price: "3 000 ₸",
    category: "salads",
    image: "images/salad_caesar_chicken.jpg",
    ingredients: { kz: "Тауық, салат, сыр, сухари, соус.", ru: "Курица, салат, сыр, сухари, соус.", en: "Chicken, lettuce, cheese, croutons, sauce." }
  },
  {
    name: { kz: "Оливье", ru: "Оливье", en: "Olivier Salad" },
    price: "2 500 ₸",
    category: "salads",
    image: "images/salad_olivie.jpg",
    ingredients: { kz: "Картоп, сәбіз, жұмыртқа, қияр, майонез.", ru: "Картофель, морковь, яйцо, огурец, майонез.", en: "Potato, carrot, egg, cucumber, mayonnaise." }
  },
  {
    name: { kz: "Креветкамен рукола", ru: "Рукола с креветками", en: "Arugula with Shrimp" },
    price: "4 000 ₸",
    category: "salads",
    image: "images/salad_rucola_shrimp.jpg",
    ingredients: { kz: "Рукола, креветка, көкөніс, соус.", ru: "Рукола, креветки, овощи, соус.", en: "Arugula, shrimp, vegetables, sauce." }
  },
  {
    name: { kz: "Үйше жаңа салат", ru: "Свежий по-домашнему", en: "Fresh Homemade Salad" },
    price: "2 000 ₸",
    category: "salads",
    image: placeholder,
    ingredients: { kz: "Қияр, қызанақ, көк шөп.", ru: "Огурцы, помидоры, зелень.", en: "Cucumber, tomatoes, greens." }
  },
  {
    name: { kz: "Жеміс салаты", ru: "Фруктовый", en: "Fruit Salad" },
    price: "4 000 ₸",
    category: "salads",
    image: "images/fruit_assorti.png",
    ingredients: { kz: "Жеміс ассорти.", ru: "Фруктовое ассорти.", en: "Assorted fruits." }
  },

  {
    name: { kz: "Сет «Похрустим»", ru: "Сет «Похрустим»", en: "Crunch Set" },
    price: "6 000 ₸",
    category: "beer",
    image: "images/snack_samsa_baursak_pelmeni.png",
    ingredients: { kz: "Пиволық закуска ассорти.", ru: "Ассорти закусок к пиву.", en: "Assorted beer snacks." }
  },
  {
    name: { kz: "Сет «Добрый»", ru: "Сет «Добрый»", en: "Dobry Set" },
    price: "7 000 ₸",
    category: "beer",
    image: placeholder,
    ingredients: { kz: "Пиволық закуска ассорти.", ru: "Ассорти закусок к пиву.", en: "Assorted beer snacks." }
  },
  {
    name: { kz: "Сыраға креветка", ru: "Креветки к пиву", en: "Shrimp for Beer" },
    price: "5 200 ₸",
    category: "beer",
    image: placeholder,
    ingredients: { kz: "Креветка, лимон, соус.", ru: "Креветки, лимон, соус.", en: "Shrimp, lemon, sauce." }
  },
  {
    name: { kz: "Колбаски", ru: "Колбаски", en: "Sausages" },
    price: "3 000 ₸",
    category: "beer",
    image: placeholder,
    ingredients: { kz: "Гриль колбаски.", ru: "Колбаски гриль.", en: "Grilled sausages." }
  },
  {
    name: { kz: "Наггетсы", ru: "Наггетсы", en: "Nuggets" },
    price: "1 500 ₸",
    category: "beer",
    image: "images/nuggets.jpg",
    ingredients: { kz: "Тауық наггетсы, соус.", ru: "Куриные наггетсы, соус.", en: "Chicken nuggets, sauce." }
  },

  {
    name: { kz: "Сарымсақ соусы", ru: "Чесночный", en: "Garlic Sauce" },
    price: "500 ₸",
    category: "sauces",
    image: "images/sauce_garlic.jpg",
    ingredients: { kz: "Сарымсақ соусы.", ru: "Чесночный соус.", en: "Garlic sauce." }
  },
  {
    name: { kz: "Сыр соусы", ru: "Сырный", en: "Cheese Sauce" },
    price: "500 ₸",
    category: "sauces",
    image: "images/sauce_cheese.jpg",
    ingredients: { kz: "Сыр соусы.", ru: "Сырный соус.", en: "Cheese sauce." }
  },

  {
    name: { kz: "Паста Альфредо", ru: "Паста Альфредо", en: "Alfredo Pasta" },
    price: "3 500 ₸",
    category: "pasta",
    image: "images/pasta_alfredo.png",
    ingredients: { kz: "Паста, тауық еті, кілегейлі соус.", ru: "Паста, курица, сливочный соус.", en: "Pasta, chicken, creamy sauce." }
  },
  {
    name: { kz: "Паста Болоньезе", ru: "Паста Болоньезе", en: "Bolognese Pasta" },
    price: "3 800 ₸",
    category: "pasta",
    image: "images/Bolognese Pasta.png",
    ingredients: { kz: "Паста, фарш, томат соусы.", ru: "Паста, фарш, томатный соус.", en: "Pasta, minced meat, tomato sauce." }
  },

  {
    name: { kz: "Көкөніспен телятина", ru: "Телятина с овощами", en: "Veal with Vegetables" },
    price: "3 500 ₸",
    category: "second",
    image: "images/telyatina-s-ovoshami.png",
    ingredients: { kz: "Бұзау еті, көкөністер.", ru: "Телятина, овощи.", en: "Veal, vegetables." }
  },
  {
    name: { kz: "Қуырдақ", ru: "Куырдак", en: "Kuyrdak" },
    price: "4 500 ₸",
    category: "second",
    image: "images/kuyrdak_gaviadina.png",
    ingredients: { kz: "Сиыр етінен қуырдақ.", ru: "Куырдак из говядины.", en: "Beef kuyrdak." }
  },
  {
    name: { kz: "Саңырауқұлақпен телятина", ru: "Телятина с грибами в сливочном соусе", en: "Veal with Mushrooms" },
    price: "3 500 ₸",
    category: "second",
    image: "images/telyatina-s-gribami-v-slivochnom-souse.png",
    ingredients: { kz: "Бұзау еті, саңырауқұлақ, кілегейлі соус.", ru: "Телятина, грибы, сливочный соус.", en: "Veal, mushrooms, creamy sauce." }
  },
  {
    name: { kz: "Қой етінен қуырдақ", ru: "Куырдак из баранины", en: "Lamb Kuyrdak" },
    price: "4 000 ₸",
    category: "second",
    image: "images/kuyrdak_baranina.png",
    ingredients: { kz: "Қой етінен қуырдақ.", ru: "Куырдак из баранины.", en: "Lamb kuyrdak." }
  },
  {
    name: { kz: "Көкөніспен тауық филесі", ru: "Куриное филе с овощами", en: "Chicken Fillet with Vegetables" },
    price: "3 000 ₸",
    category: "second",
    image: "images/kurinoe-file-s-ovoshami.png",
    ingredients: { kz: "Тауық филесі, көкөністер.", ru: "Куриное филе, овощи.", en: "Chicken fillet, vegetables." }
  },
  {
    name: { kz: "Саңырауқұлақпен тауық", ru: "Курица с грибами в сливочном соусе", en: "Chicken with Mushrooms" },
    price: "3 500 ₸",
    category: "second",
    image: "images/chicken_mushroom_cream.png",
    ingredients: { kz: "Тауық еті, саңырауқұлақ, кілегейлі соус.", ru: "Курица, грибы, сливочный соус.", en: "Chicken, mushrooms, creamy sauce." }
  },
  {
    name: { kz: "Қуырылған балық", ru: "Жареная рыба", en: "Fried Fish" },
    price: "4 500 ₸",
    category: "second",
    image: "images/zharenaya-ryba.png",
    ingredients: { kz: "Қуырылған балық.", ru: "Жареная рыба.", en: "Fried fish." }
  },

  {
    name: { kz: "Қой етінен шурпа", ru: "Шурпа из баранины", en: "Lamb Shurpa" },
    price: "2 000 ₸",
    category: "soups",
    image: "images/shurpa-iz-baraniny.png",
    ingredients: { kz: "Қой еті, көкөніс, сорпа.", ru: "Баранина, овощи, бульон.", en: "Lamb, vegetables, broth." }
  },
  {
    name: { kz: "Сиыр етінен шурпа", ru: "Шурпа из говядины", en: "Beef Shurpa" },
    price: "2 500 ₸",
    category: "soups",
    image: "images/shurpa-iz-govyadiny.png",
    ingredients: { kz: "Сиыр еті, көкөніс, сорпа.", ru: "Говядина, овощи, бульон.", en: "Beef, vegetables, broth." }
  },
  {
    name: { kz: "Цомян", ru: "Цомян", en: "Tsoman" },
    price: "3 000 ₸",
    category: "soups",
    image: "images/tsomyan.png",
    ingredients: { kz: "Цомян.", ru: "Цомян.", en: "Tsoman." }
  },
  {
    name: { kz: "Тауықпен рамен", ru: "Рамен с курицей", en: "Chicken Ramen" },
    price: "2 000 ₸",
    category: "soups",
    image: "images/ramen_chicken.jpg",
    ingredients: { kz: "Рамен, тауық еті, жұмыртқа.", ru: "Рамен, курица, яйцо.", en: "Ramen, chicken, egg." }
  },
  {
    name: { kz: "Сиыр етімен рамен", ru: "Рамен с говядиной", en: "Beef Ramen" },
    price: "2 500 ₸",
    category: "soups",
    image: "images/ramen_beef.jpg",
    ingredients: { kz: "Рамен, сиыр еті, жұмыртқа.", ru: "Рамен, говядина, яйцо.", en: "Ramen, beef, egg." }
  },

  {
    name: { kz: "Рибай", ru: "Рибай", en: "Ribeye" },
    price: "7 000 ₸",
    category: "steaks",
    image: "images/steak_ribeye.png",
    ingredients: { kz: "Рибай стейк.", ru: "Стейк рибай.", en: "Ribeye steak." }
  },
  {
    name: { kz: "Тибон", ru: "Тибон", en: "T-Bone" },
    price: "7 000 ₸",
    category: "steaks",
    image: "images/steak_tbone.jpg",
    ingredients: { kz: "T-bone стейк.", ru: "Стейк T-bone.", en: "T-bone steak." }
  },
  {
    name: { kz: "Көкөніспен медальондар", ru: "Медальоны с овощами", en: "Medallions with Vegetables" },
    price: "6 500 ₸",
    category: "steaks",
    image: "images/medalony-s-ovoshami.png",
    ingredients: { kz: "Ет медальоны, көкөністер.", ru: "Мясные медальоны, овощи.", en: "Meat medallions, vegetables." }
  },
  {
    name: { kz: "Лосось стейкі", ru: "Стейк из лосося", en: "Salmon Steak" },
    price: "7 500 ₸",
    category: "steaks",
    image: "images/steyk-iz-lososya.png",
    ingredients: { kz: "Лосось стейк.", ru: "Стейк из лосося.", en: "Salmon steak." }
  },

  {
    name: { kz: "Күріш", ru: "Рис", en: "Rice" },
    price: "700 ₸",
    category: "garnish",
    image:  "images/ris.png",
    ingredients: { kz: "Күріш.", ru: "Рис.", en: "Rice." }
  },
  {
    name: { kz: "Картоп дольки", ru: "Дольки", en: "Potato Wedges" },
    price: "800 ₸",
    category: "garnish",
    image:  "images/dolki.png",
    ingredients: { kz: "Картоп дольки.", ru: "Картофельные дольки.", en: "Potato wedges." }
  },
  {
    name: { kz: "Фри", ru: "Фри", en: "French Fries" },
    price: "1 000 ₸",
    category: "garnish",
    image:  "images/fri.png",
    ingredients: { kz: "Картоп фри.", ru: "Картофель фри.", en: "French fries." }
  },
  {
    name: { kz: "Гриль көкөністер", ru: "Овощи на гриле", en: "Grilled Vegetables" },
    price: "1 500 ₸",
    category: "garnish",
    image:  "images/ovoshchi-na-grile.png",
    ingredients: { kz: "Гриль көкөністер.", ru: "Овощи на гриле.", en: "Grilled vegetables." }
  },

  {
    name: { kz: "Қазақстан", ru: "Казахстан", en: "Kazakhstan Pizza" },
    price: "4 500 ₸",
    category: "pizza",
    image: "images/pizza_kazakhstan.jpg",
    ingredients: { kz: "Қазы, сыр, томат соусы.", ru: "Казы, сыр, томатный соус.", en: "Kazy, cheese, tomato sauce." }
  },
  {
    name: { kz: "Пепперони", ru: "Пепперони", en: "Pepperoni" },
    price: "3 500 ₸",
    category: "pizza",
    image: "images/peperoni.jpg",
    ingredients: { kz: "Пепперони, моцарелла, томат соусы.", ru: "Пепперони, моцарелла, томатный соус.", en: "Pepperoni, mozzarella, tomato sauce." }
  },
  {
    name: { kz: "Альфредо", ru: "Альфредо", en: "Alfredo" },
    price: "3 800 ₸",
    category: "pizza",
    image: "images/pizza_alfredo.jpg",
    ingredients: { kz: "Тауық еті, сыр, кілегейлі соус.", ru: "Курица, сыр, сливочный соус.", en: "Chicken, cheese, creamy sauce." }
  },
  {
    name: { kz: "Болоньезе", ru: "Болоньезе", en: "Bolognese" },
    price: "4 000 ₸",
    category: "pizza",
    image: "images/pizza_bolognese.jpg",
    ingredients: { kz: "Фарш, томат соусы, сыр.", ru: "Фарш, томатный соус, сыр.", en: "Minced meat, tomato sauce, cheese." }
  },

  {
    name: { kz: "Филадельфия", ru: "Филадельфия", en: "Philadelphia" },
    price: "3 800 ₸",
    category: "rolls",
    image: "images/roll_philadelphia.jpg",
    ingredients: { kz: "Лосось, күріш, сыр, нори.", ru: "Лосось, рис, сыр, нори.", en: "Salmon, rice, cheese, nori." }
  },
  {
    name: { kz: "Цезарь ролл", ru: "Цезарь", en: "Caesar Roll" },
    price: "3 300 ₸",
    category: "rolls",
    image: "images/roll_caesar_fried.jpg",
    ingredients: { kz: "Тауық еті, күріш, сыр, соус.", ru: "Курица, рис, сыр, соус.", en: "Chicken, rice, cheese, sauce." }
  },
  {
    name: { kz: "Америка темпура", ru: "Америка темпура", en: "America Tempura" },
    price: "3 500 ₸",
    category: "rolls",
    image: "images/roll_america_tempura.jpg",
    ingredients: { kz: "Темпура ролл.", ru: "Темпура ролл.", en: "Tempura roll." }
  },
  {
    name: { kz: "Унаги темпура", ru: "Унаги темпура", en: "Unagi Tempura" },
    price: "3 000 ₸",
    category: "rolls",
    image: "images/roll_unagi_tempura.jpg",
    ingredients: { kz: "Унаги темпура ролл.", ru: "Ролл унаги темпура.", en: "Unagi tempura roll." }
  },

  {
    name: { kz: "Сиыр етінен шашлык", ru: "Кусковой говядина", en: "Beef Shashlik" },
    price: "1 150 ₸",
    category: "shashlyk",
    image: "images/kuskovaya-govyadina.png",
    ingredients: { kz: "Сиыр етінен шашлык.", ru: "Шашлык из говядины.", en: "Beef shashlik." }
  },
  {
    name: { kz: "Люля кебаб", ru: "Люля кебаб", en: "Lula Kebab" },
    price: "1 250 ₸",
    category: "shashlyk",
    image: "images/lyulya-kebab.png",
    ingredients: { kz: "Люля кебаб.", ru: "Люля кебаб.", en: "Lula kebab." }
  },
  {
    name: { kz: "Окорочка", ru: "Окорочка", en: "Chicken Leg Shashlik" },
    price: "1 050 ₸",
    category: "shashlyk",
    image: "images/okorochka-kebab.png",
    ingredients: { kz: "Тауық окорочка.", ru: "Куриные окорочка.", en: "Chicken legs." }
  },
  {
    name: { kz: "Қабықтағы бауыр", ru: "Печень в оболочке", en: "Liver in Caul Fat" },
    price: "1 300 ₸",
    category: "shashlyk",
    image: "images/pechen-v-obolochke-kebab.png",
    ingredients: { kz: "Бауыр шашлык.", ru: "Шашлык из печени.", en: "Liver shashlik." }
  },
  {
    name: { kz: "Үйрек", ru: "Утка", en: "Duck" },
    price: "2 000 ₸",
    category: "shashlyk",
    image: "images/utka-shashlyk.png",
    ingredients: { kz: "Үйрек еті.", ru: "Утиное мясо.", en: "Duck meat." }
  },

  {
    name: { kz: "Сет FOX 6–8 адамға", ru: "Сет FOX на 6–8 персон", en: "FOX Set for 6–8 People" },
    price: "38 000 ₸",
    category: "company",
    image: "images/set_fox.png",
    ingredients: { kz: "Рибай, тибон, қуырдақ, цыпленок табака, колбаски, салат, дольки, көкөніс.", ru: "Рибай, тибон, куырдак, цыпленок табака, колбаски, салат, дольки, овощи.", en: "Ribeye, T-bone, kuyrdak, chicken tabaka, sausages, salad, wedges, vegetables." }
  },
  {
    name: { kz: "Сет SHELBY 12–15 адамға", ru: "Сет SHELBY на 12–15 персон", en: "SHELBY Set for 12–15 People" },
    price: "50 000 ₸",
    category: "company",
    image: placeholder,
    ingredients: { kz: "Компанияға арналған үлкен ет сеті.", ru: "Большой мясной сет на компанию.", en: "Large meat set for a company." }
  },
  {
    name: { kz: "Қуырдақ", ru: "Куырдак", en: "Kuyrdak" },
    price: "30 000 ₸",
    category: "company",
    image: "images/kuyrdak.png",
    ingredients: { kz: "Компанияға арналған қуырдақ.", ru: "Куырдак на компанию.", en: "Kuyrdak for a company." }
  },
  {
    name: { kz: "Бешбармақ", ru: "Бешбармак", en: "Beshbarmak" },
    price: "25 000 ₸",
    category: "company",
    image: "images/beshbarmak.png",
    ingredients: { kz: "Компанияға арналған бешбармақ.", ru: "Бешбармак на компанию.", en: "Beshbarmak for a company." }
  },
  {
    name: { kz: "Микс суши", ru: "Микс суши", en: "Sushi Mix" },
    price: "18 000 ₸",
    category: "company",
    image: "images/mix_sushi_1200x800.png",
    ingredients: { kz: "Суши сет ассорти, соус, имбирь, васаби.", ru: "Суши сет ассорти, соус, имбирь, васаби.", en: "Assorted sushi set, sauce, ginger, wasabi." }
  },
  {
    name: { kz: "Мясной микс", ru: "Мясной микс", en: "Meat Mix" },
    price: "25 000 ₸",
    category: "company",
    image: "images/meat_mix_1200x800.png",
    ingredients: { kz: "Ет ассорти, гарнир, көкөніс, соустар.", ru: "Мясное ассорти, гарнир, овощи, соусы.", en: "Assorted meat, side dish, vegetables, sauces." }
  },
  {
    name: { kz: "Куриное асорти", ru: "Куриное асорти", en: "Chicken Assorted" },
    price: "8 000 ₸",
    category: "company",
    image: "images/chicken_assorti_1200x800.png",
    ingredients: { kz: "Тауық ассорти, соус.", ru: "Куриное ассорти, соус.", en: "Assorted chicken, sauce." }
  },

  {
    name: { kz: "Классикалық мохито", ru: "Мохито классический", en: "Classic Mojito" },
    price: "2 500 ₸",
    category: "lemonade",
    image: "images/mohito-klassicheskiy.png",
    ingredients: { kz: "Лайм, жалбыз, сироп, газды су, мұз.", ru: "Лайм, мята, сироп, газированная вода, лед.", en: "Lime, mint, syrup, sparkling water, ice." }
  },
  {
    name: { kz: "Қара шай", ru: "Чай черный", en: "Black Tea" },
    price: "1 000 ₸",
    category: "tea",
    image: "images/chai-chernyy.png",
    ingredients: { kz: "Қара шай.", ru: "Черный чай.", en: "Black tea." }
  },
  {
    name: { kz: "Көк шай", ru: "Чай зеленый", en: "Green Tea" },
    price: "1 000 ₸",
    category: "tea",
    image: "images/chai-zelenyy.png",
    ingredients: { kz: "Көк шай.", ru: "Зеленый чай.", en: "Green tea." }
  },
  {
    name: { kz: "Borjomi", ru: "Borjomi", en: "Borjomi" },
    price: "1 600 ₸",
    category: "water",
    image: "images/Borjomi.png",
    ingredients: { kz: "Минералды су.", ru: "Минеральная вода.", en: "Mineral water." }
  },
  {
    name: { kz: "Coca-Cola", ru: "Coca-Cola", en: "Coca-Cola" },
    price: "1 200 ₸",
    category: "water",
    image: "images/Coca-Cola.png",
    ingredients: { kz: "Салқын сусын.", ru: "Холодный напиток.", en: "Soft drink." }
  },
  {
    name: { kz: "Aperol Spritz", ru: "Aperol Spritz", en: "Aperol Spritz" },
    price: "3 500 ₸",
    category: "cocktails",
    image: "images/Aperol Spritz.png",
    ingredients: { kz: "Aperol, prosecco, soda, апельсин, мұз.", ru: "Aperol, prosecco, soda, апельсин, лед.", en: "Aperol, prosecco, soda, orange, ice." }
  },
  {
    name: { kz: "Mojito", ru: "Mojito", en: "Mojito" },
    price: "3 000 ₸",
    category: "cocktails",
    image: "images/Mojito.png",
    ingredients: { kz: "Ром, лайм, жалбыз, сироп, soda.", ru: "Ром, лайм, мята, сироп, soda.", en: "Rum, lime, mint, syrup, soda." }
  },

  {
    name: { kz: "Jacob's Creek Sparkling Moscato", ru: "Jacob's Creek Sparkling Moscato", en: "Jacob's Creek Sparkling Moscato" },
    price: "17 000 ₸",
    category: "wine",
    image: "images/Jacob's Creek Sparkling Moscato.png",
    ingredients: { kz: "Игристое вино, 750 мл.", ru: "Игристое вино, 750 мл.", en: "Sparkling wine, 750 ml." }
  },
  {
    name: { kz: "Martini Prosecco DOC", ru: "Martini Prosecco DOC", en: "Martini Prosecco DOC" },
    price: "21 000 ₸",
    category: "wine",
    image: "images/Martini Prosecco DOC.png",
    ingredients: { kz: "Игристое вино, 750 мл.", ru: "Игристое вино, 750 мл.", en: "Sparkling wine, 750 ml." }
  },
  {
    name: { kz: "Toso Asti", ru: "Toso Asti", en: "Toso Asti" },
    price: "18 000 ₸",
    category: "wine",
    image: "images/Toso Asti.png",
    ingredients: { kz: "Ақ игристое вино, 750 мл.", ru: "Белое игристое вино, 750 мл.", en: "White sparkling wine, 750 ml." }
  },
  {
    name: { kz: "Campo Viejo", ru: "Campo Viejo", en: "Campo Viejo" },
    price: "14 000 ₸",
    category: "wine",
    image: "images/Campo Viejo.png",
    ingredients: { kz: "Қызыл шарап, 750 мл.", ru: "Красное вино, 750 мл.", en: "Red wine, 750 ml." }
  },

  {
    name: { kz: "Разливное сыра", ru: "Пиво разливное", en: "Draft Beer" },
    price: "1 500 ₸",
    category: "beer_bar",
    image: "images/pivo_razlivnoe.png",
    ingredients: { kz: "Разливное сыра.", ru: "Разливное пиво.", en: "Draft beer." }
  },
  {
    name: { kz: "Corona Extra", ru: "Corona Extra", en: "Corona Extra" },
    price: "2 500 ₸",
    category: "beer_bar",
    image: "images/corona_extra.png",
    ingredients: { kz: "Бөтелкедегі сыра.", ru: "Бутылочное пиво.", en: "Bottled beer." }
  },

  {
    name: { kz: "Absolut", ru: "Absolut", en: "Absolut" },
    price: "1 800 ₸",
    category: "vodka",
    image: "images/Absolut.png",
    ingredients: { kz: "Водка, 50 мл.", ru: "Водка, 50 мл.", en: "Vodka, 50 ml." }
  },
  {
    name: { kz: "Grey Goose", ru: "Grey Goose", en: "Grey Goose" },
    price: "3 500 ₸",
    category: "vodka",
    image: "images/Grey Goose.png",
    ingredients: { kz: "Водка, 50 мл.", ru: "Водка, 50 мл.", en: "Vodka, 50 ml." }
  },
  {
    name: { kz: "Chivas Regal 12 YO", ru: "Chivas Regal 12 YO", en: "Chivas Regal 12 YO" },
    price: "3 900 ₸",
    category: "whiskey",
    image: "images/Chivas Regal 12 YO.png",
    ingredients: { kz: "Виски, 50 мл.", ru: "Виски, 50 мл.", en: "Whiskey, 50 ml." }
  },
  {
    name: { kz: "Jameson", ru: "Jameson", en: "Jameson" },
    price: "2 900 ₸",
    category: "whiskey",
    image: "images/Jameson.png",
    ingredients: { kz: "Ирландиялық виски, 50 мл.", ru: "Ирландский виски, 50 мл.", en: "Irish whiskey, 50 ml." }
  },
  {
    name: { kz: "Bacardi Carta Blanca", ru: "Bacardi Carta Blanca", en: "Bacardi Carta Blanca" },
    price: "2 000 ₸",
    category: "rum",
    image: "images/Bacardi Carta Blanca.png",
    ingredients: { kz: "Ром, 50 мл.", ru: "Ром, 50 мл.", en: "Rum, 50 ml." }
  },
  {
    name: { kz: "Captain Morgan", ru: "Captain Morgan", en: "Captain Morgan" },
    price: "2 200 ₸",
    category: "rum",
    image: "images/Captain Morgan.png",
    ingredients: { kz: "Ром, 50 мл.", ru: "Ром, 50 мл.", en: "Rum, 50 ml." }
  },
  {
    name: { kz: "Olmeca Blanco", ru: "Olmeca Blanco", en: "Olmeca Blanco" },
    price: "2 000 ₸",
    category: "tequila",
    image: "images/Olmeca Blanco.png",
    ingredients: { kz: "Текила, 50 мл.", ru: "Текила, 50 мл.", en: "Tequila, 50 ml." }
  },
  {
    name: { kz: "Olmeca Gold", ru: "Olmeca Gold", en: "Olmeca Gold" },
    price: "2 200 ₸",
    category: "tequila",
    image:  "images/Olmeca Gold.png",
    ingredients: { kz: "Текила, 50 мл.", ru: "Текила, 50 мл.", en: "Tequila, 50 ml." }
  },
  {
    name: { kz: "Baileys", ru: "Baileys", en: "Baileys" },
    price: "2 300 ₸",
    category: "liqueur",
    image: "images/Baileys.png",
    ingredients: { kz: "Ликер, 50 мл.", ru: "Ликер, 50 мл.", en: "Liqueur, 50 ml." }
  },
  {
    name: { kz: "Jagermeister", ru: "Jagermeister", en: "Jagermeister" },
    price: "2 400 ₸",
    category: "liqueur",
    image: "images/Jagermeister.png",
    ingredients: { kz: "Ликер, 50 мл.", ru: "Ликер, 50 мл.", en: "Liqueur, 50 ml." }
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
