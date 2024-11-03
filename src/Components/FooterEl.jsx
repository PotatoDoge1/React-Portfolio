export default function FooterEl() {
    return (
        <footer className="d-flex justify-content-center flex-wrap my-3">
            <a 
                href="https://linkedin.com/in/ryan-schwark"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary mb-2 mx-2"
                style={{ flex: '1 1 150px' }} // Flex properties for responsive behavior
            >
                <i className="bi bi-linkedin"></i> LinkedIn
            </a>
            <a
                href="https://github.com/PotatoDoge1"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-dark mb-2 mx-2"
                style={{ flex: '1 1 150px' }} // Flex properties for responsive behavior
            >
                <i className="bi bi-github"></i> GitHub
            </a>
            <a
                href="https://facebook.com/ryan.schwark.501?mibextid=LQQJ4d"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary mb-2 mx-2"
                style={{ flex: '1 1 150px' }} // Flex properties for responsive behavior
            >
                <i className="bi bi-facebook"></i> Facebook
            </a>
        </footer>
    )
}