import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { from, Observable } from "rxjs";

@Injectable()
export class ProductService {
  constructor(
    private angularFireStore: AngularFirestore,
  ) {}

  public createProduct(product: any): Observable<any> {
    const randomID = this.angularFireStore.createId();
    return from(this.angularFireStore.collection('products')
      .doc(randomID)
      .set({
        ...product,
        id: randomID
      }))
  }

  public getProducts(): Observable<any> {
    return this.angularFireStore.collection('products')
      .valueChanges();
  }

  public getProductById(id: string): Observable<any> {
    return this.angularFireStore.collection('products')
      .doc(id)
      .valueChanges();
  }


}
