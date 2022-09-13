"use strict";

function qs(selector, all = false) {
  return all
    ? document.querySelectorAll(selector)
    : document.querySelector(selector);
}

const sections3 = qs(".section3", true);
const timeline3 = qs(".timeline3");
const line3 = qs(".horizontalLine3");
line3.style.bottom = `calc(100% - 20px)`;
let prevScrollY3 = window.scrollY;
let up3, down3;
let full3 = false;
let set3 = 0;
const targetY3 = window.innerHeight * 0.8;

function scrollHandler(e) {
  const { scrollY } = window;
  up3 = scrollY < prevScrollY3;
  down3 = !up3;
  const timelineRect3 = timeline3.getBoundingClientRect();
  const lineRect3 = line3.getBoundingClientRect(); // const lineHeight = lineRect.bottom - lineRect.top;

  const dist3 = targetY3 - timelineRect3.top;

  if (down3 && !full3) {
    set3 = Math.max(set3, dist3);
    line3.style.bottom = `calc(100% - ${set3}px)`;
  }

  if (dist3 > timeline3.offsetHeight + 50 && !full3) {
    full3 = true;
    line3.style.bottom = `-50px`;
  }

  sections3.forEach((item) => {
    // console.log(item);
    const rect3 = item.getBoundingClientRect(); //     console.log(rect);

    if (rect3.top + item.offsetHeight / 5 < targetY3) {
      item.classList.add("show-me");
    }
  }); // console.log(up, down);

  prevScrollY3 = window.scrollY;
}

scrollHandler();
line3.style.display = "block";
window.addEventListener("scroll", scrollHandler);
