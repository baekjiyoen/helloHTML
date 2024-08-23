/*// 화면이 로드된 이후 함수를 실행
window.onload = function () {

    // alert('잘 연결되었')
    let b = document.querySelector("#btn");
    alert(b);
    // 선언적 함수 - 함수의 이름을 불러서 호출
    // 함수 이름 뒤에 ()를 붙이면 바로 실행되어지고 끝나버림
    btn.addEventListener('click',fn_btn1_click);
    // 익명의 함수 = 이름이 없는 함수
    // 재사용 불가능
    btn1.addEventListener('click', function(){
        console.log('버튼1이 클릭 되었습니다.');

    });

}
*/

window.addEventListener('load', function(){
    this.alert('화면 로딩 완료');
    // 화살표함수
    // function을 지우고 =>을 사용
    // ES6에 도입된 문법
    btn2.addEventListener('click',()=>{
        this.alert('익명의 화살표 함수를 실행');
        // 매개변수와 갯수가 달라도 오류가 발생하지 않는다
        fn_btn1_click('a','b');
        let res = sum(10,100);
        console.log(`두 값의 합은 ${res} 입니다.`)

    });
});
// 선언적 함수 = 이름이 있는 함수
// onload 이벤트 밖에다 작성
function fn_btn1_click() {
    console.log('버튼이 클릭 되었습니다.');
}
// 반환값이 있는 함수
function sum(num1,num2){
    return num1 + num2;
}
// ES6도입
// 매개변수에 기본값을 정해 줄수 있다
function sum1(num1=0,num2=0){
    return num1 + num2;
}

(function(a,b){
    console.log("바로실행함수 : a+b : " + a+b);
}(10,20)
)