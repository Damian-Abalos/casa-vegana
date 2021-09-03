const productos = [
    { id: 1, nombre: "TOQUES DE GARBANZOS", precio: 370 },
    { id: 2, nombre: "TOQUES DE LENTEJAS", precio: 370 },
    { id: 3, nombre: "PIZZA FUGAZZETTA", precio: 800 },
    { id: 4, nombre: "PIZZA NAPOLITANA", precio: 800 },
    { id: 5, nombre: "PIZZA PORTOBELLO", precio: 930 },
    { id: 6, nombre: "MEDALLONES ADUKI REMOLACHA ", precio: 300 },
    { id: 7, nombre: "MEDALLONES QUINOA MEDITERRANEA", precio: 300 },
    { id: 8, nombre: "MEDALLONES GREEN MOON", precio: 300 },
    { id: 9, nombre: "MOUSSE DE CHOCOLATE", precio: 350 },
    { id: 10, nombre: "VOLCAN DE CHOCOLATE", precio: 350 },
    
];

for (const producto of productos) {
  $("#items").append(  
  `<div class="col-sm-12 col-md-6 col-lg-4 col-xl-3 card-shopp">
  <div class="item shadow mb-4">
  <h3 class="item-title">${producto.nombre}</h3>  
  <div class="divImg"><img class="item-image" src="img/${producto.id}.jpg"></div>
  <div class="item-details">
  <h4 class="item-price">$${producto.precio}</h4>
  <button class="item-button btn btn-primary addToCart">AÑADIR AL CARRITO</button>
  </div>
  </div>
  </div>`
  );    
};

const addToShoppingCartButtons = document.querySelectorAll('.addToCart');
addToShoppingCartButtons.forEach((addToCartButton) => {
  addToCartButton.addEventListener('click', addToCartClicked);
});

const comprarButton = document.querySelector('.comprarButton');
comprarButton.addEventListener('click', comprarButtonClicked);

const shoppingCartItemsContainer = document.querySelector(
  '.shoppingCartItemsContainer'
);

function addToCartClicked(event) {
  const button = event.target;
  const item = button.closest('.item');

  const itemTitle = item.querySelector('.item-title').textContent;
  const itemPrice = item.querySelector('.item-price').textContent;
  const itemImage = item.querySelector('.item-image').src;

  addItemToShoppingCart(itemTitle, itemPrice, itemImage);
}

function addItemToShoppingCart(itemTitle, itemPrice, itemImage) {
  const elementsTitle = shoppingCartItemsContainer.getElementsByClassName(
    'shoppingCartItemTitle'
  );
  for (let i = 0; i < elementsTitle.length; i++) {
    if (elementsTitle[i].innerText === itemTitle) {
      let elementQuantity = elementsTitle[
        i
      ].parentElement.parentElement.parentElement.querySelector(
        '.shoppingCartItemQuantity'
      );
      elementQuantity.value++;
      $('.toast').toast('show');
      updateShoppingCartTotal();
      return;
    }
  }

  const shoppingCartRow = document.createElement('div');
  const shoppingCartContent = `
  <div class="row shoppingCartItem">
        <div class="col-6">
            <div class="shopping-cart-item d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                <img src=${itemImage} class="shopping-cart-image">
                <h6 class="shopping-cart-item-title shoppingCartItemTitle text-truncate ml-3 mb-0">${itemTitle}</h6>
            </div>
        </div>
        <div class="col-2">
            <div class="shopping-cart-price d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                <p class="item-price mb-0 shoppingCartItemPrice">${itemPrice}</p>
            </div>
        </div>
        <div class="col-4">
            <div
                class="shopping-cart-quantity d-flex justify-content-between align-items-center h-100 border-bottom pb-2 pt-3">
                <input class="shopping-cart-quantity-input shoppingCartItemQuantity" type="number"
                    value="1">
                <button class="btn btn-danger buttonDelete" type="button">X</button>
            </div>
        </div>
    </div>`;
  shoppingCartRow.innerHTML = shoppingCartContent;
  shoppingCartItemsContainer.append(shoppingCartRow);

  shoppingCartRow
    .querySelector('.buttonDelete')
    .addEventListener('click', removeShoppingCartItem);

  shoppingCartRow
    .querySelector('.shoppingCartItemQuantity')
    .addEventListener('change', quantityChanged);

  updateShoppingCartTotal();
}






$("#envio").append(  
  `<h3 class="animacion">Calcule el valor del envío (solo en capital)</h2>
  <select name="barrios" placeholder="seleccione su barrio" id="ipt1"></select>
  <button id="btn1">Calcular</button>`
  );  

  //JSON
var barriosField = document.querySelector('select[name = barrios]');
const URLJSON = "barrios.json"


