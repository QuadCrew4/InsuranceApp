
import { AddressModule } from './Address.model';
import { BankDetailsModule } from './BankDetails.model';

export class ClaimModule
{
    public policyno : string;
    public vehicleno :string;
    
    public Reason : string;
   
    public address : AddressModule;
    public bankdetails: BankDetailsModule;
    public claimDate:Date;
    public amount:string;

}

