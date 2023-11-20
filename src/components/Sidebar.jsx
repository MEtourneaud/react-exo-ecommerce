import "./Sidebar.css"

function Sidebar({sideTitle}) {
    return(
        <div className="container">
            <div className="sidebar">
                <h2>{sideTitle}</h2>
            </div>
        </div>
    )
}

export default Sidebar