var click_to_record = document.getElementById('click_to_record');
var speech = true;
window.SpeechRecognition = window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.interimResults = true;

recognition.addEventListener('result', function(e) {
    const transcript = Array.from(e.results)
        .map(result => result[0])
        .map(result => result.transcript)
        .join('');

    document.getElementById("convert_text").innerHTML = transcript;
    console.log(transcript);
});

if (speech) {
    recognition.start();
}
