function openModal() {
    document.getElementById('modal').style.display = 'block';
    const modalImg = document.getElementById('modalImage');
    modalImg.src = event.target.src;
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}
