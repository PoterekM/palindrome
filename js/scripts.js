$(document).ready(function(){
  $("form#word-input").submit(function(event){
    event.preventDefault();
    $("#result").show();

    var resultWord = $("input#word1").val();
//    console.log(resultWord);
    var toBeChanged = resultWord.split("");
    // console.log(toBeChanged);
    // var palindrome = [];
    // palindrome = toBeChanged.reverse();

    console.log(toBeChanged.length);
// debugger;
    for (var i = ((toBeChanged.length)-1) ; i>0 ; --i) {
      console.log(i);
      alert(i);
    };


    // $('#result').append(palindrome);

    //   $('#result').append(workTransportationMode + "<br>");
    $('#word-input').hide();
  });
});
