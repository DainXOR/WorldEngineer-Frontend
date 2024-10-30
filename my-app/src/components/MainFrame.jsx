import NavBar from "./NavBar";

function MainFrame(props) {
    return (
        <div class="flex flex-col h-screen">
        <NavBar />
        <div class="flex-1 overflow-y-auto">
            {props.children}
        </div>
        </div>
    );
}

export default MainFrame;