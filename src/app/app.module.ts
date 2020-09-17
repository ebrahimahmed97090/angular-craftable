import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContainerComponent } from './container/container.component';
import { StandardComponent } from './container/standard/standard.component';
import { WithMediaComponent } from './container/with-media/with-media.component';
import { TranslatableComponent } from './container/translatable/translatable.component';
import { WithExportComponent } from './container/with-export/with-export.component';
import { WithRelationshipComponent } from './container/with-relationship/with-relationship.component';
import { BulkActionsComponent } from './container/bulk-actions/bulk-actions.component';
import { TagsComponent } from './container/tags/tags.component';
import { ManageAccessComponent } from './container/manage-access/manage-access.component';
import { TranslationsComponent } from './container/translations/translations.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    ContainerComponent,
    StandardComponent,
    WithMediaComponent,
    TranslatableComponent,
    WithExportComponent,
    WithRelationshipComponent,
    BulkActionsComponent,
    TagsComponent,
    ManageAccessComponent,
    TranslationsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
