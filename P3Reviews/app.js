// local reviews data
const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    info: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    info: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    info: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    info: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];

// Function that repalces the content with index from reviews.
function setReviewContent(i) {
  const reviewDiv = document.querySelector(".review");
  console.log(reviewDiv);

  reviewDiv.innerHTML = `<div class="img-container"><img src="${reviews[i].img}" id="person-img" alt="" />
            </div><h4 id="author">${reviews[i].name}</h4>
            <p id="job">${reviews[i].job}</p>
            <p id="info">
              ${reviews[i].info}
            </p></div>`;
}

let contador = 1;

function rangoDeContador(valorPorAgregar, max) {
  contador += valorPorAgregar;
  if (contador > max - 1) contador = 0;
  if (contador < 0) contador = max - 1;
}

const prevBtn = document.querySelector(".prev-btn");
prevBtn.addEventListener("click", () => {
  rangoDeContador(-1, reviews.length);
  setReviewContent(contador);
});
const nextBtn = document.querySelector(".next-btn");
nextBtn.addEventListener("click", () => {
  rangoDeContador(1, reviews.length);
  setReviewContent(contador);
});
const randomBtn = document.querySelector(".random-btn");
randomBtn.addEventListener("click", () => {
  setReviewContent(Math.floor(Math.random() * reviews.length));
});
