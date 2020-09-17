import { TranslationsComponent } from './container/translations/translations.component';
import { ManageAccessComponent } from './container/manage-access/manage-access.component';
import { TagsComponent } from './container/tags/tags.component';
import { BulkActionsComponent } from './container/bulk-actions/bulk-actions.component';
import { WithRelationshipComponent } from './container/with-relationship/with-relationship.component';
import { WithExportComponent } from './container/with-export/with-export.component';
import { WithMediaComponent } from './container/with-media/with-media.component';
import { StandardComponent } from './container/standard/standard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TranslatableComponent } from './container/translatable/translatable.component';

const routes: Routes = [
  { path: '', redirectTo: 'standard', pathMatch: 'full' },
  {
    path: 'standard',
    component: StandardComponent,
  },
  {
    path: 'media',
    component: WithMediaComponent,
  },
  {
    path: 'export',
    component: WithExportComponent,
  },
  {
    path: 'relation',
    component: WithRelationshipComponent,
  },
  {
    path: 'bulk',
    component: BulkActionsComponent,
  },
  {
    path: 'tags',
    component: TagsComponent,
  },
  {
    path: 'accessman',
    component: ManageAccessComponent,
  },
  {
    path: 'transaltions',
    component: TranslationsComponent,
  },
  {
    path: 'translatable',
    component: TranslatableComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
