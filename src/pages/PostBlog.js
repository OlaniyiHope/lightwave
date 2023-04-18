import "./Services.css"

export const PostBlog = (props) => {
    return (
        <div className="PostBlog">
            <div className="topBlog">
                <img src={props.src} alt={props.alt} />
            </div>
            <div className="middleBlog">
                <h4>{props.title}</h4>
            </div>
         
        </div>
    )
}