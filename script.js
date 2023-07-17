// Global variable by grab 
let invalidText = document.querySelector('.invalid-text')
let invalidBox = document.querySelector('.invalid-box')
let inputMail = document.querySelector('input')
let btnSubmit = document.querySelector('.btnSub')




let validCk = inputMail.addEventListener('keyup', () => {
    if(inputMail.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
        let mail = inputMail.value
        invalidText.classList.remove('active')
        inputMail.classList.remove('invalid-box')
        thankyouScreen(mail)
    } else if(inputMail.value == "") {
        invalidText.classList.remove('active')
        inputMail.classList.remove('invalid-box')
    } else {
        invalidText.classList.add('active')
        inputMail.classList.add('invalid-box')
    }
})


function thankyouScreen(mailValue) {
    // Screen
    let formScreen = document.querySelector('.container')
    let thankyouScreen = document.querySelector('.thankyou-container')

    btnSubmit.addEventListener('click',() => {
        formScreen.classList.add('hide')

        // Insert Email value
        document.getElementsByClassName('ty-email')[0].innerHTML = mailValue
        thankyouScreen.classList.remove('hide')

        // Dismiss Button
        dismiss(formScreen, thankyouScreen)
    })
}

function dismiss(scr1, scr2) {
    let btnDismiss = document.querySelector('.ty-btn')
    btnDismiss.addEventListener('click', () => {
        // scr2.classList.add('hide')
        // scr1.classList.remove('hide')
        // inputMail.value = ""
        location.reload()
    })
}