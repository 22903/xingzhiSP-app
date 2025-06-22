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
const voiceMap = {
  intro: "intro.mp3",
  guide1_wake: "guide1_wake.mp3",
  guide2_touch: "guide2_touch.mp3",
  guide3_hold: "guide3_hold.mp3",
  guide4_whimper: "guide4_whimper.mp3",
  guide5_praise: "guide5_praise.mp3"
};

function playVoice(key) {
  const audio = document.getElementById("manualAudio");
  audio.src = "audio/" + voiceMap[key];
  audio.play();
}
