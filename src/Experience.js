function Job(props) {
    return (
        <>
            <h2>{ props.company }</h2>
            <p>{ props.location } ({ props.startYear } - { props.endYear })</p>
            <p>{ props.description }</p>
        </>
    );
}

function Experience() {
    const jobs = [
        {id: 1, location: "Austin, Tx", startYear: 'Oct 2017', endYear: 'Present', company: 'IBM - Cloud Software Engineer', description: 'Works in an agile, collaborative environment across software architecture, understanding both front-end and back-end concerns, while specializing in the back-end. Works with client-server architectures, networking protocols, application development, and databases. Uses and develops RESTful APIs and web services. Understands user and system requirements. Develops using object oriented programming, multi-threading and concurrency. Plans, analyzes, designs, and constructs databases. Implements industry standards and best practices for database security and capable of analyzing and defining database and information security requirements. Develops structured query language (SQL) queries, back-end database stored procedures, or NoSQL queries. Works in programming languages like PHP, Python, Go, server-side JavaScript.'},
        {id: 2, location: "Mobile, Al", startYear: 'May 2015', endYear: 'Sep 2017', company: 'Volkert, Inc - Software Developer', description: 'Develop websites and apps using HTML, JavaScript, PHP, and CSS. Created Word and PDF documents from user inputs from websites/app data using PHPword, TCPDF, and PHP. Plans, analyzes, designs, and constructs databases. Implements industry standards and best practices for database security and capable of analyzing and defining database and information security requirements. Develops structured query language (SQL) queries, back-end database stored procedures, or NoSQL queries.'},
        {id: 3, location: "Montgomery, Al", startYear: 'Oct 2014', endYear: 'Jan 2015', company: 'DISA Maxwell Air Force Base - Intern', description: 'Increased knowledge in related Computer Science fields. Increased ability to work with large teams. Researched several projects that increase skills and knowledge.'}
    ];

    return (
        <>
            <h1>Experience</h1>
            <p>
                {jobs.map((job) => <Job key={job.id} startYear={job.startYear} endYear={job.endYear} company={job.company} description={job.description} location={job.location} />)}
            </p>
        </>
    );
}

export default Experience;