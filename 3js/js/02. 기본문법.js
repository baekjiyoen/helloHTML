// function 함수명(매개변수,.....){}
function testType(){
    var box1 = document.querySelector('.box1')
    
    // 문자열
    let name = '미선';
    // 숫자
    let age = 25;
    let height = 165.6;
    // 논리값
    let check = false;
    // 배열
    let hobbies = ['축구', '농구', '야구'];
    // 객체
    let user = {
        name:'미선',
        age:25,
        height:165.5,
        id:'ismoon',
        hobbies:['피아노','독서']
    }
    // 함수
    // 두개의 수를 입력 받아서 두수의 합을 반환하는 함수
    // 익명함수(이름이 없는 함수)
    let fnTest = function(num1, num2){
        return num1+num2;
    }

    // 박스에 변수의 타입을 출력 해봅시다
    box1.innerHTML = "<h3>타입테스트</h3>";
    // 변수의 값을 출력 하고 싶을때는 변수이름을 사용 합니다.
    // 문자열과 변수를 연결할때에는 + 연산자가 이용 됩니다.
    // box1.innerHTML += "name : " + name + ", type : " + typeof(name);

    // ``(백팃)기호를 이용하여 변수를 출력 하는 방법 ${변수명, 표현식}
    // 템플릿리터럴 : 문자열 내에서 변수나 표현식을 쉽게 삽입 하는 방법
    
    // 자바스크립트는 변수의 리터럴(값 그 자체를 의미)을 확인후 타입이 결정됨
    var text = `name : ${name}, type : ${typeof(name)} <br>`;
    text += `age: ${age}, type : ${typeof(age)} <br>`;
    text += `height: ${height}, type : ${typeof(height)} <br>`;
    text += `check: ${check}, type : ${typeof(check)} <br>`;
    text += `hobbies: ${hobbies}, type : ${typeof(hobbies)} <br>`;
    text += `user: ${user}, type : ${typeof(user)} <br>`;
    text += `fnTest: ${fnTest}, type : ${typeof(fnTest)} <br>`;
    

    box1.innerHTML += text;

}

// 콘솔창에서 함수를 실행 하는 방법
// 함수의 이름을 불러줍니다!! 
// 함수를 실행 하기 위해서는 이름뒤에 ()를 붙여줘야 해요!!
function print(){
    // 변수선언및 초기화
    // 왼쪽의 값을 오른쪽 변수에 저장(대입)
    var a = '안녕';
    
    // 왼쪽의 값을 오른쪽 변수의 값에 연결해서 저장
    a += '하세요'

    // 변수에 값을 출력하는 방법
    //  alert(a) // 메세지창 출력
    //  console.log(a) // 콘솔창 출력

    var id = 'momo';
    
    // 콘솔창에 당신의 id는 (변수id의 값) 입니다
    // 문자열과 변수를 함께 출력 하는 방법
    var msg = '콘솔창에 당신의 id는 ' + id + ' 입니다';

    console.log(msg);
    // 더하기 연산자를 이용해서 출력하는 방법
    console.log('콘솔창에 당신의 id는 ' + id + ' 입니다');
    // 백팃기호와 ${}를 이용해서 출력하는 방법
    console.log(`콘솔창에 당신의 id는 ${id} 입니다`);

    // 클래스값이 box1인 요소를 선택해서 값을 입력 해봅시다
    // (id)님 환영 합니다.
    var box1 = document.querySelector('.box1');
    box1.innerHTML = `${id}님 환영합니다.`;

}

function print1(){
    var name = '미선';
    // id가 box2인 요소에  
    // (name)님 환영합니다. 
    // 라고 출력 하세요
    var box2 = document.querySelector('#box2');

    box2.innerHTML = name + '님 환영합니다.';
}

