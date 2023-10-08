$(function () {
    /* nahradenie obsahu: */

    // metody: replaceAll() a replaceWith()
    // $('p').replaceWith('<div>Nahrazeno</div>');
    // $('<div> Nahrazeno </div>').replaceAll('p');

    // $('p').replaceWith('<div> Knock </div>');
    // $('div:last').replaceWith('<div> Penny! </div>');

    // $('p').not('p:last').replaceWith('<div> Knock </div>');
    // $('p:last').replaceWith('<div> Penny! </div>');

    /* metoda each - zmena znacky ale zachovanie obsahu
    $('p').each(function () {
        let obsah = $(this).html();
        // console.log(obsah);
        $(this).replaceWith('<div>' + obsah + '</div>');
    });
    // zmena az po kliknuti:
    $('div').on('click', function () {
        let obsah = $(this).html();
        $(this).replaceWith('<p>' + obsah + '</p>');
    });
    */

    /* Klonovanie, kopirovanie */
    // metoda clone()
    // $('b').clone().insertAfter('b');
    // $('b').clone().prependTo("p");
    // $('p').clone().insertAfter('p');
    /*
    $('p').on('click', function () {
        let obsah = $(this).html();
        $(this).clone().insertAfter($(this));
        $('p:last').replaceWith('<div>' + $('b').text() + obsah + '</div>');
    });
    */

    // $('div').on('click', function () {
    //     $(this).clone().insertAfter($(this));
    // });

    $('div').on('click', function () {
        $(this).clone(true).insertAfter($(this));
    });
});