function encrypt(text, shift, respectCase, specialCharacters, includeSpaces){
    console.log(specialCharacters);
    shift = parseInt(shift);
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    shift %= alphabet.length;
    let result = '';
    for(let i = 0; i < text.length; i++){
        let isUpper = false;
        let char = text[i];
        if(respectCase.checked && char === char.toUpperCase()){
             isUpper = true;
        }
        char = char.toLowerCase();
        if(alphabet.includes(char)){
            const index = alphabet.indexOf(char);
            let newIndex = (index + shift) % alphabet.length;
            if(newIndex < 0){
                newIndex += alphabet.length;
            }
            if(isUpper){
                result += alphabet[newIndex].toUpperCase();
            }else{
                result += alphabet[newIndex]; 
            }
        }else if(specialCharacters.checked && char != " "){
            result += char;
        }if(includeSpaces.checked && char === " "){
            result += char;
        }
    }
    return result;
}


document.addEventListener('DOMContentLoaded', () => {
    let operationType;
    const respectCase = document.getElementById('respect-case');
    const specialCharacters = document.getElementById('special-characters');
    const includeSpaces = document.getElementById('include-spaces');
    const shift = document.getElementById('shift');
    const resultArea = document.getElementById('result-area');
    const encryptBtn = document.getElementById('encrypt-Btn');
    const decryptBtn = document.getElementById('decrypt-Btn');
    shift.value = 13;
    const update = (operation) =>{
        const text = document.getElementById('text').value;
        const shift = document.getElementById('shift').value;
        if(operation){
            resultArea.value = encrypt(text, shift, respectCase, specialCharacters, includeSpaces);
        }else{
            resultArea.value = encrypt(text, -shift, respectCase, specialCharacters, includeSpaces);
        }
    }
    shift.addEventListener('input', () => {
        operationType = 1;
        update(true);
    });
    encryptBtn.addEventListener('click', () => {
        operationType = 1;
        update(true);
    });
    decryptBtn.addEventListener('click', () => {
        operationType = 0;
        update(false);
    });
    specialCharacters.addEventListener('click', () => {
        update(operationType);
    });
    respectCase.addEventListener('click', () => {
        update(operationType);
    });
    includeSpaces.addEventListener('click', () => {
        update(operationType);
    });
});




