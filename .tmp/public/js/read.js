/**
 * Use DataTables to enhance the functionality of the table on this page.
 *
 * ** NOTE ** All extentsions are availabile in your code already.
 *            You only need to include the javascript and css listed below
 *
 * Here's what this you will need to do:
 *
 * 1. Inlclude the following DataTables css in layout.ejs //OK
 *    <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/v/bs/dt-1.10.12/b-1.2.2/b-print-1.2.2/cr-1.3.2/datatables.min.css"/>
 *
 * 2. Include the following DataTables JavaScript in layout.ejs //OK
 *    <script type="text/javascript" src="https://cdn.datatables.net/v/bs/jszip-2.5.0/pdfmake-0.1.18/dt-1.10.12/b-1.2.2/b-html5-1.2.2/b-print-1.2.2/cr-1.3.2/datatables.min.js"></script>
 *
 * 3. Using the DataTables plugin render the table on the page as a DataTable //OK
 *
 * 4. Use the buttons extention to enable the copy, csv, excel, pdf, and print //OK
 *
 * 5. Use the colReorder Plugin to add the ability to reorder columns //OK
 *
 * 6. The table should be able to scroll horizontal
 *
 * 7. Use any other features you find interesting
 *
 * Here's the documentation you need:
 * https://datatables.net/
 * https://datatables.net/extensions/buttons/examples/
 * https://datatables.net/extensions/colreorder/examples/
 * https://datatables.net/examples/basic_init/scroll_x.html
 *
 */

 (function(){

   $(function(){

     $(".displayButton").click(function(event){
       const id = $(this).data("target-id");
       $(".recipedialog").hide()
       $(`[data-recipe-id=${id}]`).toggle();

     })

     //function to call api
     function callAPI(url){
        $.get(url, function(recipes){
           console.log(recipes.length)
           for(let i=0; i < recipes.length; i++){
           $("#recipecard").append(recipes.title)
       }
        })
     }

     callAPI()


     //code for when the search button is clicked
     $("#submit_button").click(function(event){
        event.preventDefault()
       if($("#recipeSearch").val() !== ""){
         let searchParam = $("#recipeSearch").val()
         console.log(searchParam)
         let newURL = "back end endpoint/" + searchParam
         $("#recipecard").html("")
         callAPI(newURL)
       }else{
         $("#recipecard").html("")
         //getCharacters(initialURL)
       }
     })

    // $("button").click(function(){
    //   console.log($(this).parent())
    //   $(this).parent().toggleClass()
    //   //$("p").toggleClass();
    // })
    //
    // //this toggles all p's to display, not the ones within this one recipe
    // //    //$("p").toggleClass();



   // 	//code goes here
    // let addRecipe = {
    //   title: "Chile",
    //   description: "Tasty and spicy chili made with beef and beans - perfect for dinner!",
    //
    // }
  //   let table = $('#studentTable').DataTable({
  //         buttons: [
  //             'copy', 'excel', 'pdf', 'csv','print'
  //         ],
  //          colReorder: true,
  //          "scrollX": true
  //      });
   //
  //  table.buttons().container().appendTo( $('.col-sm-6:eq(0)', table.table().container() ) );


   })

 })();
