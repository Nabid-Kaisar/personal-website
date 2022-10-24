export default function Experience({company,designation, projectList = [], skills }) {
    return (
        <>
            <section>
                <header>
                    {company}
                </header>
                <p>{designation}</p>
                <ul>
                    {projectList.map((project,idx)=>
                        <li key={idx}>{project}</li>
                    )}

                </ul>
                <p><strong>Skills:</strong> {skills}</p>
            </section>
        </>
    )
}