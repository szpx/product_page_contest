const mainImgProduct = document.getElementById('main-img-product').children[0];
let sublistImg = document.querySelectorAll('.img-min');
const leftArrow = document.getElementById('left-arrow');
const rightArrow = document.getElementById('right-arrow');
const burger = document.querySelector('.burger');
const navMenu = document.querySelector('.menu-container');
const bubbleQuantity = document.querySelector('.bubble-quantity');
const btnCart = document.querySelector('.btn-cart');
const btnGold = document.querySelector('.bubble-color-1');
const btnSilver = document.querySelector('.bubble-color-2');
const btnBlack = document.querySelector('.bubble-color-3');

let bubbleCount = 0;

sublistImg = Array.from(sublistImg);

function mainArrowsMngmt(index) {
  if (index == 0) {
    leftArrow.classList.add('hidden');
  }

  if (
    (rightArrow.classList.contains('hidden') &&
      index == sublistImg.length - 2) ||
    index == 0
  ) {
    rightArrow.classList.remove('hidden');
  }
  if (index == sublistImg.length - 1) {
    rightArrow.classList.toggle('hidden');
  }
  if (leftArrow.classList.contains('hidden') && index > 0) {
    leftArrow.classList.remove('hidden');
  }
}
function sublistArrowsMngmt() {
  let i = sublistImg.findIndex((el) => el.src == mainImgProduct.src);

  if (i == sublistImg.length - 1) {
    rightArrow.classList.add('hidden');
    leftArrow.classList.remove('hidden');
  } else if (i == 0) {
    leftArrow.classList.add('hidden');
    rightArrow.classList.remove('hidden');
  } else {
    leftArrow.classList.remove('hidden');
    rightArrow.classList.remove('hidden');
  }
}
sublistImg.forEach((img) => {
  img.addEventListener('click', () => {
    if (mainImgProduct.src != img.src) {
      mainImgProduct.src = img.src;
      sublistArrowsMngmt();
    }
  });
});

leftArrow.addEventListener('click', () => {
  let i = sublistImg.findIndex((el) => el.src == mainImgProduct.src);
  i--;
  mainImgProduct.src = sublistImg[i].src;
  mainArrowsMngmt(i);
});

rightArrow.addEventListener('click', () => {
  let i = sublistImg.findIndex((el) => el.src == mainImgProduct.src);
  i++;
  mainImgProduct.src = sublistImg[i].src;
  mainArrowsMngmt(i);
});

burger.addEventListener('click', () => {
  navMenu.classList.toggle('menu-slide');
  burger.classList.toggle('toggle');
});

btnCart.addEventListener('click', () => {
  bubbleCount++;
  bubbleQuantity.innerHTML = bubbleCount;
  bubbleQuantity.classList.remove('hidden');
});

btnGold.addEventListener('click', () => {
  const arr = [
    {
      img: './img/versace_1_gold.webp',
      alt: 'sunglasses aside gold',
    },
    {
      img: './img/versace_2_gold.webp',
      alt: 'sunglasses front gold',
    },
    {
      img: './img/versace_3_gold.webp',
      alt: 'sunglasses right side gold',
    },
  ];

  for (let i = 0; i < arr.length; i++) {
    sublistImg[i].src = arr[i].img;
    sublistImg[i].alt = arr[i].alt;
  }

  sublistImg[3].classList.add('hidden');
  mainImgProduct.src = sublistImg[0].src;
});

btnSilver.addEventListener('click', () => {
  const arr = [
    {
      img: './img/versace_1_silver.webp',
      alt: 'sunglasses aside silver',
    },
    {
      img: './img/versace_2_silver.webp',
      alt: 'sunglasses front silver',
    },
    {
      img: './img/versace_3_silver.webp',
      alt: 'sunglasses right side silver',
    },
    {
      img: './img/versace_4_silver.webp',
      alt: 'sunglasses front closed silver',
    },
  ];

  for (let i = 0; i < arr.length; i++) {
    sublistImg[i].src = arr[i].img;
    sublistImg[i].alt = arr[i].alt;
  }
  mainImgProduct.src = sublistImg[0].src;
  sublistImg[3].classList.remove('hidden');
});

btnBlack.addEventListener('click', () => {
  const arr = [
    {
      img: './img/versace_1_black.webp',
      alt: 'sunglasses aside black',
    },
    {
      img: './img/versace_2_black.webp',
      alt: 'sunglasses front black',
    },
    {
      img: './img/versace_3_black.webp',
      alt: 'sunglasses right side black',
    },
    {
      img: './img/versace_4_black.webp',
      alt: 'sunglasses front closed black',
    },
  ];

  for (let i = 0; i < arr.length; i++) {
    sublistImg[i].src = arr[i].img;
    sublistImg[i].alt = arr[i].alt;
  }
  mainImgProduct.src = sublistImg[0].src;
  sublistImg[3].classList.remove('hidden');
});