$("#ipt1").ready(() => { 
  $.getJSON(URLJSON, function (respuesta, estado) {
      if(estado === "success"){
        let misDatos = respuesta;
        for (const dato of misDatos) {
          $("#ipt1").append(`<option>${dato.name}<option>`)
        }  
      }
      });
  });
  var costoEnvio = 0
$("#ipt1").change((e) => {
  var barrioIndicado = barriosField.value;
  function calcularEnvio(costo) {
    switch (costo) {
        case "Liniers":
            return 0;
            break;
        case "Versalles":
            return 100;
            break;
        case "Villa Luro":
            return 100;
            break;
        case "Mataderos":
            return 100;
            break;
        case "Villa Real":
            return 150;
            break;
        case "Monte Castro":
            return 150;
            break;
        case "Vélez Sársfield":
            return 150;
            break;
        case "Floresta":
            return 150;
            break;
        case "Flores":
            return 150;
            break;
        case "Parque Avellaneda":
            return 150;
            break;
        case "Villa Devoto":
            return 200;
            break;
        case "Agronomía":
            return 200;
            break;
        case "Villa del Parque":
            return 200;
            break;
        case "Villa Santa Rita":
            return 200;
            break;
        case "Villa General Mitre":
            return 200;
            break;
        case "La Paternal":
            return 200;
            break;
        case "Caballito":
            return 200;
            break;
        case "Parque Chacabuco":
            return 200;
            break;
        case "Villa Pueyrredón":
            return 300;
            break;
        case "Villa Urquiza":
            return 300;
            break;
        case "Parque Chas":
            return 300;
            break;
        case "Villa Ortúzar":
            return 300;
            break;
        case "Colegiales":
            return 300;
            break;
        case "Chacarita":
            return 300;
            break;
        case "Villa Crespo":
            return 300;
            break;
        case "Almagro":
            return 300;
            break;
        case "Boedo":
            return 300;
            break;
        case "Balvanera":
            return 300;
            break;
        case "San Cristóbal":
            return 300;
            break;
        case "Parque Patricios":
            return 300;
            break;
        case "Saavedra":
            return 350;
            break;
        case "Coghlan":
            return 350;
            break;
        case "Nuñez":
            return 350;
            break;
        case "Belgrano":
            return 350;
            break;
        case "Palermo":
            return 350;
            break;
        case "":
            return 350;
            break;
        case "Recoleta":
            return 350;
            break;
        case "Retiro":
            return 350;
            break;
        case "San Nicolás":
            return 350;
            break;
        case "Monserrat":
            return 350;
            break;
        case "Constitución":
            return 350;
            break;
        case "San Telmo":
            return 350;
            break;
        case "Puerto Madero":
            return 350;
            break;
        default:
            return "X";
            break;
    }
}
costoEnvio = calcularEnvio(barrioIndicado);
  alert("El costo de envío a " + barrioIndicado + " es de: $" + costoEnvio);
});

$("#btn1").click(() => {
    $("#ipt1").trigger("change");
});


function updateShoppingCartTotal() {
  let total = 0;
  const shoppingCartTotal = document.querySelector('.shoppingCartTotal');

  const shoppingCartItems = document.querySelectorAll('.shoppingCartItem');

  shoppingCartItems.forEach((shoppingCartItem) => {
    const shoppingCartItemPriceElement = shoppingCartItem.querySelector(
      '.shoppingCartItemPrice'
    );
    const shoppingCartItemPrice = Number(
      shoppingCartItemPriceElement.textContent.replace('$', '')
    );
    const shoppingCartItemQuantityElement = shoppingCartItem.querySelector(
      '.shoppingCartItemQuantity'
    );
    const shoppingCartItemQuantity = Number(
      shoppingCartItemQuantityElement.value
    );
    total = total + shoppingCartItemPrice * shoppingCartItemQuantity + costoEnvio;
  });
  shoppingCartTotal.innerHTML = `$${total.toFixed(2)}`;
}

function removeShoppingCartItem(event) {
  const buttonClicked = event.target;
  buttonClicked.closest('.shoppingCartItem').remove();
  updateShoppingCartTotal();
}

function quantityChanged(event) {
  const input = event.target;
  input.value <= 0 ? (input.value = 1) : null;
  updateShoppingCartTotal();
}

function comprarButtonClicked() {
  shoppingCartItemsContainer.innerHTML = '';
  updateShoppingCartTotal();
}


// css desde js
$("#div1").css({"color": "black", 
                "font-size": "40px", 
                "borderLeft": "5px solid #ccc",
                "height": "25%"
            });
$("#div2").css({"color": "black", 
                "font-size": "40px", 
                
            });            
$("#btn").css({"color": "red",
                "font-size": "15px",
                "cursor":"pointer",
                "border":"3px solid pink",
                
});

