// Using Wavesurfer API
// https://wavesurfer-js.org/
// Init WaveSurfer
let wavesurfer = WaveSurfer.create({
    container: '#waveform',
    waveColor: 'violet',
    progressColor: 'purple',
    scrollParent: true
});



wavesurfer.load("delta.mp3");


let play = ()=> wavesurfer.play();


let pause = ()=> wavesurfer.pause();

let skipForward = ()=> wavesurfer.skipForward();

let toggleMute = ()=> wavesurfer.toggleMute();




