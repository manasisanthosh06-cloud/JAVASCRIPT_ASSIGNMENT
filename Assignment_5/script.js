function countWord()
{
    let text =
    document.getElementById("textArea").value;

    let word =
    document.getElementById("searchWord").value.trim();

    if(word === "")
    {
        alert("Enter a word to search");
        return;
    }

    let words =
    text.toLowerCase().match(/\b\w+\b/g);

    let count = 0;

    if(words)
    {
        for(let i = 0; i < words.length; i++)
        {
            if(words[i] === word.toLowerCase())
            {
                count++;
            }
        }
    }

    document.getElementById("result").innerHTML =
    "Occurrences: " + count;
}
