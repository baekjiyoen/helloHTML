
// 페이지가 로딩된 후 실행
// 요소가 화면에 올라와야지 요소를 선택할 수 있으므로
// 페이지를 초기화 하는 코드는 이벤트 발생 후 실행 할 수 있도록 처리
window.addEventListener('load', function () {
    console.log(this);
    let btn1 = this.document.querySelector('#btn1');
    btn1.addEventListener('click', function () {

        let box1 = document.querySelector('#box1');
        box1.innerHTML = '배열생성<br>';
        // 배열 : 여러개의 값을 담을 수 있는 자료의 구조
        // new : 객체를 생성할대 사용되는 키워드
        let array1 = new Array();  // 길이를 정하지 않은 경우 []
        let array2 = new Array(3);  // 길이를 정한경우 비어있는 범위 3개 챙김
        // 값을 초기화하는 방법 
        let array3 = new Array("빨","주","노","초","파","남","보");  // 값을 대입
        let array4 = ["java","oracle",'html'];

        console.log(array1);
        console.log(array2);
        console.log(array3);
        console.log(array4);

        box1.innerHTML+=array1 + '<br>';
        box1.innerHTML+=array2 + '<br>';
        box1.innerHTML+=array3 + '<br>';
        box1.innerHTML+=`array4 : ${array4} <br>`;
        
        box1.innerHTML += `<br>배열의 길이를 확인하는 방법 :  배열이름.length ${array4.lenght}`;
        box1.innerHTML += `<br>배열의 방에 접근하는 방법 :  배열이름[인덱스] ${array4[0]}`;


        box1.innerHTML += `<br><br> 배열값 출력하기`;
        for(let i=0; i<array4.length;i++){
            console.log('array4['+i+']' + array4[i]);
            console.log(`array4[${i}] ${array4[i]}`);

        }
        // 배열의 방에 값을 대입
        array4[0] = 'javascript';


        // java 문법에서는 : , javascript 문법에서는 of
        let array4_str = '';
        for(let str of array4){
            array4_str = str + ",";
        }
        console.log(array4_str);
        array4_str = array4_str.substring(0,array4_str.length-1);
        console.log(array4_str)  ;     

    });

    btn2.addEventListener('click', function(){
        box2.innerHTML = '배열의 함수<br>';
        let array = ['귤','복숭아','사과','망고'];
        // 배열의 인덱스 번호를 반환하는 함수
        console.log('사과의 인덱스 번호 : ',array.indexOf('사과'));
        

    })

});