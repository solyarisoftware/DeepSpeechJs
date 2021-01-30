#!/bin/bash

echo
echo 'deepspeech_cli'
echo

time deepspeech_cli.sh 

sleep 2

echo
echo 'deepSpeechTranscriptSpawn'
echo

time node deepSpeechTranscriptSpawn.js 

sleep 2

echo
echo 'deepSpeechTranscriptNative'
echo

time node deepSpeechTranscriptNative.js

