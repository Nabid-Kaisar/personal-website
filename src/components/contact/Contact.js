import {CONTACT} from "../../common/constants/CONSTANTS"

export default function Contact(){
    return (
        <>
            <article>
                <header>
                    Get In Touch With Me:
                </header>
                <ul>
                    <li>Phone: {CONTACT.phone}</li>
                    <li>Email: {CONTACT.email}</li>
                </ul>
            </article>
        </>
    )
}