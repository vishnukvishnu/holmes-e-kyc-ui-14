import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";
import { SideMenuService } from "./services/side-menu.service";
import { UserService } from "./services/user.service";
import { AssociatedPartiesService } from "./services/associated-parties.service";
import { ClientDetailsService } from "./services/client-details.service";
import { HistoryService } from "./services/history.service";
import { CasesService } from "./services/cases.service";

import { AppRoutingModule, routingComponents } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MatTabsModule } from "@angular/material/tabs";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatSelectModule } from "@angular/material/select";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatSortModule } from "@angular/material/sort";
import { MatTableModule } from "@angular/material/table";
import { MatExpansionModule } from '@angular/material/expansion';
import { AssociatedPartiesComponent } from "./associated-parties/associated-parties.component";
import { CasesComponent } from "./cases/cases.component";
import { ClientDetailsComponent } from "./client-details/client-details.component";
import { ContactDetailsComponent } from "./contact-details/contact-details.component";
import { DocumentationComponent } from "./documentation/documentation.component";
import { CommentsComponent } from "./comments/comments.component";
import { EntityDataComponent } from "./entity-data/entity-data.component";
import { HistoryComponent } from "./history/history.component";
import { HomeComponent } from "./home/home.component";
import { FilterPipe } from "./filters/filter.pipe";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AdvancedSearchComponent } from "./advanced-search/advanced-search.component";
import { EntityMasterComponent } from "./entity-master/entity-master.component";
import { GrdFilterPipe } from "./filters/searchFilter.pipe";

@NgModule({
  declarations: [
    AppComponent,
    AssociatedPartiesComponent,
    CasesComponent,
    ClientDetailsComponent,
    ContactDetailsComponent,
    DocumentationComponent,
    CommentsComponent,
    EntityDataComponent,
    HistoryComponent,
    HomeComponent,
    routingComponents,
    FilterPipe,
    GrdFilterPipe,
    AdvancedSearchComponent,
    EntityMasterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatCheckboxModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatSortModule,
    MatTableModule,
    MatExpansionModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  entryComponents: [],
  providers: [
    SideMenuService,
    UserService,
    AssociatedPartiesService,
    ClientDetailsService,
    HistoryService,
    CasesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
