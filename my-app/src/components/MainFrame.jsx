import NavBarHome from "./NavBarHome";

function MainFrame(props) {
    return (
        <div class="flex flex-col h-screen">
        <NavBarHome />
        <div class="flex-1 overflow-y-auto">
            {props.children}
        </div>
        </div>
    );
}

export default MainFrame;