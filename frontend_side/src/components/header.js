export default function Header() {
    return (
        <header className="homePage">
            <div className="logo">
                <img src="/voyantis-logo.png" alt="voyantis-logo" />
            </div>
            <span className="title">
                <span style={{ color: "yellow" }}>Made with </span>
                <span style={{ color: "red" }}>♥</span> by{" "}
                <span style={{ color: "white" }}>Yair levi</span>
            </span>
        </header>
    );
}
