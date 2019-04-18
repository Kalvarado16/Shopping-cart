var names= [];
var prices= [];
$(".newItem").click(function() {
    var name = $(".itemname").val();
    var price= parseInt($(".itemprice").val());
  
  names.push(name);
  prices.push(price);
   

  
//   console.log(names);  
     console.log (name);
     console.log (price);
    //  console.log (prices);
});
 
 $(".purchase").click(function() {
   var priceTotal=0; 
   prices.forEach(function(element){
       priceTotal += element; 
       
 });
 $(".totalprice").text(priceTotal);
 });
 
  