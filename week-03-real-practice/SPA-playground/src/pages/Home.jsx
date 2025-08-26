import Navigation from "../components/Navigation.jsx";
import Footer from "../components/Footer.jsx";
function Home(){
    return(
        <>
            <Navigation />
            <main>
                <h1>Home</h1>
                <p>Welcome to Multi-Page SPA</p>
                <p>This is the home page of our React app.</p>
                <p>Here you can navigate to different sections using the menu above.</p>
            </main>
            <Footer />
        </>

    )
}
export default Home;