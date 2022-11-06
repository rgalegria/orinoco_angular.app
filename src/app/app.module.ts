import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LinkButtonComponent } from './core/components/buttons/link-button/link-button.component';
import { ActionButtonComponent } from './core/components/buttons/action-button/action-button.component';
import { InputComponent } from './core/components/input/input.component';
import { CheckboxComponent } from './core/components/checkbox/checkbox.component';

@NgModule({
    declarations: [AppComponent, LinkButtonComponent, ActionButtonComponent, InputComponent, CheckboxComponent],
    imports: [BrowserModule, AppRoutingModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
