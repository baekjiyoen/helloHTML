// 3) 스스로실행(바로실행) 함수
// 상단에 작성
(
    function(a,b){
        console.log(`자동실행 함수 a:${a} , b:${b}`);
    }(10, 20)
);


// 1) 선언적 함수
function btn1_click(){
    alert('버튼이 클릭 되었어요!');
}

// 자바스크립트 소스를 화면에서 분리
// 문서가 모두 로딩된 이후 메세지를 출력해봅시다
// 2) 익명의 함수
window.onload = function(){
    let btn2 = document.querySelector('#btn2');
    // 화살표함수(es6에 도입된 문법)
    btn2.addEventListener('click', ()=>{
        alert('익명의 함수 실행(이벤트 핸들러를 통해 실행)');
    });

    let btn3 = document.querySelector('#btn3');
    btn3.addEventListener('click', ()=>{
        argTest('첫번째 매개변수');
        // 매개변수의 갯수가 일치 하지 않아도 오류는 발생 하지 않는다
        argTest();
    });

    let btn4 = document.querySelector('#btn4');
    btn4.addEventListener('click', ()=>{
        // 함수의 실행결과 반환값을 변수에 담아 줍니다.
        let res = ran();
        alert(res);
    })

}

// 무작위숫자를 추출하여 반환
function ran(){
    // 0 < Math.random() < 1
    // 0.000000001 ~ 0.999999999
    // * 10을 했을경우 0 ~ 9
    // * 100을 했을경우 00 ~ 99

    // 로또 1 ~ 47
    // Math.random() * 47 + 1
    // 1부터 10까지 수중에서 무작위수를 추출
    // Math.random() * 10 + 1
    // parseInt : 정수형으로 반환
    let random = parseInt(Math.random()*100 + 1);

    // 함수의 실행 결과를 반환
    return random;
}

// 매개변수에 기본값을 지정하면 전달되는 매개값이 없을 경우 기본 값으로 사용한다. 
// (ES6 부터 도입)
function argTest(str1='기본값을 정해줄수 있다'){
    alert(str1);
}
