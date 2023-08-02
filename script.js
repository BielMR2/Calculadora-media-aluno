let studants = [
    {
        name: "Lucas",
        nota1: 8,
        nota2: 2,
    },
    {
        name: "João",
        nota1: 10,
        nota2: 20,
    },
    {
        name: "Leib",
        nota1: 17,
        nota2: 22,
    }
]


function averageStudants() {
    studants.forEach(Element => {
        let average = 0
        let checkAverage = ""

        let name = Element.name

        average = Number((Element.nota1 + Element.nota2) / 2).toFixed(1)

        if(average < 7) {
            checkAverage = `Não foi dessa vez, ${name}! tente novamente!`
        } else {
            checkAverage = `Parabéns, ${name}! Você foi aprovado(a) no concurso!`
        }

        console.log(`A média do(a) aluno(a) ${name} é: ${average}
${checkAverage}`)
    })
}


averageStudants()