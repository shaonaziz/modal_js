const btnshowModal = document.querySelectorAll(".show-modal");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btncloseModal = document.querySelector(".close-modal");

const displayModal = () => {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
const exitModal = () => {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < btnshowModal.length; i++)
btnshowModal[i].addEventListener("click",displayModal);
btncloseModal.addEventListener("click",exitModal);
overlay.addEventListener('click',exitModal);


document.addEventListener('keydown',(e)=>{
  console.log(e.key);

  if(e.key==='Escape' && !modal.classList.contains('hidden')){

    exitModal();
  }

})