export class FilterModel {
    filters: StandardFilterModel[];
}

export class StandardFilterModel {
    id: string;
    name: string;
    values?: FilterModelValue;
    validation?: FilterModelValidation;
}

export class FilterModelValue {
    value: string;
    name: string;
}

export class FilterModelValidation {
    primitiveType: string;
    entityType: string;
    pattern: string;
    min: number;
    max: number;
}