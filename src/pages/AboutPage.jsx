export default function AboutPage() {
    return (
        <div className="flex-row d-flex my-3">
            <div className="container my-5">
                <h1 className="text-center mb-4">About Us</h1>
                
                <section className="mb-4">
                <h2 className="h4 text-primary">Our Story</h2>
                <p>
                    We started with a vision to create something unique and impactful. Our journey has been about crafting 
                    quality, building trust, and delivering excellence every step of the way.
                </p>
                </section>
        
                <section className="mb-4">
                <h2 className="h4 text-primary">Our Mission</h2>
                <p>
                    Our mission is to make a positive difference by providing top-notch services and products to our clients. 
                    We are committed to innovation, quality, and sustainability.
                </p>
                </section>
        
                <section className="mb-4">
                <h2 className="h4 text-primary">Our Values</h2>
                <ul className="list-unstyled">
                    <li className="mb-2">
                    <i className="bi bi-check-circle-fill text-success mr-2"></i>
                    Integrity
                    </li>
                    <li className="mb-2">
                    <i className="bi bi-check-circle-fill text-success mr-2"></i>
                    Customer Commitment
                    </li>
                    <li className="mb-2">
                    <i className="bi bi-check-circle-fill text-success mr-2"></i>
                    Quality
                    </li>
                    <li className="mb-2">
                    <i className="bi bi-check-circle-fill text-success mr-2"></i>
                    Innovation
                    </li>
                    <li className="mb-2">
                    <i className="bi bi-check-circle-fill text-success mr-2"></i>
                    Sustainability
                    </li>
                </ul>
                </section>
            </div>
        </div>
    );
}

//export default AboutPage;