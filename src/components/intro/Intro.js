import Experience from "./Experience";
import {Experience_Details} from "../../common/constants/CONSTANTS";

export default function Intro() {
    const {skill: konaSkill} = Experience_Details.kona
    const {skill: syncSkill} = Experience_Details.sync
    return (
        <>
            <main>
                <header>
                    <h4> Hello, This is Nabid Kaisar, A professional front-end software engineer with 4 years of
                        experience.</h4>
                </header>
                <p>
                    <em>Expertise: JS, TS, React</em>
                </p>
            </main>


            <header>Experiences:</header>
            <br/>
            <Experience company={"Kona Software Lab Ltd."} designation={"Software engineer level - 2"}
                        projectList={["nagad", "lottery"]} skills={konaSkill}/>
            <Experience company={"Synchronous ICT"} designation={"Assistant software Engineer"}
                        projectList={["Synopi", "plagiarism checker"]} skills={syncSkill}/>

        </>
    )
}