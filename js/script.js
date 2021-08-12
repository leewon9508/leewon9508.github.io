$ = jQuery;
$(function(){
     //글자쓰는 플러그인
     $('.typed-cursor').typed({
        strings:["\"노력은 '설명'하는 것이 아닌 '증명'하는 것입니다.\" \<br\>현실에 안주하지 않고, 증명하기 위해 노력하는 개발자가 되겠습니다."],
        typeSpeed: 70,
        backDelay:200,
        loop:false
    })

    //텍스트효과
    $(".txt_color").html(function (i, html) {
        var chars = $.trim(html).split("");
      
        return "<span>" + chars.join("</span><span>") + "</span>";
      });
      
});



const tabList = document.querySelectorAll('.nav_menu li');

Array.prototype.forEach.call(tabList, function(list) {
    list.children[0].addEventListener('click', function(e) {
        e.preventDefault();
        const tabContent = document.querySelectorAll('#content .content');
        const tabNum = this.getAttribute('data-tabnum');
        
        Array.prototype.forEach.call(tabContent, function(cont, i) {
            cont.style.display = 'none';
            tabList[i].className = 'btn';
        });
        tabContent[tabNum].style.display = 'block';
        
        if(list.className.indexOf('checked') == -1) {
            list.className = 'btn checked';
        }
    });
});

const phoneText = document.querySelector('.contact .container h3');
const phone = phoneText.querySelector('span');

phoneText.addEventListener('mouseover', function(){
    phone.classList.add('up');
});

phoneText.addEventListener('mouseleave', function(){
    phone.classList.remove('up');
});

