/* 구현해야 할 기능 */
// 1. 시작 버튼 누르면 game.html 페이지로 이동
// 2. 도착 버튼 누르면 '성공' 알림 띄우고 index.html 페이지로 이동
// 3. 게임오버 조건
// (1) 정해진 플레이 영역 벗어난 경우 (2) 장애물에 부딪힌 경우
// => '게임오버' 알림 띄우고, index.html 페이지로 이동

// 요소들을 적절하게 변수에 담기
// hint) forEach()구문 사용

const startbtn = document.querySelector('#start');
const finishbtn = document.querySelector('#finish');
const content = document.querySelector('#content');
const blocks = document.querySelectorAll('.block');

startbtn.addEventListener('click',function(){
    location.href = 'game.html';
})

finishbtn.addEventListener('click',function(){
    location.href = 'index.html';
    alert('성공!');
})

// content.addEventListener('mouseleave',function(){
//     location.href = 'index.html';
//     alert('정해진 영역에서 수행해주세요!');
// })

blocks.forEach(function(t){
    t.onmouseover = function(){
        location.href = 'index.html';
        alert('실패!');
    }
})