
var cartItems=[];
var currentValueOfGoods = 0;

function addItemToCart(Item) {
    cartItems[currentValueOfGoods]=Item;
    ++currentValueOfGoods;
}

function hideAllBlocks(){
    var blocks = document.getElementsByClassName('block');
    for (var i=0; i<blocks.length;i++)
    blocks[i].style.display = 'none';
}

function showOrHideBlock(nameOfBlock){
 //   hideAllBlocks();
    if (document.getElementById(nameOfBlock).style.display=='none'){
    document.getElementById(nameOfBlock).style.display='block';}
    else {
        document.getElementById(nameOfBlock).style.display='none'
    }

}

function hideAll() {
    var pages = document.getElementsByClassName('page');
    for (var i = 0; i < pages.length; i++) {
        pages[i].style.display = 'none';
    }
}

function redirect(hash) {
    window.location.replace('http://localhost:63342/Магазин/index.html#!/{0}'.format(hash));
}

function show(pageName) {
    hideAll();
    hideAllBlocks();
    document.getElementById(pageName).style.display = 'block';
}

var routes = new Array();

function addRoute(url, action) {
    routes[url] = action;
}

function getCatalogController(name) {
    return function (pageNumber) {
        if (pageNumber[0] == 'i') {
            pageNumber = pageNumber.substring(1);
            updateDevicePage(name, pageNumber);
            show('device-page');
        } else {
            updateCatalog(name, pageNumber);
            show('catalog');
        }
    }
}



