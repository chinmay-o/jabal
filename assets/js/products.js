let productsRef = firebase.database().ref('product-database');
let productList;
var productArray = [];

var load = false;
var interv = setInterval(checkLoader, 100);

function checkLoader() {

  if (load) {

    productTable();
    clearInterval(interv);
  }
}

productsRef.on("value", function(snapshot) {

   productList = snapshot.val();
   load = true;
}, function (error) {

   console.log("Error: " + error.code);
});

function productTable() {

  productArray = [];

  for (let key in productList) {

    productArray.push({
      key: key,
      timestamp: productList[key].timestamp,
      name: productList[key].title,
      category: productList[key].category,
      imageURL: productList[key].productURL,
    });
  }
  productArray.reverse();
  productHTML();
}

function productHTML() {

  for (var i = 0; i < productArray.length; i++) {

    document.getElementById('productList').innerHTML += '<div id="'+ productArray[i].key +
    '" class="mt-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 '+ productArray[i].category.toLowerCase().split("(")[0].split(" ").join("") +'">'+
        '<div class="rts-product-one">'+
            '<div class="thumbnail-area">'+
                '<img src="'+ productArray[i].imageURL +'" alt="Business_Finbiz">'+
                '<a class="rts-btn btn-primary rounded" href="tel:+97143302280">'+
                '<i class="far fa-arrow-right"></i></a>'+
            '</div>'+
            '<div class="custom-grid">'+
              '<div class="product-contact-wrapper">'+
                  '<a href="tel:+97143302280">'+
                      '<h5 class="title">'+ productArray[i].name +'</h5>'+
                  '</a>'+
                  '<span>'+ productArray[i].category +'</span>'+
              '</div>'+
              '<a href="tel:+97143302280" class="rts-btn btn-primary">Order Now</a>'+
            '</div>'+
        '</div>'+
    '</div>'
  }
}
