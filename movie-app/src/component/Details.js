import { withRouter } from "react-router";

const Details = (props) => {
console.log(props.match.params)
    return(
        <div>
            <h1>{}</h1>
        </div>
    );
}

export default withRouter(Details);