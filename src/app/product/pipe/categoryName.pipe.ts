import { Pipe, OnInit, PipeTransform } from '@angular/core';
import { CategoryService } from '../../category/service/category.service';
import { Category } from '../../category/model/category';

@Pipe({
    name: 'getcategoryNamePipe',
    pure:false
})
export class CategoryNamePipe implements PipeTransform {

    categoryName: string = "None";
    constructor(private service: CategoryService) { }


    transform(value: string): string {
        this.service.getCategoryById(value).subscribe((data: Category) => {
            if (data != null) {
                this.categoryName = data.categoryName
            };
        })
      return this.categoryName;
    }

}