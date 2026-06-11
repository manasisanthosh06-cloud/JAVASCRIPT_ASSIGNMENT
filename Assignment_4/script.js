function countCharacters() {

    let text =
    document.getElementById("message").value;

    document.getElementById("count").innerHTML =
    "Character Count: " + text.length;

}
