function h() {
  let ans = Math.floor(Math.random() * MoneyHeist.length);

  document.getElementById(
    "hiren"
  ).innerHTML = `<img src="${MoneyHeist[ans].Image}"></img><h1> ${MoneyHeist[ans].dialog}</h1><h2>- ${MoneyHeist[ans].speacker}</h2>`;
}

var MoneyHeist = [
  {
    Image:
      "https://wallpapers.com/images/featured/professor-money-heist-1yegj3ptnd8g5noc.jpg",
    dialog: "And every great story needs its villains.",
    speacker: "Professor (Sergio Marquina)",
  },
  {
    Image: "https://wallpapers.com/images/hd/berlin-money-heist-glitch-effect-igp7qsghyg77o3in.jpg",
    dialog:
      "When you hit rock bottom, you still have a way to go before you’re dead",
    speacker: "Berlin (Andrés de Fonollosa)",
  },
  {
    Image: "https://wallpaper.forfun.com/fetch/77/77af9af6cc8d2e81239ba60af85af213.jpeg",
    dialog: "And what if you don’t have a plan?",
    speacker: "Tokyo (Silene Oliveira)",
  },
  {
    Image: "https://wallpaperaccess.com/full/2576533.jpg",
    dialog: "And you think you’re that symbol?",
    speacker: "Denver (Ricardo Ramos)",
  },
  {
    Image: "https://wallpapers.com/images/hd/nairobi-money-heist-scene-bv1cjnlpt2qepckr.jpg",
    dialog:
      "That we can change our fate, that we’re more than just the sum of our past.",
    speacker: "Nairobi",
  },
];
