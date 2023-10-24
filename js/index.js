let bagItems;
onload();

function onload() {
    let bagitemstr = localStorage.getItem('bagItems');
    bagItems = bagitemstr ? JSON.parse(bagitemstr) : [];
    displayitems();
    displayBag();
}

function displayitems() {
  let innerHtml = "";
  let innerHtmlElement = document.querySelector(".itemContainer");
  items.forEach((item) => {
    innerHtml += `      
            <div class="items_container">
            <img class="items_image" src="${item.item_image}" alt="Item_Image">
            <div class="items_rating">${item.item_rating.stars} ⭐ | ${item.item_rating.likes} </div>
            <div class="items_compayname">${item.item_companyname}</div>
            <div class="items_name">${item.item_name}</div>
            <div class="items_price">
            <span class="items_sellingprice">Rs.${item.item_sellingprice}</span>
            <span class="items_actualprice">Rs.${item.item_actualprice}</span>
            <span class="items_discount">(${item.item_discount}% OFF)</span>
            </div>
            <button class="items_addtobag" onclick="addtobag(${item.item_id});"><span class="material-symbols-outlined items_addingbag">shopping_bag</span>ADD TO BAG</button>
        </div>`;
  });

  innerHtmlElement.innerHTML = innerHtml;
}

function addtobag(itemId) {
  bagItems.push(itemId);
  localStorage.setItem('bagItems', JSON.stringify(bagItems));
  displayBag();
}

function displayBag() {
  let buttonElement = document.querySelector(".bag-count");
  if (bagItems.length > 0) {
    buttonElement.style.visibility = "visible";
    buttonElement.innerText = bagItems.length;
  } else {
    buttonElement.style.visibility = "hidden";
  }
}
