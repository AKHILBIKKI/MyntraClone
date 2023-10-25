let newitems =[];
onload();

function onload() {
    loadItemBag();
    displayBag();
    itemsselected();
}
  
function loadItemBag(){
    newitems = bagItems.map(itemid =>{
            for(let i=0;i<items.length;i++)
            {
                if(itemid == items[i].item_id)
                {
                    return items[i];
                }
            }
    })
}

console.log(bagItems);

function removetheitem(itemid) {
    bagItems = bagItems.filter(bagitem => bagitem !== itemid)

    console.log(bagItems);
    
}

  function itemsselected(){
    let itemsElement = document.querySelector('.items_selected');
    let iteminnerHtml ='';

    newitems.forEach(item => {
        
    iteminnerHtml +=`
    <div class="item_container">
    <div class="item_selected_container">
        <img class="item_image" src="${item.item_image}">
    </div>

    <div class="item_container_details">
        <div class="items_compayname">${item.item_companyname}</div>
        <div class="items_name">${item.item_name}</div>
        <div class="items_price">
            <span class="items_sellingprice">Rs ${item.item_sellingprice}</span>
            <span class="items_actualprice">Rs ${item.item_actualprice}</span>
            <span class="items_discount">(${item.item_discount}% OFF)</span>
        </div>
        <div class="item_returnDate"><span class="returnDate">${item.item_returnDate} Days</span>return available</div>
        <div class="deliveryDate">Delivery by<span class="delivery_Date">${item.item_deliveryDate}</span></div>

        <div class="removeFromBag" onclick="removetheitem(${item.item_id})">X</div>
    </div>
    </div>`;
    });

    itemsElement.innerHTML =iteminnerHtml;
  }


