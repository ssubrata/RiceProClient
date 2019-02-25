import { Injectable } from "../../../../node_modules/@angular/core";
import { HttpClient } from "../../../../node_modules/@angular/common/http";
import { environment } from "../../../environments/environment";
import { Category } from "../model/category";
import { Observable } from "../../../../node_modules/rxjs";


@Injectable({
    providedIn: 'root'
})
export class CategoryService {

    private Url: string = environment.Url;
    constructor(
        private http: HttpClient
    ) {
    }

    getCategorys(): Observable<Category> {
        debugger;
        return this.http.get<Category>(this.Url + "/api/category");
    }
    postCategory(category: Category) {
        return this.http.post(this.Url + "/api/category", category);
    }
    putCategory(category: Category) {
        return this.http.put(this.Url + "/api/category/" + category.categoryId, category);

    }
    deleteCategory(id: number) {
        return this.http.delete(this.Url + "/api/category/" + id);
    }
    getCategoryById(id: any):Observable<Category> {
        return this.http.get<Category>(this.Url + "/api/category/" + id);
    }

}