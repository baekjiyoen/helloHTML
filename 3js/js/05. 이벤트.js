window.onload = function(){
    // 고전 이벤트 모델 - 중복적용이 안됨
    // 이벤트객체 - 고전이벤트모델과 표준이벤트모델을 이용할 경우
    //              매개변수에 이벤트객체를 받아올수 있다
    // this - 보통은 window객체
    //          표준모델이벤트의 익명의 함수에서는 이벤트가 발생할 요소
    //          화살표함수에서는 window객체
    btn1.onclick = function(){
        alert('btn1이 클릭 되었어요.==1');
    }
    // 이벤트가 중복된 경우 마지막에 작성된 이벤트만 적용
    // 중복적용이 불가능함!
    btn1.onclick = function(){
        alert('btn1이 클릭 되었어요.==2');
    }
    // event객체를 매개변수로 받을수 있다
    // event객체 : 이벤트에 정보를 담고 있는 객체
    btn2.onclick = (event)=>{
        alert('btn2가 클릭 되었어요');
        console.log("this", this)
        console.log("event", event);
        console.log("event.target", event.target);
    }
    
    let btn3 = document.querySelector('#btn3');
    
    // 화살표함수
    btn3.addEventListener('click', (e)=>{
        console.log('표준이벤트 모델 실행====1');
        console.log(e.target);
        console.log(this);
    });

    // 표준모델의 경우 이벤트의 중복 적용이 가능하다
    // 익명의함수
    // btn3.addEventListener('이벤트이름', 실행할함수);
    btn3.addEventListener('click', function(e){
        console.log('표준이벤트 모델 실행====2');
        console.log(e.target);
        console.log('표준이벤트의 익명의함수에서 this값', this);
    });

    btn3.addEventListener('mouseenter', function(){
        // 이벤트가 발생한 요소의 배경색상을 빨강으로 변경
        this.style.backgroundColor = 'red';
    });

    btn3.addEventListener('mouseleave', function(){
        // 이벤트가 발생한 요소의 배경색상을 빨강으로 변경
        this.style.backgroundColor = 'green';
    });

    btn4.onclick = (e) => {
        console.log(e.target);
        console.log(window.event.target);
        console.log(this); // window 객체
    }

    let btnSubmit = document.querySelector('#btnSubmit');
    btnSubmit.addEventListener('click', function(e){
        let userId = document.querySelector('#userId').value;

        // 정규식을 이용해서 패턴이 일치 하는지 확인
        // 정규표현식 : 특정 규칙(패턴)을 가진 문자열을 
        // 검색하거나 치환 확인할때 사용
        // 이메일, 아이디, 비밀번호 입력시 정규식이 사용됩니다.
        let regExp = /^[a-zA-Z0-9]{5,12}$/;
        if(!regExp.test(userId)){
            alert('아이디형식에 맞지 않습니다.');

            // event객체를 이용한 기본 이벤트 초기화
            e.preventDefault();
        }
    });
}

function test(btn){
    alert(btn);
    alert(btn.innerHTML);
    // 인라인 이벤트의 경우, 이벤트 객체를 받아 올 수가 없다
    // 대신, 함수를 호출시 this키워드를 이용하면 이벤트가 발생한 요소를 
    // 매개변수로 받아올수 있다
    // console.log(e); 
    console.log(window.event.target); // 이벤트가 발생한 요소
    console.log(this); // window 객체
}

function passwordCheck(){
    let pass1 = document.querySelector('#pass1').value;
    let pass2 = document.querySelector('#pass2').value;
    // 빈문자열인경우, '비밀번호를 입력해주세요'
    if(pass1 == '' || pass2 == ''
        || pass1 != pass2){
        alert('비밀번호가 일치하지 않습니다.');
        return false;
    }
}