// 연산자
function plusTest(){
    // 연산자
    // 사칙연산 : +, -, *, /
    // 나머지연산자 : %
    console.log('10+2', 10+2);// 더하기
    console.log('10-2', 10-2);// 빼기
    console.log('10*2', 10*2);// 곱하기 *
    console.log('10/2', 10/2);// 나누기 /
    console.log('10%2', 10%2);// 10을 2로 나눈 나머지값
    if( 10%2 == 0 ){
        console.log('짝수!');
    } else {
        console.log('홀수!');
    }

    // 증감연산자 : ++, --
    // 값을 1씩 증가시켜주거나 감소 시켜 줍니다.
    // 변수의 앞에 위치하는지 뒤에 위치하는지에 따라 조금 달라요!!
    var age = 20;
    // 'age++' : 문자열 출력
    // age++ : 변수의 연산결과
    console.log('age++',age++); // 값이 출력되고 1증가됨 = 문장이 실행되고 값이 증가
    console.log('age', age);
    console.log('++age',++age); // 1증가되고 값이 출력됨 = 값이 증가되고 문장이 실행
    console.log('age',age);

    // ★ 문자열과 숫자의 연산
    // 더하기 연산자는 연산의 기능과 더불어 문자열을 연결해주는 기능
    
    // 문자와 숫자의 더하기 연산의 결과 문자열의 연결이 이뤄진다
    // ''로 감싸면 안에 숫자가 들어 있어도 문자!!
    let test1 = 7 + 7; // 14
    let test2 = '7' + 7; // '77' = 문자와 숫자의 더하기 연산으로 두 값이 연결되어 출력
    let test3 = 7 + '7'; // '77'
    let test4 = 7 + 7 + '7'; // '147'
    let test5 = 7 + '7' + 7; // '777'
    let test6 = '7' + (7 + 7); // '714'

    // 문자와 그외 연산자
    // 숫자로 형변환후 연산됨
    // 형변환 : 다른타입으로 변환 해주는 것
    //          문자를 숫자로 변환
    //          숫자를 문자로 변환
    // 연산전에 문자를 숫자로 형변환 후 연산을 실행
    let test7 = 7 * '7'; // 49
    let test8 = '7' - 3; // 4
    let test9 = '4' / 2; // 2
    let test10 = 4 % '2'; // 0
    let test11 = '3' * '7'; // 21
    // 연산을 하기 위해 숫자로 형변환 하려고 하는데 
    // 문자값이 들어 있는경우 NaN
    let test12 = '3' * 'a'; // NaN : Not a Number"의 약자 - 문자를 숫자로 형변환 하려고 할때 발행하는 오류

    let area = document.getElementById('box3');

    area.innerHTML = `test1 : ${test1} <br>`;
    area.innerHTML += `test2 : ${test2} <br>`;
    area.innerHTML += `test3 : ${test3} <br>`;
    area.innerHTML += `test4 : ${test4} <br>`;
    area.innerHTML += `test5 : ${test5} <br>`;
    area.innerHTML += `test6 : ${test6} <br>`;
    area.innerHTML += `test7 : ${test7} <br>`;
    area.innerHTML += `test8 : ${test8} <br>`;
    area.innerHTML += `test9 : ${test9} <br>`;
    area.innerHTML += `test10 : ${test10} <br>`;
    area.innerHTML += `test11 : ${test11} <br>`;
    area.innerHTML += `test12 : ${test12} <br>`;

}

function opTest(){
    var box4 = document.querySelector('#box4');
    
    box4.innerHTML = '"==" 연산자 테스트<br><br>';
    box4.innerHTML += `7 == 7 : ${7 == 7} <br>`;
    box4.innerHTML += `'7' == 7 : ${'7' == 7} <br>`;
    box4.innerHTML += `'7' == '7' : ${'7' == '7'} <br>`;
    // ! 부정 연산자
    // == 같은지 확인(같으면 true)
    // !== 다른지 확인(다르면 true)
    box4.innerHTML += `'7' != '7' : ${'7' != 7} <br>`;
    box4.innerHTML += `'7' != '7' : ${7 != '7'} <br><br>`;
    
    box4.innerHTML += '"===" 연산자 테스트<br><br>';
    box4.innerHTML += `7 === 7 : ${7 === 7} <br>`;
    box4.innerHTML += `'7' === 7 : ${'7' === 7} <br>`;
    box4.innerHTML += `'7' !== '7' : ${'7' !== 7} <br>`;
    box4.innerHTML += `'7' !== '7' : ${'7' !== '7'} <br>`;


    box4.innerHTML += '연산자 테스트';
}


