(function(){ //start of self invoking function

  $(function(){ //start of wait for window to load function

    let answer; //initalize a variable for the answer so it can be accessed outside the loadQuestion function

    function loadQuestion(){
      //hit the API to get items returned and set them as the inner HTML of the id's provided
      $.get("http://jservice.io/api/random", function(data){
        $("#category").html(data[0].category.title)
        $("#point-value").html(data[0].value)
        $("#question").html(data[0].question)
        answer = data[0].answer //set variable of answer
        console.log(answer)
      })//end of API get call
    } //end of loadQuestion function

    //loads question the first time
    loadQuestion();

    //functionality for submit button
    $("#submit-button").click(function(){
      compareAnswer(answer)
      clearText()
      loadQuestion()
    })

    //function to clear text
    function clearText() {
      $('#user-answer').val("");
    }

    //function to get the user inputted answer
    function getText() {
      return $('#user-answer').val();
    }

    //function to compare user inputted answer to answer returned from API
    function compareAnswer(answer){
      if(getText() === answer){
        alert("You Answered Correctly!")
        $("#score").html(parseInt($("#score").html()) + parseInt($("#point-value").html()))
      } else {
        alert("Better luck next time...")
      }
    }

 }) // end of wait for window to load function
})() //end of self invoking function
