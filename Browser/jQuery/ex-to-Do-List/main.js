$(document).ready(function () {
    $('.addBtn').on('click',function () {
        let getInfo= $('#input').val()
        $('#ul  ').append('<li id">'+getInfo+'<span class="close">x</span>'+'</li>')
        $('#input').val('');
    })
   
    $('#ul').on('dblclick', 'li', function () {
        $(this).toggleClass('checked')
    })
    $('#ul').on('click','.close',function (e) {
        $(this).parent().remove();
    });
    
})