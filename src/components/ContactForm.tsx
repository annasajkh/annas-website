import { FormEvent, useState } from "react";
import "./ContactForm.css";
import loadingCircleGifPath from "../assets/gifs/loading-circle-loading.gif"


export default function ContactForm() {
    const [isSubmiting, setIsSubmiting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [isFailed, setIsFailed] = useState(false);

    const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
        setIsSubmiting(true);
        event.preventDefault();
        const formData = new FormData(event.target as HTMLFormElement);

        formData.append("access_key", "b3a5d8cd-26ec-4907-967e-2ba2e28f4bf1"); // This is public, so it's fine to use here

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: json
            }).then((res) => res.json());

            if (response.success) {
                setIsSuccess(true);
            }
            else {
                setIsFailed(true);
            }
        } catch (error) {
            console.error("Error submitting the form: ", error);
        }

        setIsSubmiting(false);
    };

    function formUI() {
        return (
            <form className="contact-form" onSubmit={onSubmit}>
                <input type="text" name="name" placeholder="Your Name" className="contact-form-name" required />
                <input type="email" name="email" placeholder="Your Email" className="contact-form-email" required />
                <textarea name="message" placeholder="Your Message" className="contact-form-message" required />
                <input type="hidden" name="redirect" value="https://web3forms.com/success" />
                <button disabled={isSubmiting} type="submit" className="contact-form-submit-button">{isSubmiting ? <img src={loadingCircleGifPath} width={32} height={32} /> : "Submit"}</button>
            </form>
        );
    }

    function successUI() {
        return (
            <div className="result-contact">
                <p className="successful-ui">Successfully submit the message to Annas</p>
                <button onClick={() => location.reload()} className="contact-form-submit-button">Return</button>
            </div>

        )
    }

    function failedUI() {
        return (
            <div className="result-contact">
                <p className="failed-ui">Failed to submit the message to Annas</p>
                <button onClick={() => location.reload()} className="contact-form-submit-button">Return</button>
            </div>
        )
    }

    return (
        <>
            {isSuccess && successUI()}
            {isFailed && failedUI()}
            {!isSuccess && !isFailed && formUI()}
        </>
    )

}