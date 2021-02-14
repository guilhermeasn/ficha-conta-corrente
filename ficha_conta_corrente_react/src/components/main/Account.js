import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

import { Table } from 'react-bootstrap';

import http    from '../../utils/http';
import Loading from '../misc/Loading';


export default function Account() {
    
    const [rnew, setRnew] = useState(0);
    const [ajax, setAjax] = useState(false);
    const [data, setData] = useState([]);

    const id = useParams().id;
    let amount = 0;

    useEffect(() => {
        http.get(`accounts/${id}`).then(response => {
            const label = rnew ? 'Updated' : 'Read';
            console.log(`${label} data at ${new Date()}`);
            setData(response.data);
            setAjax(true);
        }).catch(reject => console.error(reject));
    }, [rnew, id]);

    setTimeout(() => setRnew(rnew+1), 60000);

    return ajax ? (
        <div className='text-center'>

            <h3 className='text-dark'>
                { data.client }
            </h3>

            <p className='small text-muted'>
                { data.phone }
                { data.email }
            </p>

            <div className='my-4'>

                <Table className="text-center w-100" responsive="md" striped bordered>
                    <thead>
                        <tr>
                            <th scope='col'>Registro</th>
                            <th scope='col'>Descrição</th>
                            <th scope='col' className='text-danger'>Débito</th>
                            <th scope='col' className='text-success'>Crédito</th>
                            <th scope='col'>D/C</th>
                            <th scope='col'>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.inputs.map((input) => {
                                amount += input.credit - input.debit;
                                return (
                                    <tr key={input.id}>
                                        <td>{ new Date(input.registry).toLocaleString('pt-br') }</td>
                                        <td>{ input.description }</td>
                                        <td className='text-nowrap text-danger'>{ (input.debit*-1).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) }</td>
                                        <td className='text-nowrap text-success'>{ input.credit.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) }</td>
                                        <td>{ amount < 0 ? 'D' : 'C' }</td>
                                        <th className={ 'text-nowrap text-' + ( amount < 0 ? 'danger' : 'success' ) }>{ amount.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) }</th>
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </Table>

                <Table className="text-center w-100 mt-2" responsive="md" variant={ amount < 0 ? 'danger' : 'success' } bordered>
                    <tbody>
                        <tr>
                            <th className={ 'h5 text-nowrap text-' + ( amount < 0 ? 'danger' : 'success' ) }>
                                { amount.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) }
                            </th>
                        </tr>
                    </tbody>
                </Table>

            </div>

        </div>
    ) : <Loading dark/>;

}
