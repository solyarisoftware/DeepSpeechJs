/**
 * https://deepspeech.readthedocs.io/en/v0.9.3/NodeJS-API.html
 * https://github.com/mozilla/DeepSpeech-examples#javascript
 * https://github.com/mozilla/DeepSpeech-examples/blob/r0.9/nodejs_wav/index.js
 */ 

const fs = require('fs').promises
const path = require('path')
const DeepSpeech = require('deepspeech')

/**
 * deepSpeechInitialize
 *
 * Initialize the model 
 * with specified pbmm and scorer files
 */
function deepSpeechInitialize(modelPath, scorerPath) {

  const model = new DeepSpeech.Model(modelPath)
  
  model.enableExternalScorer(scorerPath)
  
  return model
}  


/**
 * deepSpeechTranscript
 *
 * return the speech to text (transcript) 
 * of the audio contained in the specified filename 
 *
 * @param {String} audioFile
 * @return {String} transcript 
 */ 
async function deepSpeechTranscript(audioFile, model) {
  
  let audioBuffer

  // read the Wav file in memory
  //const audioBuffer = fs.readFileSync(audioFile)
  try { 
    audioBuffer = await fs.readFile(audioFile) 
  }  
  catch (error) { throw error } 

	
  return new Promise( (resolve, reject) => {

    try { 
      const transcript = model.stt(audioBuffer)
      resolve( transcript )
    }
    catch (error) { reject(error) } 
    
  })

}


async function main() {

  const modelPath = process.argv[2] || './models/deepspeech-0.9.3-models.pbmm'
  const scorerPath = process.argv[3] || './models/deepspeech-0.9.3-models.scorer'
  const audioFile = process.argv[4] || './audio/4507-16021-0012.wav'

  const scriptName = path.basename(__filename, '.js')

  console.log(`\nusage: node ${scriptName} [<model pbmm file>] [<model scorer file>] [<audio file>]`)
  console.log(`using: node ${scriptName} ${modelPath} ${scorerPath} ${audioFile}\n`)


  let start, end
 
  start = new Date()

  //
  // Initialize DeepSpeech model
  //
  const model = deepSpeechInitialize(modelPath, scorerPath)

  end = new Date() - start

  console.log(`\npbmm      : ${modelPath}`)
  console.log(`scorer    : ${scorerPath}`)
  console.log(`elapsed   : ${end}ms\n`)
 
  start = new Date()

  //
  // transcript an audio file
  //
  const result = await deepSpeechTranscript(audioFile, model)

  end = new Date() - start

  console.log(`audio file: ${audioFile}`)
  console.log(`transcript: ${result}`)
  console.log(`elapsed   : ${end}ms\n`)

}


if (require.main === module) 
  main()

// exports public function 
module.exports = { 
  deepSpeechInitialize,
  deepSpeechTranscript
}

