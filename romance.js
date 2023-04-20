let text = "My head's a mess, when you're in it Is this fair? I feel that we're close to the end With one foot hanging from the edge We roll over and play pretend Cause roses don't know when they're dead"

function wordCorpus(text) {
    let chain = text.toLowerCase().replace(/[^a-z\s]/ig, "").split(' ')

    console.log(chain)
    return chain
}

// wordCorpus(text);

function generateWordPairs(text) {
    let wordPairs = {};
    let words = wordCorpus(text)

    for(let i = 0; i < words.length - 1; i++) {
        let wordOne = words[i]
        let wordTwo = words[i + 1]

        if(wordPairs[wordOne]) {
            wordPairs[wordOne].push(wordTwo)
        } else {
            wordPairs[wordOne] = [wordTwo]
        }
    }
    console.log(wordPairs)
    return wordPairs
}

generateWordPairs(text);


// at an absolute loss with the function writeLine
function writeLine(object, num) {
    let emptyString = " "
    let mChain = generateWordPairs(object)
    let randomString = Math.floor(generateWordPairs.length * Math.random(num))

    for(let i = 0; i < mChain.length; i++) {
        let line = mChain[i]

        if(emptyString[line]) {
            emptyString[line].push(randomString) 
        } else {
            emptyString[line] === emptyString
        }
    }
    console.log(emptyString)
    return emptyString
}

writeLine(object, num);