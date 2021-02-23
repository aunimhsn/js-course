/**
 * Please write a word counter.
 * -- 
 *  
 */

function CountNumber(){
    let Number = 0;
    let texte = document.getElementById("Text").value;

    for (var i = 0; i < Text.length; i++) {
        let Word = texte[i];

        if (texte.split(Word === " ")) {
            Number += 1;
        }
    }
    Number += 1;

    document.getElementById("Number").value = Number;
}