import { FormGroup } from "@angular/forms";

export function MustMatch(password :string ,confirmPassword : string){
    return(formGroup:FormGroup)=>{
        const pwd =formGroup.controls[password];
        const confirmpwd=formGroup.controls[confirmPassword];
        if (pwd.value!==confirmpwd.value){
            confirmpwd.setErrors({mustMatch:true});
        }
        else{
            confirmpwd.setErrors(null);
        }
    }
}