/**
 * Use the jQuery Validate and the bootstrap-select plugin to enhance this page
 *
 * Here's what this you will need to do:
 *
 * 1. When the page is loaded all form fields should be disabled except
 *    for the dropdown to select a student //OK
 *
 * 2. Using the bootstrap-selct plugin render dropdown on the page //OK
 *
 * 3. Use the live search functionality to make the dropdown searchable //OK
 *
 * 4. Add the user glyphicons next to each student in the list //OK
 *
 * 6. Add a menu header to the dropdown //OK
 *
 * 7. Customize further with anything you find intersting // OK
 *
 * 8. When an student is selected the form fields should be enabled
      and populated with the data for the selected student //OK
 *
 * 9. Use jQuery validate and add validation to the form with the following requirements
 *    First Name - required, at least 2 characters
 *    Last Name  - required, at least 2 characters
 *	  start_date - make sure date is yyyy-mm-dd
 *	  ADD any other validation that makes you happy
 *
 * 10. Make the color of the error text red
 *
 *
 *
 * Here's the documentation you need:
 * https://jqueryvalidation.org/validate/
 * https://jqueryvalidation.org/documentation/#link-list-of-built-in-validation-methods
 * https://silviomoreto.github.io/bootstrap-select/
 * https://silviomoreto.github.io/bootstrap-select/examples/
 * http://getbootstrap.com/components/#glyphicons
 * https://api.jquery.com/jQuery.get/
 * http://stackoverflow.com/questions/9807426/use-jquery-to-re-populate-form-with-json-data
 *
 */

 (function(){

   $(function(){

/*
      //store the element ID of the drop down select
      let selectForm = $("#student_id");

      //store incoming students
      let currentUpdateStudent;

    selectForm.change(function(){

      //store current student in variable for when we submit the form
      //we need this to know what student we are updating
      console.log($(this).val())
      currentUpdateStudent = $(this).val();
      $.get("http://localhost:1337/Student/"+currentUpdateStudent, function(myStudent) {
         $.each(myStudent, function(key, val){
             //find the input field that matches the name of the key
             let el = $('[name="'+key+'"]');
             //find the type of field that we selected
             let type = el.attr('type');

             //based on the type choose how we set the value
             switch(type){
                 case 'checkbox':
                     el.attr('checked', 'checked');
                     break;
                 case 'radio':
                     el.filter('[value="'+val+'"]').attr('checked', 'checked');
                     break;
                 default:
                     el.val(val); //populates form with data
             }
         });
      })

      //enable input fields after we fill out the form
      $("#updateStudentForm :input").prop("disabled", false);
    })

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
$("#updateStudentForm").validate(
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
         },
         major_id: {
            minlength: 2
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
         },
         major_id: {
            minlength: "Please enter a value at least 1 character"
         }
        }

    });

   //  $("#submitBtn").click(function(e){
   //       e.preventDefault();
   //       $.post("http://localhost:1337/Student/", $("#updateStudentForm").serialize(), function(data){
   //
   //
   //        //disable form fields again
   //        $("#updateStudentForm :input").prop("disabled", true);
   //
   //        //reset form back to empty fields
   //        $("#updateStudentForm")[0].reset()
   //      })
   //    })
   //
   //
  */
   })

 })();
