// TODO
//  This is a functional component in React that returns a div with a dark background and some text centered within it. The text includes a header and a paragraph, as well as a button with a link. The purpose of this component is to display a header section for a page related to exploring top books.
export const ExploreTopBooks =()=>{
    return(
        <div className='p-5 mb-4 bg-dark header'>
            <div className='container-fluid py-5 text-white d-flex justify-content-center align-items-center'>
                <div>
                    <h1 className='display-5 fw-bold'>Find your next adventure</h1>
                    <p className='col-md-8 fs-4'>Where would you like to go newt?</p>
                    <a type='button' className='btn main-color btn-lg text-white' href='#'>
                        Explore top books
                    </a>
                </div>
            </div>
        </div>
    );
}