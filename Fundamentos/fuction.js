function mediaNota(a, b = 0) {
    let media = (a + b) / 2
    media >= 6 ? console.log("Passou") : console.log("Reprovou")
    console.log(media)


}
mediaNota(6, 6)