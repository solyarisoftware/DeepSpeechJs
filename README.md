# DeepSpeechJs

Some examples about how to use DeepSpeech, from NodeJs. 

## What's DeepSpeech?

[DeepSpeech](https://github.com/mozilla/DeepSpeech) is an open-source Speech-To-Text engine.
Documentation for installation, usage, and training models are available on deepspeech.readthedocs.io.


## DeepSpeech run-time transcript, from Node Js

You want to access DeepSpeech speech to text runtime transcription from a well formatted WAV file, using NodeJs.
I tested two options:

1. Spawning, from your NodeJs main thread, an external DeepSpeech command line program.
   That's the simplest, dumb and slow way in terms of performances.
   In general, spawning an external process, catching his stdout is a bit dumb. 

   Example: [deepSpeechTranscriptSpawn.js](deepSpeechTranscriptSpawn.js).

2. Using DeepSpeech native NodeJs client interface. 
   That's a more performant way.
 
   Example: [deepSpeechTranscriptNative.js](deepSpeechTranscriptNative.js).
 
  The example is very raugh, presuming the audio file is a "well formatted" WAV file. 
  The audio file is just read in memory and the deepspeech `model.stt()` API is called.
  [Official examples](https://github.com/mozilla/DeepSpeech-examples#javascript) repo
  contains audio examples that show how to validate WAV, and speeech processing from streaming / in-memory buffers.

### DeepSpeech official native NodeJs API

- [Native client](https://github.com/mozilla/DeepSpeech/tree/v0.9.3/native_client/javascript)
- [Documentation](https://deepspeech.readthedocs.io/en/v0.9.3/NodeJS-API.html#)
- [Usage Examples](https://github.com/mozilla/DeepSpeech-examples#javascript)

### Wat's a well formatted WAV audio file?

DeepSpeech requires a 16bit 16 KHz mono WAV input audio file.
To record such a file:
```
sudo apt install sox`
rec -r 16k -c 1 my_recording.wav

mediainfo my_recording.wav
General
Complete name                            : my_recording.wav
Format                                   : Wave
File size                                : 64.0 KiB
Duration                                 : 2 s 48 ms
Overall bit rate mode                    : Constant
Overall bit rate                         : 256 kb/s

Audio
Format                                   : PCM
Format settings                          : Little / Signed
Codec ID                                 : 1
Duration                                 : 2 s 48 ms
Bit rate mode                            : Constant
Bit rate                                 : 256 kb/s
Channel(s)                               : 1 channel
Sampling rate                            : 16.0 kHz
Bit depth                                : 16 bits
Stream size                              : 64.0 KiB (100%)
```

## Install and run

1. Install DeepSpeech

   ```bash
   # Create and activate a virtualenv
   virtualenv -p python3 $HOME/tmp/deepspeech-venv/
   source $HOME/tmp/deepspeech-venv/bin/activate

   # Install DeepSpeech
   pip3 install deepspeech

   # Download pre-trained English model files
   curl -LO https://github.com/mozilla/DeepSpeech/releases/download/v0.9.3/deepspeech-0.9.3-models.pbmm
   curl -LO https://github.com/mozilla/DeepSpeech/releases/download/v0.9.3/deepspeech-0.9.3-models.scorer

   # Download example audio files
   curl -LO https://github.com/mozilla/DeepSpeech/releases/download/v0.9.3/audio-0.9.3.tar.gz
   tar xvf audio-0.9.3.tar.gz

   # Transcribe an audio file
   deepspeech --model deepspeech-0.9.3-models.pbmm --scorer deepspeech-0.9.3-models.scorer --audio audio/2830-3980-0043.wav
   ```

2. Install DeepSpeech npm package
   ```bash
   npm install deepspeech
   ```

3. Install this repo
   ```bash
   git clone https://solyarisoftware/deepspeeechjs
   ```

4. Run the test
   ```bash
   test_elapsed.sh
   ```

## To do

- The project is in a very draft stage.
- Add a better high-level API interface including metadata as parameters
- Add a web server interface (using express or stuff)


## License

MIT (c) Giorgio Robino 

