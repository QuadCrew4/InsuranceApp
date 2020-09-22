
import { AddressModule } from './Address.model';
import { BankDetailsModule } from './BankDetails.model';

export class ClaimModule
{
    public policyno : String;
    public vehicleno :String;
    public phoneno:String;
    public Reason : String;
   
    public address : AddressModule;
   public bankdetails: BankDetailsModule;

}