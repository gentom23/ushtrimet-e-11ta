

let page = {
    permbajtjaETitullit: "genti",
    permbajtjaEFaqes: "blablabla"
}







function vendosTitullin() {
    var Titulli = document.getElementById("Titulli")
    Titulli.innerHTML = page.permbajtjaETitullit
}

function vendosFaqen() {
    let faqja = document.getElementById("faqja")
    faqja.innerHTML = page.permbajtjaEFaqes
}

vendosTitullin ()

vendosFaqen ()


