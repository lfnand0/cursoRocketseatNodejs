// process.stdout.write("Alguma coisa \n") // vai escrever algo de saída, parecido ao console.log()

const questions = [
  "O que aprendi hoje?",
  "O que me deixou aborrecido? E o que eu poderia fazer para melhorar",
  "O que me deixou feliz hoje?",
  "Quantas pessoas ajudei hoje?",
]

const ask = (index = 0) => {
  return process.stdout.write(questions[index] + "\n\n\n") // printa apenas a frase na posicao [0]
}

ask()

process.stdin.on("data", data => {
  process.stdout.write(data.toString().trim() + '\n') //pega o input do usuário e printa
  process.exit()
})