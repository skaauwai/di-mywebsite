const openModalBtn = document.querySelector("#modalBtn");
const modal = document.querySelector(".modal");
const closeModalBtn = modal.querySelector(".modal_close-btn");

//select overlay
function openModal() {
  modal.classList.add("modal_open");
}

function closeModal() {
  modal.classList.remove("modal_open");
}
openModalBtn.addEventListener("click", openModal, false);
closeModalBtn.addEventListener("click", closeModal, false);

function handleEsc(evt) {
  // if (/* check for esc*/) {
  closeModal();
}

openModalBtn.addEventListener("click", openModal, false);
closeModalBtn.addEventListener("click", closeModal, false);
document.addEventListener("keydown", handleEsc, false);
//handle clicking the overlay
