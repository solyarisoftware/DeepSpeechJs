/*
 deepspeech --model deepspeech-0.9.3-models.pbmm --scorer deepspeech-0.9.3-models.scorer --audio audio/2830-3980-0043.wav > 2830-3980-0043.out
 */
const spawn = require('child_process').spawn

/*
-rw-r--r-- 1 giorgio 62K nov 18  2017 2830-3980-0043.wav
-rw-r--r-- 1 giorgio 86K nov 18  2017 4507-16021-0012.wav
-rw-r--r-- 1 giorgio 81K nov 18  2017 8455-210777-0068.wav
*/

//const AUDIO = 'audio/2830-3980-0043.wav'
//const AUDIO = 'audio/8455-210777-0068.wav'
const AUDIO = 'audio/4507-16021-0012.wav'
const MODEL = 'models/deepspeech-0.9.3-models.pbmm'
const SCORER = 'models/deepspeech-0.9.3-models.scorer'


function deepSpeechTranscript(audiofile) {
  return new Promise( (resolve /*, reject*/) => {

    const deepSpeechCLI = spawn('deepspeech', [
      '--model', MODEL,
      '--scorer', SCORER,
      '--audio', audiofile
    ])

    deepSpeechCLI.stdout.on('data', data => {

      // convert Buffer to String and remove last newline
      const transcript = data.toString().slice(0, -1)  

      resolve( transcript ) 
    
    })

  })
}


async function main() {
 console.log( await deepSpeechTranscript(AUDIO) ) 
}  


if (require.main === module) 
  main()

// exports public function 
module.exports = { deepSpeechTranscript }

