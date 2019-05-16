import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const products = [
{
    name: 'Cappucino',
    active: 'true',
}, {
    name: 'Green Tea Latte',
    active: true,
},
{
    name: 'Fish and Chips',
    active: true,
},
{
    name: 'Tuna Sandwich',
    active: true,
},
{
    name: 'Mineral Water',
    active: false,
},
{
    name: 'French Fries',
    active: false,
},
];

ReactDOM.render(<App products={products} />, document.getElementById('root'));



