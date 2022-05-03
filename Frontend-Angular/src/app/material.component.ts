import { NgModule } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MatNativeDateModule } from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import {MatSliderModule} from '@angular/material/slider';

@NgModule({
    imports: [
        MatSidenavModule,
        MatIconModule,
        MatButtonModule,
        MatTooltipModule,
        MatToolbarModule,
        MatListModule,
        MatProgressBarModule,
        MatDialogModule,
        MatFormFieldModule,
        MatDatepickerModule,
        MatSnackBarModule,
        MatNativeDateModule,
        MatInputModule,
        MatSliderModule
    ],
    exports: [
      MatSidenavModule,
      MatIconModule,
      MatButtonModule,
      MatTooltipModule,
      MatToolbarModule,
      MatListModule,
      MatProgressBarModule,
      MatDialogModule,
      MatFormFieldModule,
      MatDatepickerModule,
      MatSnackBarModule,
      MatNativeDateModule,
      MatInputModule,
      MatSliderModule
    ]
})
export class MaterialModule { }