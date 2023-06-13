let modeIcon = document.querySelector("#mode-icon")

modeIcon.addEventListener("click", () => {
    let contentBackground = document.querySelector(".content-background")
    let contentForm = document.querySelector(".content-form")
    let formDiv = document.querySelector(".form-div")
    let trocaImagem = document.querySelector("#imagem-src")

    if (modeIcon.classList.contains("fa-fire-flame-simple")){
        modeIcon.classList.remove("fa-fire-flame-simple")
        modeIcon.classList.add("fa-fire-flame-curved")


        // adiciona novas classes

        contentBackground.classList.add('dark-background')
        contentForm.classList.add('dark-form')
        formDiv.classList.add("dark-div")

        // muda imagem

        trocaImagem.src = 'assets/img/boysubbg.jpg'

        
    }else{
        modeIcon.classList.remove("fa-fire-flame-curved")
        modeIcon.classList.add("fa-fire-flame-simple")

        // remove a classe

        contentBackground.classList.remove('dark-background')
        contentForm.classList.remove('dark-form')
        formDiv.classList.remove("dark-div")

        // volta para imagem inicial
        
        trocaImagem.src = "assets/img/background.jpg"
        
    }
})