import './Add.css';
import Vali from '../Vali/Vali';
import { useState } from 'react';

function Add() {
    const [a, setA] = useState(0);
    const [b, setB] = useState(0);

    return (
        <div className='add-container'> 
            <h3 className='add-title'>Add</h3>
            <h2>
                <span className='badge bg-primary value-badge'>A= {a}</span>
                <span className='badge bg-secondary value-badge'>A + B = {a + b}</span>
                <span className='badge bg-primary value-badge'>B= {b}</span>
            </h2>
            <div className='valis-container'> 
                <Vali name={'A'} value={a} setValue={setA} />
                <Vali name={'B'} value={b} setValue={setB} />
            </div>
        </div>
    );
}

export default Add;

