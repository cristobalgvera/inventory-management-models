import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ROUTES } from '../../shared/enum';
import { DeterministicEoq } from '../DeterministicEoq/DeterministicEoq';

const { DETERMINISTIC_EOQ } = ROUTES;

export function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path={DETERMINISTIC_EOQ} component={DeterministicEoq} exact/>
            </Switch>
        </BrowserRouter>
    );
}