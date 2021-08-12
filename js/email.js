(function() {
    // https://dashboard.emailjs.com/admin/integration
    emailjs.init('user_sZnNNj7AiiKJ1Vl88oz4r');
})();

window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        // generate a five digit number for the contact_number variable
        this.contact_number.value = Math.random() * 100000 | 0;
        // these IDs from the previous steps
        const user_name = document.querySelector('.input_name').value;
        const user_email = document.querySelector('.input_email').value;
        const message = document.querySelector('.input_message').value;
        const error = document.querySelector('.input_error')
        
        if(user_name && user_email && message){
            error.innerText = '전송 중...';
            error.classList.remove('none');
            error.classList.add('active');
            emailjs.sendForm('service_rd61d5i', 'template_hrtod1e', this)
            .then(function() {
                console.log(user_name);
                console.log(user_email);
                console.log(message);
                error.innerText = '전송 완료!';
                error.classList.remove('none');
                error.classList.add('active');
                console.log('SUCCESS!');
            }, function(error) {
                console.log('FAILED...', error);
            });
        }else{
            error.innerText = '전송 실패! (이름, 이메일, 내용을 전부 기입해주세요.)';
            error.classList.remove('none');
            error.classList.add('active');
        }

    });
}