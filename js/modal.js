const wetubePreview = document.querySelector('.jsWetubeButton');
const modal = document.getElementById('modal');

function handleWetubeModal(){
    const cancelBtn = document.querySelector('.modal_button');
    const modalLayer = document.querySelector('.modal_layer');
    modal.classList.remove('none');
    modal.classList.add('block');
    cancelBtn.addEventListener('click', handelCencelModal);
    modalLayer.addEventListener('click', handelCencelModal);

}

function handelCencelModal(){
    modal.classList.remove('block');
    modal.classList.add('none');
}

wetubePreview.addEventListener('click', handleWetubeModal);

