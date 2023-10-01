import { useRef } from "react";

const useFullscreen = (callback) => {
    const element = useRef();
    const runCb = (isFull) => {
        if(callback && typeof callback === "function") {
            callback(isFull);
        }
    }

    // 전체 화면
    const triggerFull = () => {
        if(element.current) {
            if(element.current.requestFullscreen) {
                element.current.requestFullscreen();
            } else if(element.current.mozRequestFullscreen) {
                element.current.mozRequestFullscreen();
            } else if(element.current.webkitRequestFullscreen) {
                element.current.webkitRequestFullscreen();
            } else if(element.current.msRequestFullscreen) {
                element.current.msRequestFullscreen();
            }
            runCb(true);
        }
    }

    // 전체 화면에서 나가기
    const exitFull = () => {
        if(document.fullscreenElement) {
            if(document.exitFullscreen) {
                document.exitFullscreen();
            } else if(document.mozExitFullscreen) {
                document.mozRequestFullscreen();
            } else if(document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
            } else if(document.msExitFullscreen) {
                document.msExitFullscreen();
            }
            runCb(false);
        }
    }

    return { element, triggerFull, exitFull };
}

function App() {
    const onFullS = (isFull) => {
        console.log(isFull ? "We are Full" : "We are small");
    }
    const { element, triggerFull, exitFull }  = useFullscreen(onFullS);

    return (
        <div style={{ height: "1000vh" }}>
            <div ref={element}>
                <img  src="https://src.hidoc.co.kr/image/lib/2021/9/17/1631863503853_0.jpg" alt="apple" width="250" />
                <button onClick={exitFull}>Exit fullscreen</button>
            </div>

            <button onClick={triggerFull}>Make fullscreen</button>
        </div>
    );
}

export default App;