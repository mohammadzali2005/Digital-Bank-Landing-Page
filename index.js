const listMobileEntry = document.querySelector('.list-entry-mobile');
const mobileList = document.querySelector('.list-mobile');
const listMobileClose = document.querySelector('.list-close-mobile');

listMobileEntry.addEventListener('click', () => {
    mobileList.style.display = 'flex';
    listMobileClose.style.display = 'block';
    listMobileEntry.display = 'none';
});

listMobileClose.addEventListener('click', () => {
    mobileList.style.display = 'none';
    listMobileClose.style.display = 'none';
    listMobileEntry.style.display = 'block';
})