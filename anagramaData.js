function main (){
  let words = ['alergia', 'regalia', 'galeria', 'catinga', 'corar','rumo', 'ovo', 'poder', 'roma', 'ignorante']
  //let findWord = [prompt('Digite uma palavra para busca: ')]
  const findWord = [document.getElementById('palavra').value]
 
  //let findWord = ['carro']
  let search = []

  for (let j of words) {
    if (findWord[0] !== j && j.length === findWord[0].length) {
      search.push(j)
    }
  }

  //[ 'regalia', 'alegria' ]
  function spliteSearch(outputParameter) {
    const findWordSplit = []
    for (let i = 0; i < outputParameter.length; i++) {
      findWordSplit.push([])
      for (let j = 0; j < outputParameter[i].length; j++) {
        findWordSplit[i].push(outputParameter[i][j])
      }
    }
    return findWordSplit
  }

  let splited = spliteSearch(search)

  //[['r', 'e', 'g','a', 'l', 'i','a'],['a', 'l', 'e', 'r', 'g', 'i','a']]
  function spliterFindWord(inputParameter) {
    const searchSplit = []
    for (let i = 0; i < inputParameter[0].length; i++) {
      searchSplit.push(inputParameter[0][i])
    }
    return searchSplit
  }
  const findwordSplited = spliterFindWord(findWord);
  //['a', 'l', 'e','g', 'r', 'i','a']
  function countSearch(countParameter) {
    let countRepeat = []
    for (let i = 0; i < countParameter.length; i++) {
      countRepeat.push({})
      for (let x = 0; x < countParameter[i].length; x++) {
        let character = countParameter[i][x]
        if (countRepeat[i][character]) {
          countRepeat[i][character]++
        } else {
          countRepeat[i][character] = 1
        }
      }
    }
    return countRepeat
  }

  function countFindWord(countParameter) {
    let countRepeat = {}
    for (let x = 0; x < countParameter.length; x++) {
      let character = countParameter[x]
      if (countRepeat[character]) {
        countRepeat[character]++
      } else {
        countRepeat[character] = 1
      }
    }
    return countRepeat
  }

  let resultInput = countSearch(splited)
  let resultOutput = countFindWord(findwordSplited)

  function compareObjects(input, output) {
    const obj1Keys = Object.keys(output)
    const obj1Values = Object.values(output)
    let countTrue = 0
    for (let a = 0; a < obj1Keys.length; a++) {
      if (input[obj1Keys[a]] === obj1Values[a]) {
        countTrue++
      }
    }

    if (countTrue === obj1Keys.length) {
      return Object.keys(input)
    }
  }

  for (let i = 0; i < resultInput.length; i++) {
    const compare = compareObjects(resultInput[i], resultOutput)
    if (compare) {
      const resposta = document.getElementById('resposta')
      resposta.innerHTML += search[i] += "<br>"
    }
  }
}

const button = document.getElementById('enviar')
button.addEventListener('click', function (e) {
  e.preventDefault()
  //preventDefault tira o submit do botão
  main()
})