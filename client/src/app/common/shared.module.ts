import { NgModule } from "@angular/core";
import { AppMaterialModule } from "./angular-materail/app.material.module";

@NgModule({
    imports:[AppMaterialModule],
    exports:[AppMaterialModule]
})
export class SharedModule{

}