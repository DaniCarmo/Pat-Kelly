// Navbar scroll functionality
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    const togglerIcon = document.querySelector('.navbar-toggler-icon');
    if (window.scrollY > 50) {
        navbar.classList.add('navbar-dark');
        navbar.classList.remove('navbar-light');
        togglerIcon.style.backgroundImage = "url('data:image/svg+xml;utf8,<svg viewBox=\"0 0 30 30\" xmlns=\"http://www.w3.org/2000/svg\"><path stroke=\"rgba(0, 0, 0, 1)\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-miterlimit=\"10\" d=\"M4 7h22M4 15h22M4 23h22\"/></svg>')";
    } else {
        navbar.classList.add('navbar-light');
        navbar.classList.remove('navbar-dark');
        togglerIcon.style.backgroundImage = "url('data:image/svg+xml;utf8,<svg viewBox=\"0 0 30 30\" xmlns=\"http://www.w3.org/2000/svg\"><path stroke=\"rgba(0, 0, 0, 1)\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-miterlimit=\"10\" d=\"M4 7h22M4 15h22M4 23h22\"/></svg>')";
    }
});

 // Event listener for clicks outside the navbar
 document.addEventListener('DOMContentLoaded', function () {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('#navbarNav');

    document.addEventListener('click', function (event) {
        // Check if the click is outside the navbar-toggler and navbar-collapse
        if (!navbarToggler.contains(event.target) && !navbarCollapse.contains(event.target)) {
            // Use Bootstrap's Collapse API to hide the navbar if it's shown
            const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
            if (bsCollapse && bsCollapse._isShown()) {
                bsCollapse.hide();
            }
        }
    });
});

// WaveSurfer.js integration
// import WaveSurfer from 'https://cdn.jsdelivr.net/npm/wavesurfer.js@7/dist/wavesurfer.esm.js';

// Array of audio files to load for each show
const audioFiles = [
    'audio/Derek Rusk Finish.mp3',
    'audio/SSOCT2217 Norma Foley Finish.mp3',
    'audio/Gary O Donnell Finish.mp3',
    'audio/Ed Kelliher Finish 2.mp3',
    'audio/Ger Carmody Finish.mp3'
];

// Initialize WaveSurfer instances for each audio clip
audioFiles.forEach((audioFile, index) => {
    const wavesurfer = WaveSurfer.create({
        container: `#waveform${index + 1}`,  // The id of each audio-visualizer div
        waveColor: 'rgb(200, 0, 200)',
        progressColor: 'rgb(100, 0, 100)',
        barWidth: 2,
        height: 100
    });

    // Load the audio file into the corresponding waveform
    wavesurfer.load(audioFile);

    // Add custom controls (optional)
    document.querySelector(`#waveform${index + 1}`).addEventListener('click', () => {
        wavesurfer.playPause();  // Play/pause on click
    });
});