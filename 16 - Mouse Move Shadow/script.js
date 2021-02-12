const hero = document.querySelector(".hero");

const text = document.querySelector("h1");

const walk = 100; // 100px

function shadow(e) {
  const width = hero.offsetWidth;
  const height = hero.offsetHeight;
  let x = e.offsetX;
  let y = e.offsetY;

  console.log(this, e.target);

  if (this !== e.target) {
    x = x + e.target.offsetLeft;
    y = y + e.target.offsetTop;
  }
  const xWalk = Math.round((x / width) * walk - walk / 2);
  const yWalk = Math.round((y / height) * walk - walk / 2);

  //console.log(xWalk, yWalk);
  text.style.textShadow = `${xWalk}px ${yWalk}px 0 rgba( 255, 0, 255,0.7)`;
  text.style.textShadow = `${xWalk * -1}px ${yWalk}px 0 rgba( 0, 255, 255,0.7)`;
}

hero.addEventListener("mousemove", shadow);
