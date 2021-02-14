import http    from '../../utils/http';
import Loading from '../misc/Loading';

import { useEffect, useState } from 'react';
import { Link, Redirect }      from 'react-router-dom';
import { Table }               from 'react-bootstrap';


export default function Home() {

    const [rdir, setRdir] = useState(0);
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

    if(rdir) return <Redirect to={'/' + rdir}/>;

    setTimeout(() => setRnew(rnew+1), 180000);
    
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
                    data.map((account) => {

                        account.last_input = account.created_at;
                        account.amount = 0;

                        account.inputs.forEach(input => {
                            account.last_input = input.registry
                            account.amount += input.credit;
                            account.amount -= input.debit;
                        });

                        return (
                            <tr key={account.id} onClick={ () => setRdir(account.id) } style={ {cursor: 'pointer'} }>
                                <td>{ ('0000' + account.id).slice(-4) }</td>
                                <th><Link to={ '/' + account.id }>{ account.client }</Link></th>
                                <td>{ new Date(account.last_input).toLocaleString('pt-br') }</td>
                                <th className={ 'text-nowrap text-' + ( account.amount < 0 ? 'danger' : 'success' ) }>{ account.amount.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) }</th>
                            </tr>
                        );
                    })
                }
            </tbody>
        </Table>
    ) : <Loading dark/>;

}
