window.onload = function(){
    // notice_lb 버튼에 클릭 이벤트 추가 
    notice_lb.onclick = active_notice;
    // gallery_lb 버튼에 클릭 이벤트 추가
    // 함수 이름뒤에 ()를 붙이면 함수를 실행하라는 의미
    // gallery_lb.onclick = alert('event1'); => 바로 실행되어져서 라벨을 클릭해도 메세지창이 뜨지 않음
    gallery_lb.onclick = active_gallery;
}

// 공지사항 활성화
function active_notice(){
    // 공지사항박스 display 속성값을 block 
    notice_box.style.display = 'block';
    notice_lb.style.backgroundColor = '#eee'
    // 갤러리박스 display 속성값을 none
    gallery_box.style.display = 'none'; 
    gallery_lb.style.backgroundColor = '#fff'
}

function active_gallery(){
    notice_box.style.display = 'none';
    gallery_box.style.display = 'block';
    notice_lb.style.backgroundColor = '#fff'
    gallery_lb.style.backgroundColor = '#eee'

 
}
// 자바스크립트를 이용해서 스타일을 지정
// classList : 클래스속성의 값을 추가 하거나 제거 하는것
// background-color -> backgroundColor
// 요소.style.backgroundColor = '';
// 요소.style.display = '';
