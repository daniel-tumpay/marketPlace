/*var MenuItems = document.getElementById("MenuItems");

MenuItems.style.maxHeight = "0px";

function menutoggle(){
    if(MenuItems.style.maxHeight == "0px"){
        MenuItems.style.maxHeight = "200px"
    }
    else{
        MenuItems.style.maxHeight = "0px"
    }
}*/

/*------Scroll Y-----
window.addEventListener('scroll', function(){
    var header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});
------End Scroll Y-----*/

/*------Data Filterable-----*/

$(document).ready(function(){
    $('.list').click(function(){
        const value = $(this).attr('data-filter');
        if (value == 'all'){
            $('.col-4').show('1000');
        }
        else{
            $('.col-4').not('.'+value).hide('1000');
            $('.col-4').filter('.'+value).show('1000');
        }
    })
    //add active class on selected item

    $('.list').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
    })
})
/*------End Data Filterable-----*/





/*-------------Slider-------------*/
/*var counter = 1;
setInterval(function () {
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if (counter > 6) {
        counter = 1;
    }
}, 5000);*/


/*-------------Images-------------*/
/*
var ProductImg = document.getElementById("ProductImg");
var SmallImg = document.getElementsByClassName("small-img");

SmallImg[0].onclick = function(){
    ProductImg.src = SmallImg[0].src;
}
SmallImg[1].onclick = function(){
    ProductImg.src = SmallImg[1].src;
}
SmallImg[2].onclick = function(){
    ProductImg.src = SmallImg[2].src;
}
SmallImg[3].onclick = function(){
    ProductImg.src = SmallImg[3].src;
}*/

/*-------------Toggle Form-------------*/

/*var LoginForm = document.getElementById("LoginForm");
var RegForm = document.getElementById("RegForm");
var Indicator = document.getElementById("Indicator");

function register(){
    RegForm.style.transform = "translateX(0px)";
    LoginForm.style.transform = "translateX(0px)";
}
function login(){
    RegForm.style.transform = "translateX(300px)";
    LoginForm.style.transform = "translateX(300px)";
}*/

