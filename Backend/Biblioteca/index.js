import fs from 'fs';

async function lerMultiplosArquivos(arrayDeCaminhos) {
  try{
    const arrayDePromesssas = arrayDeCaminhos
     .map((caminho) => fs.promises.readFile(caminho, 'utf8')
    );

    console.log(arrayDePromesssas);
    const listaDeDados = await Promise.all(arrayDePromesssas);
    return listaDeDados;
  } catch (erro) {
    throw erro
  }
}

const caminhos = [
    "./arquivos/texto-ka.txt",
    "./arquivos/texto-web.txt",
    "./arquivos/texto-aprendizado.txt",
]

lerMultiplosArquivos(caminhos)
  .then((conteudoDosArquivos) => {
    console.log(conteudoDosArquivos);
})
  .catch((erro) => {
    console.error('Erro ao ler arquivos', erro.message)
})
