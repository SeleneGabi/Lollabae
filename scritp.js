function openPage(){
    window.location.href = ""
}
function openPage2(){
    window.location.href = "https://youtube.com/@lollabae?si=0H8suoH7XyDZ7kAD"
}
function openPage3(){
    window.location.href = "https://www.twitch.tv/lollabae"
}
function openPage4(){
    window.location.href = "https://www.tiktok.com/@lollabaee?_t=ZM-8tBAXupkgp4&_r=1"
}
function switchDark(){
    const div1 = document.getElementById('main-top-frame');
    const div2 = document.getElementById('main-mid-frame');
    const header = document.getElementById('header');
    const button = document.getElementById('darkmode-switch');
    const body = document.getElementById('body');
    const footer = document.getElementById('footer');
    div1.classList.toggle('escuro');
    div2.classList.toggle('escuro');
    header.classList.toggle('header-escuro');
    button.classList.toggle('escuro-button');
    body.classList.toggle('body-color');
    footer.classList.toggle('escuro');
    if (button.classList.contains('escuro-button')){
        
    }
}