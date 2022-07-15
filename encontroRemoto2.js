const rs = require("readline-sync");

let qtdDeAlunos = rs.question("quantos alunos estão presentes? ");


for (aluno = 0; aluno <= qtdDeAlunos; aluno++) {

    if (aluno == 0) {
        console.log("zero " + aluno)
    } else if (aluno % 2 == 0) {
        console.log("par " + aluno)
    } else {
        console.log("impar " + aluno)
    }

}
