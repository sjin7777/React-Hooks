
// notification API 사용
const useNotification = (title, options) => {
    // window notification에 접근해야 하기 때문에 window에 notificaiton이 존재하지 않으면 리턴
    if(!("Notification" in window)) {
        return;
    } 

    const fireNotif = () => {
        // Notification.permission: 사용자가 알람 받기를 denied, granted, default 했는지를 알려줌
        //  - default인 경우에는 모든 알람이 허용되지 않음 (사용자의 선택에 따라 browser는 value가 denied인 것처럼 할 것)
        if(Notification.permission !== "granted") { 
            
            Notification.requestPermission().then(permission => {
                if(permission === "granted") {
                    new Notification(title, options);
                } else {
                    return;
                }
            });

        } else {
            new Notification(title, options);
        }
    };

    return fireNotif;
}


function App() {
    const triggerNotif = useNotification("Can I steal your kimchi?", {body: "I Love kimchi dont you"});
    return (
        <div>
            <button onClick={triggerNotif}>Hello</button>
        </div>
    );
}

export default App;