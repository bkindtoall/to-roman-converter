function convertToRoman(number) {

    var values = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
    var romans = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];
    var romanNumerals = "";

  if (number < 1 || number >= 4000) {
  return false;
}
  for (var i = 0; i <= values.length; i++) {

    while (number%values[i] < number) {
      romanNumerals += romans[i];
      number = number - values[i];

      }
  }


 return romanNumerals;
}

// // User Interface
$(document).ready(function(){
  $("form#roman-numerals").submit(function(event){
    event.preventDefault();
     var number = parseInt($("input#number").val());
     var result = convertToRoman(number);

  $("#output").text(result);
  });
});
