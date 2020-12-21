import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ROUTES } from '../../shared/enum';
import { DeterministicEoq } from '../DeterministicEoq/DeterministicEoq';

const { DETERMINISTIC_EOQ } = ROUTES;

export function Routes() {
    return (
        <Switch>
            <Route path={DETERMINISTIC_EOQ} component={DeterministicEoq} exact/>
        </Switch>
    );
}