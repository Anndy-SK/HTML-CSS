// Document Ready
$(document).ready(function () {
    $("#tlacitko").click(function () {
        let cislo1 = $("#cislo1").val();
        let cislo2 = $("#cislo2").val();
        let vysledek = parseInt(cislo1) + parseInt(cislo2);
        alert(vysledek);
    });
});
