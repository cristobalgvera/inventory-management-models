import React  from 'react';
import { useOrder } from '../../hooks';
import { Output } from '../UI';

export const DeterministicEoq = () => {
    const orders = useOrder();

    return orders && <Output outputs={orders}/>;
};