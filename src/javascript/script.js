$(document).ready(function() {
    $('#mobile_btn').on('click', function() {
        $('#mobile_menu').toggleClass('active')
        $('#mobile_btn').find('i').toggleClass('fa-x')
    });
});

const btn_insta = document.querySelector('#insta') 
btn_insta.addEventListener('click', () => {
    window.open('https://www.instagram.com/pibtibirill/','_blank')
})

const btn_youtube = document.querySelector('#youtube') 
btn_youtube.addEventListener('click', () => {
    window.open('https://www.youtube.com/c/pibtibirill','_blank')
})

const btn_facebook = document.querySelector('#facebook') 
btn_facebook.addEventListener('click', () => {
    window.open('https://www.facebook.com/pibtibirill','_blank')
})

const btn_wpp = document.querySelector('#whatsapp')
btn_wpp.addEventListener('click', () => {
    window.open('https://api.whatsapp.com/send?phone=5583987289110&text=Gra%C3%A7a%20e%20Paz!')
})

const btn_contato = document.querySelector('#contato')
btn_wpp.addEventListener('click', () => {
    window.open('https://api.whatsapp.com/send?phone=5583987289110&text=Gra%C3%A7a%20e%20Paz!')
})

const btn_contatenos = document.querySelector('#contatenos')
btn_wpp.addEventListener('click', () => {
    window.open('https://api.whatsapp.com/send?phone=5583987289110&text=Gra%C3%A7a%20e%20Paz!')
})

const copia_pix = document.querySelector('#btn_pix')
copia_pix.addEventListener('click', () => {
    navigator.clipboard.writeText('05786139000126').then(() => {
        alert('Pix copiado para a área de transferência!')
    }).catch((err) => {
        console.log('Erro ao copiar.', err)
    })

})

const jd_carolina = document.querySelector('#jd_carolina')
jd_carolina.addEventListener('click', () => {
    window.open('https://www.instagram.com/congregacaojardimcarolina/')
})

const pacatuba = document.querySelector('#pacatuba')
pacatuba.addEventListener('click', () => {
    window.open('https://www.instagram.com/pib.pacatuba22/')
})