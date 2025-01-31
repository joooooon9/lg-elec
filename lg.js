//ntersectionObserver api 사용으로 
// video 자동재생 자동정지
// observe는 감지 unobservs는 감지해제
const videoplayer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        const video = entry.target;
        if (entry.isIntersecting) {
            video.play();
        } else {
            video.pause();
        }
    });
}, { threshold: 0.25 });
document.querySelectorAll(".video1").forEach(video => {
    videoplayer.observe(video);
    });