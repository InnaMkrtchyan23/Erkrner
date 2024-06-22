// function start(){
//     with(document) {
//     let h1 = String(getElementById('left_1').value);
//     let h2 = String(getElementById('left_2').value);
//     let h3 = String(getElementById('left_3').value);
//     let h4 = String(getElementById('left_4').value);
//     let h5 = String(getElementById('left_5').value);
//     let h6 = String(getElementById('left_6').value);
//     let h7 = String(getElementById('right_1').value);
//     let h8 = String(getElementById('right_2').value);
//     let h9 = String(getElementById('right_3').value);
//     let h10 = String(getElementById('right_4').value);
//     let h11 = String(getElementById('right_5').value);

//     let result = 0;
//     let quality;

//     if(h1 == 'Yerevan'){
//         result+=10
//         getElementById('left_1').style.backgroundColor = 'green'
//     }else getElementById('left_1').style.backgroundColor = 'red'

//     if(h2 == 'Woshington'){
//         result+=10
//         getElementById('left_2').style.backgroundColor = 'green'
//     }else getElementById('left_2').style.backgroundColor = 'red'

//     if(h3 == 'Pekin'){
//         result+=10
//         getElementById('left_3').style.backgroundColor = 'green'
//     }else getElementById('left_3').style.backgroundColor = 'red'

//     if(h4 == 'London'){
//         result+=10
//         getElementById('left_4').style.backgroundColor = 'green'
//     }else getElementById('left_4').style.backgroundColor = 'red'

//     if(h5 == 'Madrid'){
//         result+=10
//         getElementById('left_5').style.backgroundColor = 'green'
//     }else getElementById('left_5').style.backgroundColor = 'red'

//     if(h6 == 'Moscow'){
//         result+=10
//         getElementById('left_6').style.backgroundColor = 'green'
//     }else getElementById('left_6').style.backgroundColor = 'red'

//     if(h7 == 'Berlin'){
//         result+=10
//         getElementById('right_1').style.backgroundColor = 'green'
//     }else getElementById('right_1').style.backgroundColor = 'red'

//     if(h8 == 'Mexico'){
//         result+=10
//         getElementById('right_2').style.backgroundColor = 'green'
//     }else getElementById('right_2').style.backgroundColor = 'red'

//     if(h9 == 'Ottawa'){
//         result+=10
//         getElementById('right_3').style.backgroundColor = 'green'
//     }else getElementById('right_3').style.backgroundColor = 'red'

//     if(h10 == 'Paris'){
//         result+=10
//         getElementById('right_4').style.backgroundColor = 'green'
//     }else getElementById('right_4').style.backgroundColor = 'red'

//     if(h11 == 'Kiev'){
//         result+=10
//         getElementById('right_5').style.backgroundColor = 'green'
//     }else getElementById('right_5').style.backgroundColor = 'red'


//     if(result<=50){
// quality = 'anbavarar'
// getElementById('hashiv').style.color = 'red'
// getElementById('patasxan').style.color = 'red'
//     }

// if(result<50 && result>=80){
//     quality = 'bavarar'
//     getElementById('hashiv').style.color = 'pink'
//     getElementById('patasxan').style.color = 'pink'
//     // getElementById('patasxan').style.left = '40%'
//     }

// if(result<80 && result>=90){
// quality = 'lav'
// getElementById('hashiv').style.color = 'gold'
// getElementById('patasxan').style.color = 'gold'
//     }

//     if(result>100){
//         quality = 'gerazanc'
//         getElementById('hashiv').style.color = 'green'
//         getElementById('patasxan').style.color = 'green'
//         // getElementById('patasxan').style.left = '40%'

//             }

//     getElementById('hashiv').innerHTML = result
//     getElementById('patasxan').innerHTML = quality

//     }
// }


function start() {
    with (document) {
        let h_1 = String(getElementById("left_1").value);
        let h_2 = String(getElementById("left_2").value);
        let h_3 = String(getElementById("left_3").value);
        let h_4 = String(getElementById("left_4").value);
        let h_5 = String(getElementById("left_5").value);
        let h_6 = String(getElementById("left_6").value);
        let h_7 = String(getElementById("right_1").value);
        let h_8 = String(getElementById("right_2").value);
        let h_9 = String(getElementById("right_3").value);
        let h_10 = String(getElementById("right_4").value);
        let h_11 = String(getElementById("right_5").value);
        let result = 0;
        let vorak;
        if (h_1 == "Yerevan") {
            result += 2;
            getElementById("left_1").style.borderColor = "gold";
        } else {
            getElementById("left_1").style.borderColor = "red"
        }
        if (h_2 == "Washington") {
            result += 2;
            getElementById("left_2").style.borderColor = "gold";
        } else {
            getElementById("left_2").style.borderColor = "red"
        }
        if (h_3 == "Ankara") {
            result += 2;
            getElementById("left_3").style.borderColor = "gold";
        } else {
            getElementById("left_3").style.borderColor = "red"
        }
        if (h_4 == "London") {
            result += 2;
            getElementById("left_4").style.borderColor = "gold";
        } else {
            getElementById("left_4").style.borderColor = "red"
        }
        if (h_5 == "Madrid") {
            result += 2;
            getElementById("left_5").style.borderColor = "gold";
        } else {
            getElementById("left_5").style.borderColor = "red"
        }
        if (h_6 == "Kyiv") {
            result += 2;
            getElementById("left_6").style.borderColor = "gold";
        } else {
            getElementById("left_6").style.borderColor = "red"
        }
        if (h_7 == "Paris") {
            result += 2;
            getElementById("right_1").style.borderColor = "gold";
        } else {
            getElementById("right_1").style.borderColor = "red"
        }
        if (h_8 == "Berlin") {
            result += 2;
            getElementById("right_2").style.borderColor = "gold";
        } else {
            getElementById("right_2").style.borderColor = "red"
        }
        if (h_9 == "Mexico") {
            result += 2;
            getElementById("right_3").style.borderColor = "gold";
        } else {
            getElementById("right_3").style.borderColor = "red"
        }
        if (h_10 == "Beijing") {
            result += 2;
            getElementById("right_4").style.borderColor = "gold";
        } else {
            getElementById("right_4").style.borderColor = "red"
        }
        if (h_11 == "Ottawa") {
            result += 2;
            getElementById("right_5").style.borderColor = "gold";
        } else {
            getElementById("right_5").style.borderColor = "red"
        }
        if (result <= 6) {
            vorak = " ANBAVARAR";
            getElementById("hashiv").style.color = "red";
            getElementById("patasxan").style.color = "red";
        }
        if (result > 6 && result <= 18){
            vorak = " LAV";
            getElementById("hashiv").style.color = "gold";
            getElementById("patasxan").style.color = "gold"
            getElementById("patasxan").style.right = "449px";
        }
        if(result>18){
            vorak = " GERAZANC";
            getElementById("hashiv").style.color = "green";
            getElementById("patasxan").style.color = "green";
            getElementById("patasxan").style.right = "362px";
        }
        getElementById("hashiv").innerHTML =result;
        getElementById("patasxan").innerHTML=vorak;
  }
}
