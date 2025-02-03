//ntersectionObserver api 사용으로 
// video 자동재생 자동정지
// observe는 감지 unobserve는 감지해제
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

    document.addEventListener("DOMContentLoaded", function () {
        const menuItem = document.querySelector(".nav-menu"); // "제품" 메뉴
        const dropdown = document.querySelector(".dropdown"); // 드롭다운 전체
        const subcategories = document.querySelectorAll(".sub-menu div"); // 서브 카테고리
        const submenus = document.querySelectorAll(".sub-menu-items"); // 서브메뉴 컨텐츠
    
        // 기본값: 첫 번째 메뉴(TV/AV) 활성화
        document.getElementById("1").style.display = "flex";
    
        // "제품" 메뉴에 마우스를 올리면 드롭다운 보이기
        menuItem.addEventListener("mouseenter", function () {
            dropdown.style.display = "block";
        });
    
        // "제품" 메뉴에서 마우스를 벗어나면 드롭다운 숨기기
        menuItem.addEventListener("mouseleave", function () {
            dropdown.style.display = "none";
        });
    
        // 서브카테고리 호버 이벤트
        subcategories.forEach(category => {
            category.addEventListener("mouseover", function () {
                const target = this.getAttribute("data-target");
    
                // 모든 서브메뉴 숨기기
                submenus.forEach(submenu => {
                    submenu.style.display = "none";
                });
    
                // 선택한 서브메뉴 보이기
                document.getElementById(target).style.display = "flex";
            });
        });
    
        // 마우스가 드롭다운을 벗어나면 기본값(TV/AV)으로 되돌림
        dropdown.addEventListener("mouseleave", function () {
            submenus.forEach(submenu => {
                submenu.style.display = "none";
            });
            document.getElementById("1").style.display = "flex"; // 기본 메뉴(TV/AV) 다시 표시
        });
    });
    
    