$(document).ready(function (){
    $('.insertAfter').click(function () {
        let val = $('#userinput').val();
        try {
            if (val.length > 0) {
                $('<li>'+val+'</li>').insertAfter('#contendersList li:last');
                $('#userinput').val('');
            }
        } catch (error) {
            alert(error)
        }
    })
    $('.after').click(function () {
        let val = $('#userinput').val();
        if (val.length > 0) {
            $('#contendersList li:last').after('<li>'+val+'</li>');
            $('#userinput').val(''); 
        }
    })
    $('.insertBefore').click(function () {        
        let val = $('#userinput').val();
        if (val.length > 0) {
            $('<li>'+val+'</li>').insertBefore('#contendersList li:first')
            $('#userinput').val('');
        }
    })
    $('.before').click(function () {        
        let val = $('#userinput').val();
        if (val.length > 0) {
            $('#contendersList li:first').before('<li>'+val+'</li>')
            $('#userinput').val('');
        }
    })
    $('.appendTo').click(function (){
        let val = $('#userinput').val();
        if (val.length > 0 ) {
            $('<li>'+val+'</li>').appendTo('#contendersList')
            $('#userinput').val('')
        }
    })
    $('.append').click(function (){
        let val = $('#userinput').val();
        if (val.length > 0) {
            $('#contendersList').append('<li>'+val+'</li>')
            $('#userinput').val('')
        }
    })

})