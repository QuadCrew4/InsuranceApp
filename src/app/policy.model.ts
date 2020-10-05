import { Claim } from './claim.model';
import { Vehicle } from './vehicle.model';

export class Policy{
    policyNo: number;
    type: string;
    term: number;
    expDate: string;

    claim : Claim;
    vehicle : Vehicle;
}