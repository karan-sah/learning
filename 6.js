/**
 *
 * Try to complete the following ：
 *
 *  console.log(camelcase('HELLO WORLD')) // helloWorld
 *
 *  console.log(camelcase('HELLO         WORLD')) // helloWorld
 *
 *  console.log(camelcase('muthu')) // muthu
 *
 *  console.log(camelcase('hi----you')) // hiYou
 *
 **/ // 
function camelcase(str) {

    str = str.replace(/-{1,}/, "")
    str = str.replace(/\s+/g, ' ')
    //str = str.replace(re," ")
    var arr = []
    str = str.toLowerCase();
    let div = str.split(" ");

    div.map((word) => {

        var index = word.split("");
        index[0] = index[0].toUpperCase();
        console.log(index)
        console.log(index.join(""))
        arr.push(index.join(""));
    })

    arr = arr.join("")

    console.log(arr)
    var newArray = arr.split("")

    newArray[0] = newArray[0].toLowerCase();
    var op = newArray.join("");
    return (op)


}