import Alert from 'react-bootstrap/Alert';

const Error404 = () => {
    return (
        <Alert variant="danger">
            <Alert.Heading>Ocorreu um erro!</Alert.Heading>
            <p>A página solicitada não existe!</p>
        </Alert>
    );
}

export default Error404;
