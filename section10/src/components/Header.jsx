import "../css/Header.css";

const Header = ({leftChild, title, rightChild}) => {

    return (
        <header className="Header">
            <div className="Header_left">{leftChild}</div>
            <div className="Header_center">{title}</div>
            <div className="Header_right">{rightChild}</div>
        </header>
    )
    
}

export default Header;