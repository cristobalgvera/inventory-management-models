import { CURRENCY } from '../../../shared/enum/currency';
export interface IEntry {
    entryProperties: EntryProperties
    averageDemand: EntryData
    orderCost: EntryData
    resupplyDuration: EntryData
    itemCost: EntryData
    annualStorageCostPercentage: EntryData
    periodsNumber: EntryData
}

interface EntryData {
    variableName: string
    symbology: string
    measurementUnit: string
    value: number
}

interface EntryProperties {
    currency: CURRENCY,
}