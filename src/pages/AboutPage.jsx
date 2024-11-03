import profilePic from '../assets/doge.jpeg';

export default function AboutPage() {
    return (
        <div className="text-center">
            <h1>I am PotatoDoge1</h1>
            <img src={profilePic} alt="PotatoDoge1" className="img-fluid"></img>
            <h2>Bio:</h2>
            <p>I am learning to code part-time while working as a financial analyst.</p>
        </div>
    );
}

//export default AboutPage;