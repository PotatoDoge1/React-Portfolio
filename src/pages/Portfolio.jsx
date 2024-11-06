import './Portfolio.css';
import employeeTracker from '../assets/EmployeeTracker.png';
import weatherDashboard from '../assets/WeatherDashboard.png';
import readmeGenerator from '../assets/READMEgenerator.png';
import vehicleBuilder from '../assets/VehicleBuilder.png';

export default function Portfolio() {

    const projects = [
        {
            title: "Weather-Dashboard",
            imageUrl: weatherDashboard,
            link: 'https://github.com/PotatoDoge1/Weather-Dashboard'
        },
        {
            title: "README-Generator",
            imageUrl: readmeGenerator,
            link: 'https://github.com/PotatoDoge1/README-Generator'
        },
        {
            title: "Employee-Tracker",
            imageUrl: employeeTracker,
            link: 'https://github.com/PotatoDoge1/Employee-Tracker'
        },
        {
            title: "Vehicle-Builder",
            imageUrl: vehicleBuilder,
            link: 'https://github.com/PotatoDoge1/Vehicle-Builder'
        },
    ];

    console.log(projects);

    return(
        <div className="container">
            <h1 className="text-center">Some of my work!</h1>
            <div className="row  d-flex justify-content-center align-items-center">
            {projects.map((project, index) => (
                    <div className="col-sm-6 col-md-5 mb-4" key={index}>
                        <div className="card h-100">
                            <div
                                className="card-img-top"
                                style={{
                                    backgroundImage: `url(${project.imageUrl})`,
                                    backgroundSize: 'cover',
                                    height: '200px',
                                }}
                            />
                            <div className="d-flex flex-column">
                                <h5 className="card-title">{project.title}</h5>
                                <a href={project.link} className="btn btn-primary mt-auto" target="_blank" rel="noopener noreferrer">
                                    View Project
                                </a>
                            </div>
                        </div>
                    </div>
            ))}
            </div>
        </div>
    )
}