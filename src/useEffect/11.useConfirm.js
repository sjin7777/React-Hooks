
const useConfirm1 = (message = "", callback) => {
    if(!callback || typeof callback !== "function") { return; }

    const confirmAction = () => {
        if(window.confirm(message)) { callback() }
    }

    return confirmAction;
}

const useConfirm2 = (message = "", callback, rejection) => {
    if(!callback || typeof callback !== "function") { return; }
    if(rejection && typeof rejection !== "function") { return; }

    const confirmAction = () => {
        if(window.confirm(message)) { callback(); }
        else { rejection(); }
    }

    return confirmAction;
}

function App() {
    const deleteWorld = () => console.log("Deleting the world....");
    const abort = () => console.log("Aborted");

    // 버튼 클릭 시 나오는 confirm 창에 확인 버튼 클릭 시 deleteWorld() 실행
    const confirmDelete1 = useConfirm1("Are your sure", deleteWorld);
    
    // 버튼 클릭 시 나오는 confirm 창에 확인 버튼 클릭 시 deleteWorld() 실행, 취소 버튼 클릭 시 abort() 실행 
    const confirmDelete2 = useConfirm2("Are your sure", deleteWorld, abort);

    return (
        <div>
            <button onClick={confirmDelete1}>Delete the world</button>
            <button onClick={confirmDelete2}>Delete the world</button>
        </div>
    );
}

export default App;