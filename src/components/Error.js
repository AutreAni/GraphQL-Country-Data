import '../css-modules/error.css';

const Error = ({message}) => {
    return ( 
        <div className = 'error'>
        <p>{message}</p>
        <div className = "figure">
        <div className = "figcaption">
        <div className="sad-mac"></div>
        </div>
        </div>
    </div>
     );
}
 
export default Error;