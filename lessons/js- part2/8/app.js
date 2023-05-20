const convertTimestampToTime = (time) => {
  const results = time < 10 ? `0${time}` : `${time}`;
  return results;
};

const humanReadable = (time) => {
  const digitTime = Math.trunc(time / 60);

  const seconds = time % 60;
  const humanSeconds = convertTimestampToTime(seconds);
  const minutes = digitTime % 60;
  const humanMinutes = convertTimestampToTime(minutes);
  const hours = Math.trunc(digitTime / 60);
  const humanHours = convertTimestampToTime(hours);

  return `${humanHours}:${humanMinutes}:${humanSeconds}`;
};

const results = humanReadable(700);
console.log(results);

const setScrollPosition = () => {
  const { scrollTop } = document.documentElement;
  localStorage.setItem("scroll-position", scrollTop);
};

const setScrollToPosition = () => {
  const { scrollTo } = window;
  const scrollPosition = localStorage.getItem("scroll-position") || 0;
  scrollTo({
    top: scrollPosition,
    behavior: "smooth",
  });
};

window.addEventListener("scroll", setScrollPosition);
window.addEventListener("DOMContentLoaded", setScrollToPosition);