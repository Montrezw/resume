import { SocialIcon } from 'react-social-icons';

function Job(props) {
    return (
        <>
            <SocialIcon url={props.socialLink} />
        </>
    );
}

function SocialMedia() {
    const socials = [
        {id: 1, socialLink: "https://www.linkedin.com/in/montrez-whitsett-21502bb4/"},
        {id: 2, socialLink: "https://www.twitter.com/montrezwhitsett"},
        {id: 3, socialLink: "https://github.com/Montrezw"}
    ];

    return (
        <>
            <h1>Socials</h1>
            <p>
                {socials.map((social) => <Job key={social.id} socialLink={social.socialLink} />)}
            </p>
        </>
    );
}

export default SocialMedia;