function ifTest(){
    var text = document.querySelector('#box5').innerHTML;

    if(text == '조건문'){
        document.querySelector('#box5').innerHTML = '';
    }else{
        document.querySelector('#box5').innerHTML = '조건문 테스트';
    }

}


function forTest(){
    // 반복문 1~10
    // for(초기값;조건문;증감값){} 
    //      : 특정 조건이 충족될때까지 코드블록을 반복해서 실행
    // 초기값 : i는 0으로 초기화
    // 조건문 : i는 10보다 작을때까지
    //          조건을 만족할때 코드블럭을 실행
    //          조건을 만족하지 않는경우 코드블럭은 종료된
    // 증감값 : 변수값을 증가, 감소 시켜줍니다
    // 초기값 -> 조건문 -> 코드블럭실행 -> 증감값
    for(var i = 0; i < 10; i++){
    // for(var i = 0; i < 10; i=i+2){
    // 1~10까지 출력 되도록
    // i++, i-- : i값이 변경됨
        console.log("i : ", i+1);
    }    

    for(var i=1;i<=10;i++){
        console.log('i=', i);
    }


    // 지정된 조건식이 참일때까지 코드블럭을 반복 실행
    // while(조건식){}
    var j=0;
    while(j<5){
        console.log('j=', j);
        // j값이 변경되지 않으면 반복문을 탈출 할수가 없어서 
        // 무한반복에 빠지게 됩니다.
        // 문장 내부에 증감식을 갖는 경우가 많다
        j++;
    }

}


var str = '전역변수 str';

// window.onload = 이벤트 
// 페이지가 모두 로드 되면 실행
// 익명의함수 내부에서 var키워드를 이용해서 선언하면 = 지역변수
window.onload = function(){
    // 변수 선언및 초기화
    var str1 = '지역변수';
    var str2 = '지역변수2';

    // 변수 선언
    var str3;

    // 전역변수 
    //  - 키워드 붙이지 않고 값을 대입
    str4 = "전역변수";

    console.log(str1);
    console.log(str2); 
    console.log(str3); // undefined : 변수선언만 했을경우의 값
    console.log(str4);

    // =============================================

    // var, let(중복선언 불가능), const(상수 - 변하지 않는 값)
    
    // var를 이용할 경우 중복 선언이 가능하다
    var num = 10;
    console.log("num", num); // 10
    var num = 20;
    console.log("num", num); // 20
    let num1 = 10;
    num1=20;    // 변수 : 값의 변경이 가능하다
    //let num1; // 중복선언시 오류가 발생한다
    const num2 = 10;
    // num2 = 20; // 값의 재할당 불가능. 상수는 값을 변경 할 수 없다!!!
    console.log(num2);

    // 2) 변수의 유효 범위(스코프)
    num3=10;
    // - var 키워드는 함수 유효 범위를 갖습니다.
    // 함수 내부에서 선언하게 되면 함수 어디서든지 사용 할수 있다
    if(true){
        // var 키워드는 코드블럭 내부에서 선언되었더라도 코드블럭 외부에서 사용 할 수 있다
        // 함수 유효 범위를 갖고 있으므로 함수 내부에서 사용 할수 있다!!
        var num3 = 10;

        console.log("num3", num3);
    }
    console.log("num3-if문 외부에서 출력", num3);

    
    // - let, const 키워드는 블럭 유효 범위를 갖는다.
    // 어디서 선언됬는지에 따라서 유효 범위가 달라진다
    // = 선언된 위치의 코드블럭에서 사용이 가능
    if(true){
        let num4 = 10;
        const num5 = 10;
        console.log('num4', num4);
        console.log('num5', num5);
        // 함수코드블럭에 선언된 let 변수
        // 함수 내부에서 사용 가능
        console.log('num1', num1);
    }
    // 코드블럭 내부에서 선언된 변수는 코드블럭 외부에서 사용할 수 없다
    // console.log('num4-if문 외부', num4);
    // console.log('num5-if문 외부', num5);
}