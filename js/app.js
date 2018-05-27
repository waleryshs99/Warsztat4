$(document).ready(function(){
var rootDiv = $("#root");
refreshBooks(rootDiv);

function refreshBooks(rootElement){
    rootElement.html("");
    $.ajax({
        url:"http://localhost:8282/books",
        type: "GET",
    
    }).done(function(data){
        for(var i = 0; i < data.length; i++){
            var bookElement =
                 $("<div class='book' data-id=" 
                 + data[i].id + ">"
                 + data[i].title 
                 + "<div style='display: none; background-color:red;'>" 
                 + "</div></div>");
            rootElement.append(bookElement);

            varauthor = $('')
        }
    })
}
function handleForm(){

    var form = $('.new_book');
    var submitButon = form.find('#add-button');
    submitButton.on('click', function(event){
        event.preventDefault();

    var author = $('#author').val();
    var isbn = $('#isbn').val();
    var publisher = $('publishe').val();
    var title = $('title').val();
    var type = $('type').val();

    })

}

rootDiv.on('click', '.book', function(){
    console.log($(this).data("id"));
    var bookDiv = $(this);
    var detailDiv = bookDiv.find('div');
    var bookId = $(this).data("id");

    $.ajax({
        url:"http://localhost:8282/books/" + bookId,
        type: "GET"
    }).done(function(bookDetails){
        detailDiv.show();
        detailDiv.text("Autor: "  + ", isbn " + bookDetails.isbn 
        + ", publisher: " + bookDetails.publisher 
        + ", type " + bookDetails.type);

    })

})


});

// author
// isbn
// publisher
// title
// type
