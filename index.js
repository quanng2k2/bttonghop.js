// code tính diện tích hình vuông và hình chữ nhật.
/*let a= +prompt("nhập chiều dài ") ;
let b= +prompt("nhập chiều rộng ") ;
let s = a*b ;
alert(`Diện tích là : ${s}`) ;
*/

//click vào sẽ ra một nhiều ảnh khác và quay lại từ đầu.
/*let value = 0;
function changeImage() {
    let image = document.getElementById("image");
    value++;
    if (value == 1) {
        image.src = "./image/hinh-anh-da-lat-hoang-hon-1536x981.jpg";
    } else if (value == 2) {
        image.src = "./image/pexels-photo-13705625.webp";
    } else if (value == 3) {
        image.src = "./image/canh-hoang-hon-tren-bien-miami.jpg";
        value = 0;
    }
}
setInterval(changeImage, 300)
*/


// Vòng lặp for, for lồng

/*for(let i=0; i<50 ; i++ ) {

    console.log("i" , i) ;
}
*/


//For lồng
/*for(i=0; i<5; i++) {
    console.log("iiii:", i) ;
    console.log("================") ;
    for(let j = 0; j<5; j++) {
        console.log("j", j) ;
    }
}
*/

/*for(let i = 1; i<=10; i++) {
    let result = 6*i ;
    document.write("6 x" + i + " = " + result + "<br>") ;
}
*/

/*let a= +prompt("nhập 1 số ngẫu nhiên") ;
for(let i=1; i<=10; i++) {
    document.write(`${a} x ${i} = ${a*i}`) ;
} 
*/


//break dùng để thoát khỏi vòng lặp, nếu for lồng sẽ thoát mình vòng lặp chứa nó.

/*for(let i = 0; i<5; i++) {

    // console.log(0);

    for(let j=0; j<5; j++) {
        console.log(j);
        break ;
    }
}
*/


//continue dùng để bỏ qua lần lặp 

/*for (let i = 0; i<5; i++) {
    if(i==3){
        continue;
    }
    console.log("i",i);
*/

// Sinh ra bảng cửu chương 
/*let a = "<div class='aaa'>"
for(j=1; j<=10; j++) {
    a = a + "<div class='bbb'>"
    for(let i=1; i<=10; i++) { 
        a = a + `<div>${j} x ${i} = ${j*i}</div>`
    }
    a = a + "</div>"
}
a = a + "</div>"
document.write(a) 
*/

// while / do while 
/*let i = 1
while(i>0) {
    console.log("hello!");
    i++ ;
}
*/
 /*let a = +prompt("nhập số cần kiểm tra");
let flag =true;
if (a === 1) {
    document.write(`${a} khong phai la so nguyen to`)
} else if (a === 2) {
    document.write('la số nguyên tố')
} else if (a > 2) {
    for (i = 2; i < a; i++) {
        if (a % i===0) {
            document.write(`${a} khong phai la so nguyen to`);
            flag=false;
            break;
        }else{
            flag=true;
        }
    }
    if(flag==true) {
        document.write(`${a} la so nguyen to`)
    }else{
        document.write(`${A} khong la so nguyen to`)
    }
}
*/


//làm lại bài số nguyên tố
/*let a=+prompt("nhap number can test.") ;
if(a===1) {
    document.write(`${a} khong phai la so nguyen to`)
}else if(a===2) {
    document.write('la number nguyên tố')
}else if(a>2) {
    for(i=2; i<a; i++) {
        if (a % i ===0) {
            document.write(`${a} khong phai la number nguyen to `)
            break ;
        }else {
            document.write(`${a} la number nguyen to `)
        }
    }
}
*/

/*let a=+prompt('nhập số kiểm tra') ;
let flat=false;
if(a==1) {
    document.write(`${a} khong phai la so nguyen to`) ;
}else if (a==2) {
    document.write(`${a} là số nguyên tố`) ;
}else if(a>2) {
    for(i=2; a>i; i++) {
        if(a % i == 0) {
            document.write(`${a}khong phai la so nguyen to`) ;
            flat=true;
            break ;
        }else {
            flat=false;
        }
    }if(flat=false) {
        document.write(`${a}khong phai la so nguyen to`) ;
    }else if(flat=true) {
        document.write(`${a} la so nguyen to`) ;
    }
}
*/

/*let number = +prompt("nhập số") ;
for (let j = 2; j < number; j++) {
    let flat = true;
    if (j>=2) {
        for (i=2; i <= Math.sqrt(j); j++) {
            if (j % i===0) {
                flat= false;
                break;
            }else {
                flat=true;
            }
        }
        if (flat==true) {
            document.write(`${j},`)
        }
    }
}
document.write(`là số nguyên tố !`)
*/
