import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { UploadDataComponent } from './presentation/components/upload-data/upload-data.component'
import { I18nModule, TRANSLATE_DEFAULT_CONFIG } from '@lib/common'
import { UiModule } from '@lib/ui'
import { UploadDataPageComponent } from './presentation/pages/upload-data-page/upload-data.page'
import { UploadDataRulesComponent } from './presentation/components/upload-data-rules/upload-data-rules.component'
import { HttpClientModule } from '@angular/common/http'
import { TranslateModule } from '@ngx-translate/core'
import { DatasetValidationPageComponent } from './presentation/pages/dataset-validation-page/dataset-validation-page'
import { DataImportValidationMapPanelComponent } from './presentation/components/data-import-validation-map-panel/data-import-validation-map-panel.component'
import { AnalysisProgressPageComponent } from './presentation/pages/analysis-progress-page/analysis-progress.page'
import { UploadDataErrorDialogComponent } from './presentation/components/svg/upload-data-error-dialog/upload-data-error-dialog.component'
import { UploadDataBackgroundComponent } from './presentation/components/svg/upload-data-background/upload-data-background.component'
import { UploadDataIllustrationComponent } from './presentation/components/svg/upload-data-illustration/upload-data-illustration.component'
import { AnalysisProgressIllustrationsComponent } from './presentation/components/svg/analysis-progress-illustrations/analysis-progress-illustrations.component'
import { FormsPageComponent } from './presentation/pages/forms-page/forms-page.component'
import { EditorModule } from '@lib/editor'
import { PublishPageComponent } from './presentation/pages/publish-page/publish-page.component'
import { PublishPageIllustrationComponent } from './presentation/components/svg/publish-page-illustration/publish-page-illustration.component'
import { SuccessPublishPageComponent } from './presentation/pages/success-publish-page/success-publish-page.component'
import { SuccessPublishPageIllustrationComponent } from './presentation/components/svg/success-publish-page-illustration/success-publish-page-illustration.component'

@NgModule({
  declarations: [
    AppComponent,
    UploadDataPageComponent,
    UploadDataComponent,
    UploadDataRulesComponent,
    AnalysisProgressPageComponent,
    DatasetValidationPageComponent,
    DataImportValidationMapPanelComponent,
    UploadDataErrorDialogComponent,
    UploadDataBackgroundComponent,
    UploadDataIllustrationComponent,
    AnalysisProgressIllustrationsComponent,
    FormsPageComponent,
    PublishPageComponent,
    PublishPageIllustrationComponent,
    SuccessPublishPageComponent,
    SuccessPublishPageIllustrationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UiModule,
    HttpClientModule,
    I18nModule,
    EditorModule,
    TranslateModule.forRoot(TRANSLATE_DEFAULT_CONFIG),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
