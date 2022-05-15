const filtrarMobile = document.querySelector('.menu-mobile');
const fecharMenu = document.querySelector('#closeMobile');
const AbrirFiltro = document.querySelector('#AbrirFiltro')
AbrirFiltro.addEventListener('click', function () {
  filtrarMobile.style.visibility = 'visible';
  filtrarMobile.style.width = '100%';


});
fecharMenu.addEventListener('click', function () {
  filtrarMobile.style.visibility = 'hidden';
  filtrarMobile.style.width = '0';


});