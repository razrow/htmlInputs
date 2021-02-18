var answer1="DiscoVision";
var answer2="constantlinearvelocity";
var answer3="jaws";
var answer4= ["hdtv","analogv","digitala","analoga","surround","stills"];
var answer4Wrong= ["digitalv","rgb","progressive"];
var answer5 = "correctAnswer";
// var answers3 = ["Alien","Saturday Night Fever", "Jaws", "Star Wars: A New Hope", "Avengers: Infinity War"];
// answers3 = _.shuffle(answers3);
var guess4;
var score;


$("#submit").on("click", gradeQuiz);


function gradeQuiz() {
  //alert("hi");
  var score = 0;
  let guess1= $('#textField').val();
  let guess2= $('#dropDown').val();
  let guess3= $('[name="movie"]:checked').val();
  
  // let guess4 = [];
  // guess4 = ($("#features[type='checkbox']:checked").map(function() {
  //   console.log(this);
  //   return $(this).val();
  // }).get());
  
  guess4=$("#features [type=checkbox]:checked");
  let guess5= $("#players").val();
  // guess4.forEach(function(item){
  //   for(var i=0; i<item.data.length; i++){
  //     var myArr = [];
  //     myArr.push(item.data[i])
  //   }
  // })
  var checks = [];
  for(var i =0; i<guess4.length;i++){
    checks.push(guess4[i].value);
  }
  console.log(checks);

  //Answer 1
  if (guess1==answer1) {
    $("#indicator1").html("Correct!");
    $("#indicator1").css("backgroundColor", "lightgreen");
    score+=25;
  }
  else {
    $("#indicator1").html("Incorrect.");
    $("#indicator1").css("backgroundColor", "red");
  }


  //Answer 2
  if (guess2==answer2) {
    $("#indicator2").html("Correct!");
    $("#indicator2").css("backgroundColor", "lightgreen");
    score+=25;
  }
  else {
    $("#indicator2").html("Incorrect.");
    $("#indicator2").css("backgroundColor", "red");
  }


  //Answer 3
  if (guess3==answer3) {
    $("#indicator3").html("Correct!");
    $("#indicator3").css("backgroundColor", "lightgreen");
    score+=25;
  }
  else {
    $("#indicator3").html("Incorrect.");
    $("#indicator3").css("backgroundColor", "red");
  }


  //Answer 4
  // check every answer to give you a score
  // var checkboxes = document.getElementsByName("feature");
  // // loop over them all
  // var score = 0;
  // for (var i=0; i<checkboxes.length; i++) {
  //    if (checkboxes[i].checked) {
  //       if(answer4.includes(checkboxes[i].val)) {
  //         score++;
  //       }
  //    }
  // }
  // Return the array if it is non-empty, or null
  //return checkboxesChecked.length > 0 ? checkboxesChecked : null;
  checks.sort();
  answer4.sort();
  if (checks.length == answer4.length) {
    for(var i=0; i<checks.length;i++){
      if(checks[i] != answer4[i]){
        $("#indicator4").html("Incorrect.");
        $("#indicator4").css("backgroundColor", "red");
        break;
      }
    }
    $("#indicator4").html("Correct!");
    $("#indicator4").css("backgroundColor", "lightgreen");
    score+=25;
  }
  else {
    $("#indicator4").html("Incorrect.");
    $("#indicator4").css("backgroundColor", "red");
  }


  //Answer 5
  if (guess5==answer5) {
    $("#indicator5").html("Correct!");
    $("#indicator5").css("backgroundColor", "lightgreen");
    score+=25;
  }
  else {
    $("#indicator5").html("Incorrect.");
    $("#indicator5").css("backgroundColor", "red");
  }


    $("#score").html(score + "/125");


}

