function phoneNumber(numArr){
    let pattern = /\+359([ -])2\1([0-9]{3})\1([0-9]{4})\b/g;
    console.log(numArr[0].match(pattern).join(', '));

}
phoneNumber(['+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222'])