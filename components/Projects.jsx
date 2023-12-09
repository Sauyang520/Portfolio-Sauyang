import React from "react";
import ProjectCard from "./ProjectCard";


const projectData = [
    {
        id: 1,
        title: "ABC Hotel Booking",
        description: "A hotel booking system for admin.",
        image: "/projects/ABCHotelBookingSystem.png",
        gitUrl: "https://github.com/Sauyang520/ABCHotelBooking"

    },
    {
        id: 2,
        title: "Doremi Food System",
        description: "A food ordering system for school cafeteria.",
        image: "/projects/DoremiFoodSystem.png",
        gitUrl: "https://github.com/Sauyang520/DoremiFoodSystem"
    },
    {
        id: 3,
        title: "APU Extension",
        description: "A Google Chrome extension for collecting data from TradingView.",
        image: "/projects/APUExtension.png",
        gitUrl: "https://github.com/Sauyang520/APU-Extension"
    },
    {
        id: 4,
        title: "My Pine Script",
        description: "My Pine Script strategies for crypto.",
        image: "/projects/BB&MACD&RSI.png",
        gitUrl: "https://github.com/Sauyang520/My-PineScript"
    }, {
        id: 5,
        title: "My Analysis",
        description: "My data visualization and analysis.",
        image: "/projects/powerbi.png",
        gitUrl: "https://github.com/Sauyang520/My-Analysis"
    }, 

];

const Projects = () => {
    return (
        <div id="projects">
            <div className="text-4xl font-semibold mb-8 bg-gradient-to-r from-teal-500 to-teal-100 text-transparent bg-clip-text">My Projects</div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid-rows-2 gap-x-8 gap-y-4 md:gap-12 h-full">
                {projectData.map((project) => (
                    <ProjectCard 
                        key={project.id}
                        title={project.title}
                        description={project.description}
                        imgUrl={project.image}
                        gitUrl={project.gitUrl}
                    />))}
            </div>
        </div>
    );
};

export default Projects;
