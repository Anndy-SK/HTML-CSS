// html() a text()
$(function () {     // skrateny zapis Document Ready
    let zdroj = $('#vlozenie .one');
    $('#vlozenie .two').html(zdroj.html());
    $('#vlozenie .three').text(zdroj.text());
    $('#vlozenie .four').text(zdroj.html());

    // append(), appendTo()
    // $('#vlozenie .three').append("<b>Ahoj, ja som APPENDED</b>");
    // $('<i>Ahoj, ja som APPENDEDTO</i>').appendTo('#vlozenie .three');
    // $('#vlozenie .two').appendTo('#vlozenie .three');
    // $($('#vlozenie .two').html()).appendTo($('#vlozenie .three'));

    // prepend() a prependTo() - to iste ako append akurat ze pripaja na zaciatok
    // $('#vlozenie .one').prepend($('#vlozenie .four'));

    // after() a insertAfter()
    $('#vlozenie .one').after("<div id='cez_after'>Ahoj, ja som vlozeny cez <b>.after()</b></div>");
    // $('#cez_after').insertAfter('#vlozenie .two');

    // before() a insertBefore()
    $('#cez_after').before("<div id='cez_before'>Ahoj, ja som vlozeny cez <b>.before()</b></div>");
    // $('#cez_before').insertBefore('#vlozenie .one');

    // obalenie elementu
    // wrap(), unwrap(), wrapAll() a wrapInner()
    $('#cez_before').wrap('<section><article></article></section>');
    // $('#cez_before').wrap("<div><div><p><em><b></b></em></p></div></div>");

    // $('#cez_before').unwrap('<article></article>');

    $('#cez_after, #vlozenie .four').wrapAll($('.gray'));

    $('#cez_after').wrapInner('<div class="red"></div>');

});

