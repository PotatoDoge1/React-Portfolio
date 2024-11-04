import resume from '../assets/2024 Resume.pdf';

export default function Contact() {
    return(
        <div>
            <h1>Resume Page</h1>
            <p>Click on the button below to download my resume as a pdf.</p>
            <a
                href={resume}
                download="Ryan_Schwark_Resume.pdf"
                className="btn btn-primary mt-3"
            >
                Download my resume here
            </a>
        </div>
    )
}