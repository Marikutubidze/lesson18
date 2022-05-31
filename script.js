let data = [
  {
    id: 1,
    imageUrl: "https://images6.alphacoders.com/321/thumb-1920-321927.jpg",
    title: "I AM",
    url: "https://google.com",
  },
  {
    id: 2,
    imageUrl:
      "https://external-preview.redd.it/g8fe7-5uUEGucbmUG_WkNR7U39784y-OKbM9-LbWHTE.jpg?auto=webp&s=e8c5ffb50d07fc0add9463121049ec72d9692df6",
    title: "THE ONE",
    url: "https://on.ge",
  },
  {
    id: 3,
    imageUrl:
      "https://preview.redd.it/t5en5vbb6so31.jpg?width=3440&format=pjpg&auto=webp&s=818c4753758056195c646f9a456b7fff4efe9c88",
    title: "WHO",
    url: "https://google.com",
  },
  {
    id: 4,
    imageUrl:
      "https://a-static.besthdwallpaper.com/breaking-bad-wallpaper-3440x1440-28738_15.jpg",
    title: "KNOCKS!",
    url: "https://google.com",
  },
];

let arrowLeft = document.getElementById("arrow-left");
let arrowRight = document.getElementById("arrow-right");
let sliderContent = document.getElementById("slider-content");
let dotsList = document.getElementsByClassName("dot");

let sliderIndex = 0;

function createAtag(item) {
  let aTag = document.createElement("a");
  aTag.setAttribute("href", item.url);
  aTag.classList.add("slide");

  return aTag;
}

function createimgTag(item) {
  let tagIamge = document.createElement("img");
  tagIamge.setAttribute("src", item.imageUrl);
  tagIamge.setAttribute("alt", item.title);
  tagIamge.classList.add("image-slider");

  return tagIamge;
}

function createH2Tag(item) {
  let tagTitle = document.createElement("h2");
  tagTitle.classList.add("slider-title");
  tagTitle.append(item.title);

  return tagTitle;
}

function createDots(item) {
  let dots = document.createElement("div");
  dots.classList.add("dots");

  data.forEach((element) => {
    let dot = document.createElement("div");
    dot.classList.add("dot");
    dot.setAttribute("data-id", element.id - 1);

    dot.onclick = function (event) {
      let id = event.target.getAttribute("data-id");
      sliderIndex = id;
      setSlide();
    };
    dots.appendChild(dot);
  });

  return dots;
}

function setSlide() {
  sliderContent.innerHTML = " ";
  let slideItem = createAtag(data[sliderIndex]);
  let imgTag = createimgTag(data[sliderIndex]);
  let h2Tag = createH2Tag(data[sliderIndex]);
  let dots = createDots();

  slideItem.appendChild(imgTag);
  slideItem.appendChild(h2Tag);
  sliderContent.appendChild(slideItem);
  sliderContent.appendChild(dots);

  currentDotActive();
  console.log(slideItem);
}

function currentDotActive() {
  dotsList[sliderIndex].classList.add("active");
}

function arrowLeftClick() {
  if (sliderIndex <= 0) {
    sliderIndex = data.length - 1;
    setSlide();
    return;
  }
  sliderIndex--;
  setSlide();
}

function arrowRightClick() {
  if (sliderIndex >= data.length - 1) {
    sliderIndex = 0;
    setSlide();
    return;
  }
  sliderIndex++;
  setSlide();
}

arrowLeft.addEventListener("click", arrowLeftClick);
arrowRight.addEventListener("click", arrowRightClick);


setInterval(() => {
  rightArrowClick();
}, 3000);

setSlide();
