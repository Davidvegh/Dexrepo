

function StaticView() {
    return (
        <>
            <img src='http://www.placecage.com/200/200' alt='random' />
            <div className="title personal_details">
                <h2>Personal details</h2>
                <hr />
                <strong><p className="strong">Name</p></strong>
                <p className="notstrong">Random Géza</p>
                <strong><p className="strong">Address</p></strong>
                <p className="notstrong">Budapest</p>
                <strong><p className="strong">Phone Number</p></strong>
                <p className="notstrong">+36 20 123 4567</p>
                <strong><p className="strong">Email Address</p></strong>
                <p className="notstrong">random.geza@gmail.com</p>
                <strong><p className="strong">Driving Licence</p></strong>
                <p className="notstrong">B, D</p>
                <strong><p className="strong">Linkedin</p></strong>
                <p className="notstrong">linkedin.com/in/random-geza-122414</p>
            </div>
            <div className="title interests">
                <h2>Interests</h2>
                <hr />
                <strong><p className="strong">Cooking</p></strong>
                <strong><p className="strong">Cars</p></strong>
                <strong><p className="strong">Cocaine</p></strong>
            </div>
            <div className="title languages">
                <h2>Languages</h2>
                <hr />
                <div className="language_item">
                    <strong><p className="strong">English</p></strong>
                    <div className="outer"><div className="inner english"></div></div>
                </div>
                <div className="language_item">
                    <strong><p className="strong">German</p></strong>
                    <div className="outer"><div className="inner german"></div></div>
                </div>
                <div className="language_item">
                    <strong><p className="strong">Spanish</p></strong>
                    <div className="outer"><div className="inner spanish"></div></div>
                </div>
            </div>
        </>
    )
}

export default StaticView