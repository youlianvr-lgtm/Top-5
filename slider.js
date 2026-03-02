const places = [
  {
    title: "Памятник землякам, агрогородок Дубно",
    location: "Дубно · 53.4447, 24.3706",
    text: "Памятник установлен в честь 74 земляков, погибших в годы Великой Отечественной войны. Рядом с местом памяти собраны материалы о подвиге жителей и лётчика Андрея Данилова.",
    image:
      "https://images.unsplash.com/photo-1616150317833-8f7f6f6ca9a0?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Могила жертв фашизма, деревня Княжеводцы",
    location: "Княжеводцы · 53.4786, 24.3426",
    text: "Место массового захоронения мирных жителей, трагически погибших 23 июля 1943 года. Памятник «Скорбящая мать» сохраняет память о сожжённой деревне и её жителях.",
    image:
      "https://images.unsplash.com/photo-1601987077223-4a16f3ca9f8d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Памятный знак экипажу капитана А. С. Протасова",
    location: "Около деревни Плодовая · 53.4852, 24.2835",
    text: "Знак на месте первого в истории Великой Отечественной войны тарана истребителя бомбардировщиком, совершённого 22 июня 1941 года экипажем капитана Протасова.",
    image:
      "https://images.unsplash.com/photo-1526816229784-65d5d54ac8bc?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Мемориальный знак на месте форсирования Немана",
    location: "Район Лунно · 53.4515, 24.2599",
    text: "Здесь в июле 1944 года воины 64-й стрелковой дивизии форсировали Неман. За героизм при форсировании и удержании плацдарма ряд бойцов получил звание Героя Советского Союза.",
    image:
      "https://images.unsplash.com/photo-1473445361085-b9a07f55608b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Мемориальный комплекс у деревни Шимки",
    location: "Шимки · 53.4130, 24.8908",
    text: "Комплекс посвящён воинам, партизанам и мирным жителям Мостовского района, погибшим в годы войны. Он напоминает о цене Победы и важности исторической памяти.",
    image:
      "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&w=1200&q=80",
  },
];

let current = 0;

const slideImage = document.getElementById("slideImage");
const slideTitle = document.getElementById("slideTitle");
const slideLocation = document.getElementById("slideLocation");
const slideText = document.getElementById("slideText");
const slideIndex = document.getElementById("slideIndex");

function renderSlide(index) {
  const place = places[index];
  slideImage.src = place.image;
  slideImage.alt = `Фото: ${place.title}`;
  slideTitle.textContent = place.title;
  slideLocation.textContent = place.location;
  slideText.textContent = place.text;
  slideIndex.textContent = `Карточка ${index + 1} из ${places.length}`;
}

document.getElementById("prevBtn").addEventListener("click", () => {
  current = (current - 1 + places.length) % places.length;
  renderSlide(current);
});

document.getElementById("nextBtn").addEventListener("click", () => {
  current = (current + 1) % places.length;
  renderSlide(current);
});

renderSlide(current);
