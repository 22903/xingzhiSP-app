function playVoice() {
  const audio = document.getElementById('guide');
  audio.play();
  alert("正在播放語音引導⋯⋯你準備好了嗎？🥺");
}
function playVoice(name){
  const audio = document . getElementById('manualAudio');
  audio.src = `voice/manul/${name}.mp3`;
  audio.play();
}
