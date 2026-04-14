let animated = false;

function scrollToFeatures() {
  const section = document.getElementById("features");

  section.scrollIntoView({
    behavior: "smooth"
  });

  if (animated) return;
  animated = true;

  setTimeout(() => {
    document.querySelectorAll(".card").forEach((card, i) => {
      setTimeout(() => {
        card.classList.add("show");
      }, i * 200);
    });
  }, 500);
}