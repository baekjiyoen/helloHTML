window.onload = function(){
    next.addEventListener('click', fn_next);
    prev.addEventListener('click', fn_next);
    // 5초에 한번씩 다음이미지로 넘기는 함수를 실행
    setInterval(fn_next, 5000);
}

var current = 0;

/**
 * 현재 이미지의 인덱스 번호를 증가 시키고
 * 이미지를 화면에 보여줌 
 */
function fn_next(){
    // 화면에 출력되는 이미지의 인덱스번호
    // 변수선언및 초기화 -> current값을 계속 유지하기 위해 전역변수로 생성
    // let current =0;

    current++;
    // 이미지리스트의 인덱스 범위를 벗어난 경우
    if(current > 2){
        current = 0;
    }

    // 이미지를 화면에 보여줌
    fn_show_img();
}

function fn_prev(){
    // 이미지의 인덱스 번호를 감소 시켜줌
    current--;
    if(current < 0 ) current = 2;
    
    // 현재인덱스의 이미지를 화면에 보여줌
    fn_show_img();
}

function fn_show_img(){
    console.log("current", current);
    let imgList = document.querySelectorAll('#slide img');
    for(img of imgList){
        // 이미지를 숨기기 위해 클래스 속성 제거
        img.classList.remove('active');
    }
    // 이미지를 보여주기 위해 클래스 속성 추가
    imgList[current].classList.add('active');
}