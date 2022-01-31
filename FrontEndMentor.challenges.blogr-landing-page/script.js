const navDropDown =document.getElementById('nav__dropdown');
const productList =document.getElementById('product__sub-list');
const companyList =document.getElementById('company__sub-list');
const connectList =document.getElementById('connect__sub-list');

const navIcon =document.getElementById('nav__icon');
const lineOne =document.getElementById('line-one');
const lineTwo =document.getElementById('line-two');
const lineThree =document.getElementById('line-three');

const productIcon =document.getElementById('product__icon');
const companyIcon =document.getElementById('company__icon');
const connectIcon =document.getElementById('connect__icon');

function dropDownMenu() {
  if(navDropDown.classList.contains('nav__dropdown--open')){
    navDropDown.classList.remove('nav__dropdown--open');
    navDropDown.classList.add('nav__dropdown--close');
    
    lineTwo.style.display = "block";
    lineOne.style.transform = 'rotate(0)';
    lineThree.style.transform = 'rotate(0) translate(0)';
    return;
  }
  if(navDropDown.classList.contains('nav__dropdown--close')){
    navDropDown.classList.remove('nav__dropdown--close');
    navDropDown.classList.add('nav__dropdown--open');
    
    lineTwo.style.display = "none";
    lineOne.style.transform = 'rotate(-45deg)';
    lineThree.style.transform = 'rotate(45deg) translate(-.3rem, -.48rem)';

   

  } 
}

function productMenu() {
  if(productList.classList.contains('nav__sub-show')){
    productList.classList.remove('nav__sub-show');
    productList.classList.add('nav__sub-hide');
    productIcon.style.transform = 'rotate(180deg)';
    return;
  }
  if(productList.classList.contains('nav__sub-hide')){
    productList.classList.remove('nav__sub-hide');
    productList.classList.add('nav__sub-show');
    productIcon.style.transform = 'rotate(360deg)';
  } 
}

function companyMenu() {
  if(companyList.classList.contains('nav__sub-show')){
    companyList.classList.remove('nav__sub-show');
    companyList.classList.add('nav__sub-hide');
    companyIcon.style.transform = 'rotate(180deg)';
    return;
  }
  if(companyList.classList.contains('nav__sub-hide')){
    companyList.classList.remove('nav__sub-hide');
    companyList.classList.add('nav__sub-show');
    companyIcon.style.transform = 'rotate(360deg)';
  } 
}
function connectMenu() {
  if(connectList.classList.contains('nav__sub-show')){
    connectList.classList.remove('nav__sub-show');
    connectList.classList.add('nav__sub-hide');
    connectIcon.style.transform = 'rotate(180deg)';
    return;
  }
  if(connectList.classList.contains('nav__sub-hide')){
    connectList.classList.remove('nav__sub-hide');
    connectList.classList.add('nav__sub-show');
    connectIcon.style.transform = 'rotate(360deg)';
  } 
}
navIcon.addEventListener('click', dropDownMenu);
productIcon.addEventListener('click', productMenu);
companyIcon.addEventListener('click', companyMenu);
connectIcon.addEventListener('click', connectMenu);
