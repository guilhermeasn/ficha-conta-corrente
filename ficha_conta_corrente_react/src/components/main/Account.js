import { useParams } from "react-router-dom";

const Account = () => {
    const id = useParams().id;
    return (<p>Account {id}</p>);
}

export default Account;
