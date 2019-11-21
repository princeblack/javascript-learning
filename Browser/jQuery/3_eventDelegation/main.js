$(document).ready(function(){
    console.log('test');

    // $('button.btns').on('click',function () {
    //     console.log('button click...');
    //     console.log('hallo form '+$(this).text());
    // })

    $('div').on('click','button.btns',function () {
        console.log('button click...');
        console.log('hallo form '+$(this).text());
    })
    let index = 4;
    $('#addButton').on('click',function (){
        let buttonText = 'Button' + index;
        $('div').append('<button class="btns">' + buttonText + '</button> ');
        index++;
    })

    let counter = 2;
    $('#addUserButton').on('click', function (e) {
        const html = `        
        <tr id="user-${counter}">
        <td>${counter}</td>
        <td>User -${counter}</td>
        <td><button class="removeButton">Remove me</button></td>
    </tr>`;
        $('#users').append(`${html}`);
        // remove()
        $('.removeButton').on('click', function (e) {
            $(this).closest("tr").remove();
        });
        counter++;
    });

})