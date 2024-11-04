import profilePic from '../assets/doge.jpeg';

export default function AboutPage() {
    return (
        <div>
            <h1  className="text-center">About Me</h1>
            <img src={profilePic} alt="PotatoDoge1" className="img-fluid"></img>
            <h2  className="text-center">I am PotatoDoge1</h2>
            <p  className="text-center">I am learning to code part-time while working as a financial analyst. The facebook link below does not work. That is intentional.</p>
        </div>
    );
}

//export default AboutPage;