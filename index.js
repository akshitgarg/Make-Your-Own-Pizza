$().ready(function(){
  // our pizza variable
  let pizza = {
    cost : 0.00,
    toppings: []
  };

  let pizzaFlag = 0;

  // getting the table and assigning it to a variable, making it a jQuery object
  let cartTable = $('#cart-table');
  // getting the total price label and making it a jQuery object.
  let totalLabel = $('.cart-total-price');

  //adding toppings to pizza
  $('[id^=topping-]').click(function(){
    if(pizzaFlag == 0){
      alert("Please add a pizza first");
    }else{
      // splitting out the id as a name
      let topping = this.id.split('-')[1];
      // adding the topping name to the pizza topping array
      pizza.toppings.push(topping);
      // adding the topping cost to the pizza cost, then changing the total text to reflect the new price
      pizza.cost += $('#'+topping).data().cost;
      totalLabel.text('Rs' + pizza.cost);
      // creating a table row with the topping name and cost, appending to the table
      cartTable.append(
        "<tr>" +
          "<td> "+ topping +" </td> " +
          "<td> "+ $('#'+topping).data().cost +" </td> " +
          "<td> 1 </td> " +
        "<tr>"
      );
    }
    // logging out the pizza to the console
    console.log(pizza);
  });

  // adding a pizza
  $('#pizza-btn').click(function(){
    if(pizzaFlag == 1){
      alert('You may only have one pizza at the moment');
    }else{
      pizzaFlag = 1;
      pizza.cost += 100;
      console.log(pizza);
      cartTable.append(
        "<tr>" +
          "<td> Pizza </td> " +
          "<td> 100 </td> " +
          "<td> 1 </td> " +
        "<tr>"
      );
      totalLabel.text('Rs 100');
    }

  });



});
