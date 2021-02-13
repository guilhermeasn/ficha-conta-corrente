import { useState } from 'react';
import { Modal, Button, Form, FormLabel, FormText, FormGroup } from 'react-bootstrap';

let getShow, setShow;

export const showModal = () => {
    if(typeof setShow === 'function') {
        setShow(true);
    }
}

export const LoadModal = props => {
    
    [getShow, setShow] = useState(false);

    return (
        <Modal show={getShow} onHide={()=>setShow(false)} size="lg" centered>

            <Modal.Header className="bg-success text-light" closeButton>
                <Modal.Title>Nova Ficha</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form>
                    <FormGroup>
                        <FormLabel>Nome do Cliente</FormLabel>
                        <FormText inputMode="text">cliente</FormText>
                    </FormGroup>
                </Form>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={()=>setShow(false)}>Cancelar</Button>
                <Button variant="primary" onClick={()=>setShow(false)}>Salvar</Button>
            </Modal.Footer>

        </Modal>
    );
}
