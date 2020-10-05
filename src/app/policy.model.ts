

import { ClaimInsurance } from './claim.model';
import { Vehicle } from './vehicle.model';

export class Policy{
    policyNo: number;
    type: string;
    term: number;
    expDate: string;
    claim : ClaimInsurance;
    vehicle : Vehicle;
}