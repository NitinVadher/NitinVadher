let a = 0;
let arr = [
  "https://cms.imgworlds.com/assets/9558de9d-1e49-437e-aa7b-b8bd4d999b00.jpg?key=home-gallery",
  "https://t1.gstatic.com/licensed-image?q=tbn:ANd9GcS2f_vDpnkdEYeL2YSq-Noyt6uFXj8pyV3MjbKSm3Hd3cQqlgV4o5fYkWQH33lJc6a_",
  "https://i.ytimg.com/vi/OgUMlCVYAGs/maxresdefault.jpg",
  "https://w0.peakpx.com/wallpaper/55/926/HD-wallpaper-thanos-crown-infinity-war-marvel-movie.jpg",
];

const sliderImage = document.getElementById("slider-image");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

sliderImage.src = arr[a];

prevBtn.addEventListener("click", prev);
nextBtn.addEventListener("click", next);

function prev() {
  if (a > 0) {
    a--;
    sliderImage.src = arr[a];
  }
}

function next() {
  if (a < arr.length - 1) {
    a++;
    sliderImage.src = arr[a];
  }
}