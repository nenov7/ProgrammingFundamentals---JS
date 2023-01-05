function cutAndReverse(sentence){
    let firstPart = sentence.substring(0,sentence.length/2);
    let secondPart = sentence.substring(sentence.length/2)

    let reversed1 = firstPart.split("").reverse().join("");
    let reversed2 = secondPart.split("").reverse().join("");

    console.log(reversed1);
    console.log(reversed2);
}
cutAndReverse('sihToDtnaCuoYteBIboJsihTtAdooGoSmI')