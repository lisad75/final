function hideModal() {
   let modal= document.getElementById("modal")
	modal.classList.toggle('hidden');
    
}
hideModal();
document.getElementById('sayhi').addEventListener('click', hideModal);
document.getElementById('cancel').addEventListener('click', hideModal);
document.getElementById('submit').addEventListener('click', hideModal);
