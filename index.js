const userValue = (id)=>{
    const userString = document.getElementById(id);
    const userValue = userString.value ;
    userString.value ='';
    return userValue;
}

document.getElementById('click-button').addEventListener('click',()=>{
   const userValue1 = userValue('user-input-number-digit');
   if(isNaN(userValue1)){
    alert('please enter a valid number');
    return;
   }
    else{
        replaceToBanglaNumber(userValue1);
    }
});
const replaceToBanglaNumber = (num)=>{
    let str = '০১২৩৪৫৬৭৮৯';
    num = String(num);
    let result = '';
    for(let i = 0; i<num.length; i++){
        // console.log(num[i])
        result = result + str[num[i]];
    }
    document.getElementById('show-display').innerText=result;
}


// bangla to convert number 

// document.getElementById('click-button-to-convert-bangla').addEventListener('click',()=>{
//     const userInput =  userValue('user-input-bangla-digit');
//     convetBanglaToNumber(userInput);
// });

// const convetBanglaToNumber = num =>{
//     let digit = '০১২৩৪৫৬৭৮৯';
//     let number = '0123456789';
//     num = String(replaceToBanglaNumber(num));
//     // console.log(num)
//     let result = '';
//     for(let i = 0; i < num.length ; i++){
//         // console.log(num[i])
//         result = result + digit[num[i]];
//         console.log(result)
//     }
//     // document.getElementById('show-display-one').innerText = result ;
// }
