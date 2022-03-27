let allFaqs = document.querySelectorAll('#faq ul li button')

allFaqs.forEach((faq, index) => {
    faq.addEventListener('click', () => {
        allFaqs.forEach((f, i) => {
            if (index !== i) {
                f.nextElementSibling.classList.add('closed')
            }
        })
        if (index === Array.from(allFaqs).indexOf(faq)) {
            let answer = faq.nextElementSibling
            faq.classList.toggle('open')
            answer.classList.toggle('closed')
        } 
    })
})