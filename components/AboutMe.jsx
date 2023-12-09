import React from "react";
import { useTransition, useState } from "react";
import TabButton from "./TabButton";

//1d
const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
          <ul className="list-disc pl-1">
                <li>R</li>
                <li>Power BI</li>
                <li>Java</li>
                <li>Pine Script</li>
                <li>SQL</li>
                <li>Python</li>
                <li>System Analysis & Design</li>
          </ul>
        ),
    },
    {
        title: "Experience",
        id: "experience",
        content: (
          <ul className="list-disc pl-2">
            <li>Hong Kong IIDC 2018</li>
            <li>Japan JDIE 2019</li>
            <li>Kuala Lumpur WYIE 2019</li>
            <li>Summit 2009 Beginner 2023</li>
          </ul>
        ),
    },
    {
        title: "Languages",
        id: "languages",
        content: (
          <ul className="list-disc pl-3">
            <li>Chinese</li>
            <li>English</li>
            <li>Malay</li>
          </ul>
        ),
    },
    {
        title: "Education",
        id: "education",
        content: (
          <ul className="list-disc pl-4">
                <li>Asia Pacific University</li>
                <li>SMK Pengerang Utama</li>
          </ul>
        ),
    }
];
//1
const AboutMe = () => {
    //1b
    const[tab, setTab] = useState("skills");
    const[isPending, startTransition] = useTransition();
    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    };
    //1a
    return(
        <section className="text-white grid" id="aboutMe">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:px-32 py-16 xl-gap-16 items-center">
                <div>
                    <img src="/AboutMe.jpg" alt="About Me" width={450} height={450} style={{ borderRadius: "25px" }}/>
                </div>
                <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-teal-500 to-teal-100 text-transparent bg-clip-text">About Me</h1>
                    <p className="text-base text-justify lg:text-lg">
                        I am Sim Sau Yang, a current undergraduate student pursuing a degree in Computer Science with a specialization in Data Analytics at Asia Pacific University. 
                        I possess a strong affinity for delving into the intricacies of data and am passionate about programming. 
                        Proficient in Java, I have utilized JavaFX to develop applications. Additionally, I excel in data visualization using Power BI. 
                        During my internship, I demonstrated my programming skills by employing Pine Script to formulate trading strategies for cryptocurrencies, 
                        catering to the needs of my employer. My insatiable curiosity and proactive mindset drive me to continually seek new challenges and expand my knowledge base. </p>
                    <div className="flex flex-row mt-8">
{/* 1e */}
                        <TabButton 
                        selectTab={() => handleTabChange("skills")}
                        active= {tab === "skills"}
                        >
                            {" "}
                            Skills
                        </TabButton>

                        <TabButton 
                        selectTab={() => handleTabChange("experience")}
                        active= {tab === "experience"}
                        >
                            {" "}
                            Experience{" "}
                        </TabButton>

                        <TabButton 
                        selectTab={() => handleTabChange("languages")}
                        active= {tab === "languages"}
                        >
                            {" "}
                            Languages{" "}
                        </TabButton>
                        
                        <TabButton 
                        selectTab={() => handleTabChange("education")}
                        active= {tab === "education"}
                        >
                            {" "}
                            Education{" "}
                        </TabButton>
                        
                    </div>
                    <div className="mt-8">{TAB_DATA.find((t) => t.id === tab).content}</div>
                </div>

            </div>
        </section>

    );
};
export default AboutMe;