// 버튼을 클릭했을때 반가워요~!라는 메세지를 출력 하세요!
// 이벤트이름, 이벤트 발생시 실행할 함수
// 익명의 함수
// window.addEventListener( 'load', function(){});
// 이름있는 함수를 전달 할때는 ()를 붙이면 안된다
// 파라메터가 있는 경우, 익명의 함수를 이용하여 코드를 작성

// 페이지가 모두 로딩된후 실행
// 화면 초기화
window.addEventListener('load',init);

function init(){
    btn1.addEventListener('click', function(){
        id.value == ''
        //id가 입력되지 않은 경우
        if(id.value == ''){
            box1.innerHTML='아이디를 입력해주세요';
        
        }
    });
    
    // 고전 이벤트 모델 - 중복적용이 안됨
    // 이벤트 객체 - 매개변수로 이벤트 객체를 받아 올 수 있다 (event - e)
    // 이벤트 객체 : 이벤트가 발생한 정보를 담고 있는 객체
    btn2.onclick = function(e){
        console.log(e);
        // 어떤 객체가 클릭되었는지 확인
        console.log(e.target);
        // 웹브라우저의 개발자도구의 console창을 확인
        console.log('버튼2가 클릭되었습니다.');

    }

    // 이벤트가 중복된 경우 마지막에 작성된 이벤트만 적용
    // 중복적용이 불가능
    btn2.onclick = function(){
        console.log('버튼2가 클릭됨');
    }
    
    // 이 => 함수 이용했을때 this : window 
    btn2.onclick = (e)=>{
        console.log('버튼2 클릭')
        console.log(e);
        console.log(e.target);
        console.log(this);


    }
    // this - 보통은 window객제 
    //      - 표준이벤트모델의 익명의 함수에서는 이벤트가 발생한 요소
    //      - 화살표함수에서는 window객체
    btn3.addEventListener('click',function(e){
        console.log('표준이벤트모델 실행')
        console.log(e);
        console.log(e.target);
        console.log(this);

    });

    btn3.addEventListener('click',(e)=>{
        console.log('표준이벤트모델 실행 ======== 화살표 함수')
        console.log(e);
        console.log(e.target);
        console.log(this);

    });
   /*  btn2.addEventListener('click', function(){
        alert('버튼2 클릭');
    });*/

    btn4.addEventListener('click',(e)=>{
        // 정규직을 이용한 패턴체크
        // 패턴지정
        let regExp = /^[a-zA-Z0-9]{5,12}$/;

        alert(userId1.value);
        alert(regExp.test(userId1.value));
        // 패턴검사
        if(!regExp.test(userId1.value)){
            alert('아이디는 영어 대소문자와 숫자만 입력 가능합니다.\n길이는 5~12까지 입력 가능합니다')
            e.preventDefault();
        };
        // userId1.value =='' 이값이라면 preventDefault 실행해
        // 기본이벤트를 제거 하는 함수
    })

}

function print(target){
    console.log(target);
    console.log(target.innerText);
    target.style.display='none';
    console.log('print');
}

// 유효검사후 반환값에 따라 폼을 전송할지 말지 결정
// submit이벤트를 실행할지 말지 결정
// 반환값이 false면 이벤트를 실행하지 않음
function fn_check_form(){
    if(userId == ''){
        alert('아이디를 입력해주세요');
        return false;
    }
    return true;
}