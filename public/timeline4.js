"use strict";

function qs(selector, all = false) {
  return all
    ? document.querySelectorAll(selector)
    : document.querySelector(selector);
}

const sections4 = qs(".section4", true);
const timeline4 = qs(".timeline4");
const line4 = qs(".horizontalLine4");
line4.style.bottom = `calc(100% - 20px)`;
let prevScrollY4 = window.scrollY;
let up4, down4;
let full4 = false;
let set4 = 0;
const targetY4 = window.innerHeight * 0.8;

function scrollHandler(e) {
  const { scrollY } = window;
  up4 = scrollY < prevScrollY4;
  down4 = !up4;
  const timelineRect4 = timeline4.getBoundingClientRect();
  const lineRect4 = line4.getBoundingClientRect(); // const lineHeight = lineRect.bottom - lineRect.top;

  const dist4 = targetY4 - timelineRect4.top;

  if (down4 && !full4) {
    set4 = Math.max(set4, dist4);
    line4.style.bottom = `calc(100% - ${set4}px)`;
  }

  if (dist4 > timeline4.offsetHeight + 50 && !full4) {
    full4 = true;
    line4.style.bottom = `-50px`;
  }

  sections4.forEach((item) => {
    // console.log(item);
    const rect4 = item.getBoundingClientRect(); //     console.log(rect);

    if (rect4.top + item.offsetHeight / 5 < targetY4) {
      item.classList.add("show-me");
    }
  }); // console.log(up, down);

  prevScrollY4 = window.scrollY;
}

scrollHandler();
line4.style.display = "block";
window.addEventListener("scroll", scrollHandler);
