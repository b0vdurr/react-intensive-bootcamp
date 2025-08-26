import Navigation from "../components/Navigation.jsx";
import Footer from "../components/Footer.jsx";
function About(){
    return(
        <>
            <Navigation />
            <main>
                <h1>About</h1>
                <p>This page describes the purpose of the app.</p>
                <p>This SPA demonstrates basic React concepts such as routing, components, and navigation.</p>
            </main>
            <Footer />
        </>

    )
}
export default About;
