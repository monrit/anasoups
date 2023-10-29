import { SoupType } from "../types/types";
import udonSeafood from "../assets/images/udonSeafood.webp";
import udonSoupChicken from "../assets/images/udonSoupChicken.webp";
import misoSoup from "../assets/images/misoSoup.webp";
import pumpkinCreamSoupBacon from "../assets/images/pumpkinCreamSoupBacon.webp";
import pumpkinCreamSoup from "../assets/images/pumpkinCreamSoup.webp";
import borshchPork from "../assets/images/borshchPork.webp";
import borshchPorkHalf from "../assets/images/borshchPork1-2.webp";
import chickenSoup from "../assets/images/chickenSoup.webp";
import tomYamChicken from "../assets/images/tomYamChicken.webp";
import cheeseMisoSoupSalmon from "../assets/images/cheeseMisoSoupSalmon.webp";
import tomYamShrimps from "../assets/images/tomYamShrimps.webp";

export const SOUPS: SoupType[] = [
  {
    id: 1,
    name: "Суп Удон з морепродуктами",
    image: udonSeafood,
    price: 139,
    grams: 380,
    description: "Бульйон Удон, креветки, кальмар, локшина Удон, вакаме, зелена цибуля"
  },
  {
    id: 2,
    name: "Суп Удон з куркою",
    image: udonSoupChicken,
    price: 98,
    grams: 390,
    description: "Бульйон Удон, куряче стегно, яйце куряче, локшина Удон, вакаме, зелена цибуля"
  },
  {
    id: 3,
    name: "Місо суп",
    image: misoSoup,
    price: 49,
    grams: 230,
    description: "Місо бульйон, гриби Муер, водорості Вакаме, сир Тофу, зелена цибуля"
  },
  {
    id: 4,
    name: "Гарбузовий крем-суп з беконом",
    image: pumpkinCreamSoupBacon,
    price: 71,
    grams: 265,
    description:
      "Гарбуз, помідори, цибуля ріпчаста, вершки, гарбузове насіння, бекон, спеції, грінки"
  },
  {
    id: 5,
    name: "Гарбузовий крем-суп",
    image: pumpkinCreamSoup,
    price: 56,
    grams: 220,
    description: "Гарбуз, помідори, цибуля ріпчаста, вершки, гарбузове насіння, спеції, грінки"
  },
  {
    id: 6,
    name: "Борщ червоний зі свининою",
    image: borshchPork,
    price: 124,
    grams: 450,
    description:
      "Свинина, буряк, морква, цибуля ріпчаста. Картопля, капуста білокачанна, часник, чорнослив, хліб, сметана, намазка з сала, кріп, зелена цибуля, спеції"
  },
  {
    id: 7,
    name: "Борщ червоний зі свининою 1/2",
    image: borshchPorkHalf,
    price: 68,
    grams: 260,
    description:
      "Свинина, буряк, морква, цибуля ріпчаста, картопля, капуста білокачанна, часник, чорнослив, кріп, спеції"
  },
  {
    id: 8,
    name: "Курячий супчик з локшиною",
    image: chickenSoup,
    price: 53,
    grams: 280,
    description: "Куряче стегно, морква, цукіні, спагеті, перепелине яйце, кріп"
  },
  {
    id: 9,
    name: "Том Ям з куркою",
    image: tomYamChicken,
    price: 139,
    grams: 400,
    description:
      "Бульйон на основі кокосового молока, гриби Гливи, курка, бобова локшина, помідори Чері, лайм, базилік"
  },
  {
    id: 10,
    name: "Сирний місо суп з лососем",
    image: cheeseMisoSoupSalmon,
    price: 131,
    grams: 275,
    description:
      "Місо бульйон, лосось, вершки, сир Чедер, гриби Муер, водорості Вакаме, сир Тофу, зелена цибуля"
  },
  {
    id: 11,
    name: "Том Ям з криветками",
    image: tomYamShrimps,
    price: 179,
    grams: 350,
    description:
      "Бульйон на основі кокосового молока, гриби Гливи, креветки, помідори Чері, лайм, кінза, соус Ширачі, паровий рис"
  }
];
