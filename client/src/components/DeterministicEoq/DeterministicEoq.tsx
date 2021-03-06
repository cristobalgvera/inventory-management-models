import React from 'react';
import { useOrder } from '../../hooks';
import { Output } from '../UI';
import { useInventory } from '../../hooks/inventory/useInventory';
import { useCost } from '../../hooks/cost/useCost';
import { useService } from '../../hooks/service/useService';

export const DeterministicEoq = () => {
    const orders = useOrder();
    const inventory = useInventory();
    const costs = useCost();
    const service = useService();

    return (
        <>
            {orders && <Output title={'Pedidos'} outputs={orders}/>}
            {inventory && <Output title={'Inventario'} outputs={inventory}/>}
            {costs && <Output title={'Costos'} outputs={costs}/>}
            {service && <Output title={'Servicio'} outputs={service}/>}
        </>
    );
};