import { NgModule } from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import { MatInputModule } from '@angular/material/input';

const materialModules: any[] = [
	MatCardModule,
	MatButtonModule,
	MatInputModule
];

@NgModule({
	imports: materialModules,
	exports: materialModules
})
export class MaterialModule {}
