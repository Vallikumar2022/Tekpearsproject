import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";


@Injectable()
export class PatientRegistrationService{
    prSubject = new BehaviorSubject({});
    
    constructor(){}

    setNewPatientDetails(newPatientDetails){
        this.prSubject.next(newPatientDetails);
    }
    getRegisteredPatientDetails(){
        return this.prSubject.asObservable();
    }
}