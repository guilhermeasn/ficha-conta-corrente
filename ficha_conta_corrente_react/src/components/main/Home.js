import http from '../../utils/http';
import { useEffect, useState } from 'react';

import { Link }  from 'react-router-dom';
import { Table } from 'react-bootstrap';

import Loading from '../misc/Loading';


export default function Home() {
    const [rnew, setRnew] = useState(0);
    const [ajax, setAjax] = useState(false);
    const [data, setData] = useState([]);

    useEffect(() => {
        http.get('accounts').then(response => {
            const label = rnew ? 'Updated' : 'Read';
            console.log(`${label} data at ${new Date()}`);
            setData(response.data);
            setAjax(true);
        }).catch(reject => console.error(reject));
    }, [rnew]);

    setTimeout(() => setRnew(rnew+1), 30000);
    
    return ajax ? (
        <Table className="text-center w-100" responsive="md" striped bordered hover>
            <thead>
                <tr>
                    <th scope='col'>#</th>
                    <th scope='col'>Cliente</th>
                    <th scope='col'>Último Movimento</th>
                    <th scope='col'>Saldo Atual</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map((account) =>
                        <tr key={account.id}>
                            <td>{ ('0000' + account.id).slice(-4) }</td>
                            <th><Link to={ '/' + account.id }>{ account.client }</Link></th>
                            <td>{ new Date(account.last_input).toLocaleString('pt-br') }</td>
                            <th className={ 'text-' + (account.amount>0 ? 'success' : 'danger') }>{ account.amount.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) }</th>
                        </tr>
                    )
                }
            </tbody>
        </Table>
    ) : <Loading dark/>;
}
