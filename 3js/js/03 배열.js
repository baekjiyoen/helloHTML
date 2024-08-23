// alert('테스트');
window.onload = function(){
    // 버튼에 이벤트를 추가 
    // 1. 요소를 선택
    // querySelector :  css 선택자를 이용해서 요소를 선택
    let btn1 = document.querySelector('#btn1');

    // 2. 이벤트를 적용
    // addEventListener : 요소에 이벤트를 추가
    // 요소.addEventListener(이벤트이름, 이벤트가 발생시 실행할 익명의함수(또는 함수명))
    // 요소가 클릭되면 함수를 실행
    btn1.addEventListener('click', function(){
        // 이벤트가 잘 실행되는지 확인
        // alert('btn1 click');
        // 배열 선언
        // new : 객체를 생성 할때 사용되는 키워드

        // 배열 : 여러개의 값을 담을수 있는 자료(데이터)의 구조
        // 배열을 생성시 배열의 길이를 정할수 있다
        let array1 = new Array();   // 길이를 정하지 않은 경우 []
        let array2 = new Array(3);  // 길이를 정한 경우 [empty * 3]
        let array3 = new Array("빨강","파랑","노랑","초록");
        // 0 : 빨강
        // 1 : 파랑
        // 2 : 노랑
        // 3 : 초록
        let array4 = ["java", "oracle", "html", "css", "javascript"];

        console.log(array1);
        console.log(array2);
        console.log(array3);
        console.log(array4);

        console.log("배열의 방에 접근: 배열이름[방번호]", array3[0]);
        console.log("배열의 길이 : 배열이름.length", array3.length);

        array1[0] = '귤';
        array1[1] = '사과';
        array1[2] = '자몽';

        console.log(array1);
        console.log("array1의 길이 : ", array1.length );
        console.log("array1의 첫번째 인덱스의 값 : ", array1[0]);

        // 배열의 값을 반복문을 이용해서 출력 해봅시다
        // 배열의 방번호(인덱스)
        // 0,1,2(length-1)
        //for(초기화; 조건; 증감값){
        // i = index를 의미
        // array1.length = 3
        // i = 0, 1, 2 
        // array1[0]
        // array1[1]
        // array1[2]

        for(let i = 0; i < array1.length; i++){
            console.log("array"+i, array1[i]);
        }

        // 배열의 값을 모두 출력할 경우
        // array1의 요소를 하나씩 꺼내서 element라는 변수에 저장
        for(let e of array1){
            console.log(e);
        }
        
        // box1에 array4의 길이와 데이터를 출력 해봅시다
        // array4의 길이는 5입니다
        // array4의 값 : java, oracle, html5, css3, javascript
        let msg = `array4의 길이는 ${array4.length}입니다`;
        // msg += `array4의 값 : ${array4[0]}, ${array4[1]}, ${array4[2]}, ${array4[3]}, ${array4[4]}`;
        msg += '<br>array4의 값 : ';

        for(let item of array4){
            msg += item + ", ";
        }

        // 마지막 , 를 제거(,와 공백을 제거 하기 위해 -2)
        msg = msg.substring(0, msg.length-2);

        // innerHTML : 시작태그와 끝태그 사이의 값을 변경
        document.querySelector('#box1').innerHTML = msg;
    });

    // 버튼2가 클릭되면 실행할 함수를 추가 합니다
    document.querySelector('#btn2').addEventListener('click', function(){
        let array = ['귤', '복숭아', '사과', '망고', '자몽'];
        let box2 = document.querySelector('#box2');
        box2.innerHTML = array;
        console.log('복숭아' , array.indexOf('복숭아'));
        // 복숭아가 있는 배열의 인덱스 번호 : 
        // 자몽이 있는 배열의 인덱스 번호 : 

    });

    

}