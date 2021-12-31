function School(props) {
    return (
        <>
            <h2>{ props.place }</h2>
            <p><b>{ props.degree }</b></p>
            <p>{ props.startDate } - { props.endDate }</p>
        </>
    );
}

function Education() {
    const schools = [
        { id: 1, startDate: 'Jan 2022', endDate: "Present", place:"University of Texas at Austin", degree: "Master's of Engineering - Software Engineering"},
        { id: 2, startDate: 'Aug 2011', endDate: 'May 2015', place:"Alabama State University", degree: "Bachelor of Science - Computer Science minor Mathematics" }
    ];
    return (
        <>
            <h1>Education</h1>
            <p>
                {schools.map((school) => <School key={school.id} place={school.place} degree={school.degree} startDate={school.startDate} endDate={school.endDate} />)}
            </p>
        </>
    );
}

export default Education;