var massiv = function(word){
    var mass = word.toLowerCase().split("");
    return mass;
}
var verifyWord = function(main_word, word){
    var mainWord = massiv(main_word);
    var testable_word = massiv(word);
    var found = false;

   for(var i = 0; i <testable_word.length; i++){
        if(mainWord.indexOf(testable_word[i]) > -1) {
            mainWord.splice(mainWord.indexOf(testable_word[i]), 1);
            found = true;
        }else{
            found = false;
            break;
        }
   }
    return found;
}
$(document).ready(function() {
    $("form#anagramma-form").submit(function(event) {
        var value_main = $('#main-word').val();
        value_main.replace(/[/.,!?;:-]*/g, '').split("");
        if(value_main == null || value_main.length < 1){
            alert("Введите слово!");

        }else if(value_main.match(/\d+/g) != null) {
            alert("Введите слово!");
        }
        else {
            var words = ['word-1', 'word-2', 'word-3', 'word-4', 'word-5'];
            var value_word = "";

            words.forEach(function (word) {
                value_word = $('input#' + word).val();
                if (verifyWord(value_main, value_word)) {
                    $("." + word).text("+");
                } else {
                    $("." + word).text("-");
                }
            });

            $("#result").show();
            $("#btn-click").hide();

            $("#btn-again").click(function (event) {
                location.reload();
            });

            event.preventDefault();
        }
    });
});
