import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { LogMonitorComponent } from "../../projects/log-monitor/src/lib/log-monitor.component";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, LogMonitorComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
