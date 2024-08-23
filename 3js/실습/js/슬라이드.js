// 전역변수 = 함수에서도 접근이 가능한 변수
var current = 0;

window.onload = function(){
    // showSlide(0);
    showSlide(current);

    // 아이디가 next인 요소를 선택
    let next = document.querySelector('#next');
    // click이벤트가 발생 하면 fn_next함수를 호출
    // 주의! 함수를 변수처럼 사용하는경우 함수이름만 넘겨줍니다
    // 괄호를 붙이지 않음!!
    next.addEventListener('click', fn_next);
    // next.onclick = fn_next;

    let prev = document.querySelector('#prev');
    prev.addEventListener('click', fn_prev);

    // 지정된 함수를 일정시간간격으로 반복적으로 실행
    // setInterval(함수, 시간(1/1000초)) 
    setInterval(fn_next, 5000);
}

// current값을 증가 시킨후 showSlide()함수를 호출 
function fn_next(){
    current++;
    if(current > 2) current = 0;

    console.log("current", current);
    showSlide();
}

// current값을 감소 시킨후 showSlide()함수를 호출 
function fn_prev(){
    current--;
    if(current < 0) current = 2;

    console.log("current", current);
    showSlide();
}

function showSlide(){
    // 선택자를 이용해서 이미지 리스트
    // querySelectorAll을 이용하여 모든 요소를 선택
    let imgList = document.querySelectorAll('#slide img');

    // 반복문을 통해 이미지의 active클래스를 제거
    for(let img of imgList){
        // 요소가 가지고 있는 클래스를 제거
        img.classList.remove('active');
    }

    // n번째(사용자가 선택한 요소) 요소에 active 클래스 추가
    imgList[current].classList.add('active');
}