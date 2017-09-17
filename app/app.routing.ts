import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { PunComponent } from "./pun/pun.component";

const routes: Routes = [
    { path: '', redirectTo:'/pun', pathMatch: 'full' },
    { path: "pun", component: PunComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }


