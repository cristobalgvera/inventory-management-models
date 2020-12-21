import React from 'react';
import { useOrder } from '../../hooks';
import { Output } from '../UI';
import { useInventory } from '../../hooks/inventory/useInventory';

export const DeterministicEoq = () => {
    const orders = useOrder();

    const inventory = useInventory();

    return (
        <>
            {orders && <Output title={'Pedidos'} outputs={orders}/>}
            {inventory && <Output title={'Inventario'} outputs={inventory}/>}
        </>
    );
};