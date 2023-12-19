
interface CheckServiceInterface {
    execute( url : string ) : Promise<boolean>
}

type SucessCallback = () => void;
type FailCallback = ( error : string ) => void;


export class CheckService implements CheckServiceInterface {

    constructor(
        private readonly successCallback : SucessCallback,
        private readonly failCallback : FailCallback
    ){
        
    }


    public async execute( url : string ) : Promise<boolean>{

        try {
            const req = await fetch(url);            
            if(!req.ok) {
                throw new Error(`Error on check service ${url}`);
            }

            this.successCallback();            
            return true;

        }
        catch(error){

            this.failCallback( `${error}` );
            return false;
        }



    }

}