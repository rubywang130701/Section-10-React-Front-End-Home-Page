// TODO This is a footer component which displays the company name and navigation links. The footer is wrapped in a container with a main-color background. The footer contains two elements: a paragraph that displays the company name and an unordered list that contains two navigation links. The navigation links are styled with white text and are aligned to the right side of the footer.
export const Footer =()=>{
    return(
        <div className="main-color">
            <footer className="container d-flex flex-wrap justify-content-between align-items-center py-5 main-color">
                <p className="col-md-4 mb-0 text-white">@Example Library App, Inc</p>
                <ul className="nav navbar-dark col-md-4 justify-content-end">
                    <li className="nav-item">
                        <a href="#" className="nav-link px-2 text-white">Home</a>
                    </li>
                    <li className="nav-item">
                        <a href='#' className="nav-link px-2 text-white">
                            Search Books
                        </a>
                    </li>
                </ul>
            </footer>
        </div>
    );
}