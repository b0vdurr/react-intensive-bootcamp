function Footer(){
    const currentYear = new Date().getFullYear().toString();
    return (
        <footer>
            (C) {currentYear} Davyd Tskhovrebov
        </footer>
    )
}

export default Footer;