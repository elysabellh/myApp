export interface PopulationCounts {
    year: string;
    value: string;
    sex: string;
    reliabilty: string;
}

export interface Data{
    city: string;
    country: string;
    populationCounts: PopulationCounts[];
}

export interface Paises {
    error: boolean;
    msg: string;
    data: Data[];
    
}