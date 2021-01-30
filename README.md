# DeepSpeechJs

DeepSpeech NodeJs usage examples.

You want to access DeepSpeech speech to text runtime transcription from a file, using NodeJs.
I tested two options:

- To spawn, from your NodeJs main thread, the external DeepSpeech command line program.
  That's the simplest, dumb and slow way. See: [deepSpeechTranscriptSpawn.js](deepSpeechTranscriptSpawn.js).

- Using DeepSpeech native NodeJs client interface. That's the more performant way.
  See: [deepSpeechTranscriptNative.js](deepSpeechTranscriptNative.js).


## What's DeepSpeech?

[DeepSpeech](https://github.com/mozilla/DeepSpeech) is an open-source Speech-To-Text engine.
Documentation for installation, usage, and training models are available on deepspeech.readthedocs.io.


## DeepSpeech Native NodeJs API

- [Native client](https://github.com/mozilla/DeepSpeech/tree/v0.9.3/native_client/javascript)
- [Documentation](https://deepspeech.readthedocs.io/en/v0.9.3/NodeJS-API.html#)
- [Usage Examples](https://github.com/mozilla/DeepSpeech-examples#javascript)


## Install and run

- Install DeepSpeech

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

- Install DeepSpeech npm package
  ```bash
  npm install deepspeech
  ```

- Install this repo
  ```bash
  git clone https://solyarisoftware/deepspeeechjs
  ```

- Run the test
  ```bash
  test_elapsed.sh
  ```


## License
MIT (c) Giorgio Robino 

