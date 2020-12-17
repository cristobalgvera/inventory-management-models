export interface IEntry {
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