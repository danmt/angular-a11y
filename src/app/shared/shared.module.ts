import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { ArticleComponent } from './layout/article/article.component';
import { ShellComponent } from './layout/shell/shell.component';

@NgModule({
  declarations: [ButtonComponent, ArticleComponent, ShellComponent],
  imports: [CommonModule],
  exports: [ButtonComponent, ArticleComponent, ShellComponent]
})
export class SharedModule {}
