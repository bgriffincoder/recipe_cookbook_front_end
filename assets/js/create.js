/**
 * Use the jQuery Validate plugin to add validation to the form
 *
 * Here's what this you will need to do:
 *
 * 1. Include the following jQuery Validate JavaScript in layout.ejs
 *    <script type="text/javascript" src="http://ajax.aspnetcdn.com/ajax/jquery.validate/1.15.0/jquery.validate.min.js"></script>
 *
 * 2. Use jQuery validate and add validation to the form with the following requirements
 *    First Name - required, at least 2 characters
 *    Last Name  - required, at least 2 characters
 *	  start_date - make sure date is yyyy-mm-dd
 *	  ADD any other validation that makes you happy
 *
 * 3. Use a custom message for one validation
 *
 * 4. Make the color of the error text red
 *
 *
 *
 * Here's the documentation you need:
 * https://jqueryvalidation.org/validate/
 * https://jqueryvalidation.org/documentation/#link-list-of-built-in-validation-methods
 *
 */

(function(){

  $(function(){

/*
    //add method to validator to check date format
    $.validator.addMethod(
        "customDate",
        function(value, element) {
            // put your own logic here, this is just a (crappy) example
            return value.match(/([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/);
        },
        "Please enter a date in the format yyyy-mm-dd."
    );

    //add method to validator to check date format
    $.validator.addMethod(
        "customScore",
        function(value, element) {
            // put your own logic here, this is just a (crappy) example
            return value.match(/([0-9]{4})/);
        },
        "Please enter a a valid SAT score format as ####."
    );

    // Initialize form validation on the registration form.
    // It has the name attribute "create"
    // just for the demos, avoids form submit
  	$("#addStudentForm").validate(
      {
        // Specify validation rules
        rules:
         {
           first_name: {
               required: true,
               minlength: 2
          },
           last_name: {
               required: true,
               minlength: 2
           },
           start_date: {
              customDate: true
           },
           sat: {
              customScore: true
           }
         },
         // Specify validation error messages
          messages: {
            first_name: {
              required: "Please enter your firstname",
              minlength: "Your firstname must be at least 2 characters long"
            },
            last_name: {
              required: "Please enter your lastname",
              minlength: "Your lastname must be at least 2 characters long"
            }
          }

      });

*/

  })

})();
