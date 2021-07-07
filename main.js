main.js
function hideModal() {
	modal.classList.toggle('hidden');
}
hideModal();
document.getElementById('sayHi').addEventListener('click', hideModal);
document.getElementById('cancel').addEventListener('click', hideModal);
document.getElementById('submit').addEventListener('click', hideModal);