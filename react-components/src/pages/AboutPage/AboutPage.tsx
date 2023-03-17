import React from "react";
import styles from './AboutPage.module.scss'

export interface AboutPageProps {

}

export interface AboutPageState {

}

class AboutPage extends React.PureComponent<AboutPageProps, AboutPageState> {
    // state = { :  }
    render() {
        return (<div className={styles['about-page']}>
            <p>Welcome to our site, where we celebrate everything feline! We're a group of passionate cat lovers who believe that cats are more than just pets – they're beloved members of our families, each with their own unique personality, quirks, and charms.
            </p>
            <p>Our site is dedicated to all things cat-related, from tips on cat care and nutrition to fun facts about cat behavior and the latest cat-related news and trends. Whether you're a lifelong cat owner or are considering adopting a cat for the first time, we're here to provide you with the information and resources you need to give your furry friend the best possible care and love.
            </p>
            <p>At our site, we also believe in the importance of cat welfare and advocacy. We work with local shelters and rescue organizations to promote cat adoption and help cats in need find their forever homes. We also support initiatives that aim to improve the lives of cats, such as spay/neuter programs and efforts to combat animal cruelty and neglect.
            </p>
            <p>Our team is made up of cat enthusiasts from all walks of life, from seasoned veterinarians and cat behaviorists to dedicated volunteers and everyday cat lovers. We're passionate about cats and about sharing our knowledge and love of these amazing animals with others.
            </p>
            <p>Thank you for visiting our site, and we hope you enjoy learning more about cats with us!</p></div>);
    }
}

export default AboutPage;