<<<<<<< HEAD

    import { AddressModule } from './Address.model';
    import { BankDetailsModule } from './BankDetails.model';

    export class ClaimInsurance
    {
        public policyNo : string;
        public vehicleno :string;
        public reason : string;
        public address : AddressModule;
        public claimDate:string;
        public amount:string;
        public claimId:string;
        public status:string;
        public phoneno:string;   
    
        public accountno : string;
        public confirmaccountno :string;
        public holdername : string;
        public IFSCcode: string;

        
        public vehicleimage:string;
        public FIRfile: string
        public firstname:string;
        public lastname:string;
        public street : string;
        public landmark: string;
        public city : string;
        public state : string;   
        public postalcode :string;
    }

=======
export class Claim{
    claimId : number;
    amount : number;
    status : string;
    claimDate : string;
    reason : string;
}
>>>>>>> 3490db04e9c65f7160f3eeb272a917fc820a3c74
