import { useState }      from 'react';
import { Modal, Button } from 'react-bootstrap';

let getShow, setShow;
let getType, setType;
let getText, setText;

export const showModal = (type, message) => {
    if(typeof setShow === 'function') {
        setShow(true);
        setText(message);
        switch (type) {
            case 'danger':
            case 'warning':
            case 'success':
                setType(type);
            break;
        
            default:
                setType('info');
            break;
        }
    }
}

export const LoadModal = props => {
    
    [getShow, setShow] = useState(false);
    [getType, setType] = useState('info');
    [getText, setText] = useState('');

    return (
        <Modal show={getShow} onHide={()=>setShow(false)} size="md" centered>

            <Modal.Header className={"bg-" + getType} closeButton>
                <Modal.Title className="text-light">Aviso!</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <p>{getText}</p>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={()=>setShow(false)}>Fechar</Button>
            </Modal.Footer>

        </Modal>
    );
}
