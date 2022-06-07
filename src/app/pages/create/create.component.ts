import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ProductService } from "../../services/product.service";

// @ts-ignore
import convert from 'image-file-resize';
import { AngularFireStorage } from "@angular/fire/compat/storage";
import { FileService } from "../../services/file.service";
import { catchError, finalize, forkJoin, of, switchMap } from "rxjs";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  public form!: FormGroup;
  public loading = false;
  public img: any;
  public imgPreview: any[] = [];
  private basePath = '/uploads'
  private files: any[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private angularFireStorage: AngularFireStorage,
    private fileService: FileService,
  ) {
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: [null, Validators.required],
      categoryId: [null, Validators.required],
      price: [null, Validators.required],
      description: [null, Validators.required],
    })
  }

  submit(): void {
    this.loading = true;
    forkJoin(this.files.map(file => {
      const filePath = `${this.basePath}/${file.name}`;
      const storageRef = this.angularFireStorage.ref(filePath);
      const uploadTask = this.angularFireStorage.upload(filePath, file);
      return uploadTask.snapshotChanges()
        .pipe(
          switchMap(() => {
           return storageRef.getDownloadURL();
        }))
    })).pipe(
      switchMap(imagesUrl => {
        const product = {...this.form.value, images: imagesUrl}
        return this.productService.createProduct(product)
      }),
      catchError(err => {
        this.loading = false;
        throw err;
      })
    ).subscribe(() => {
      this.loading = false;
      this.form.reset();
      this.imgPreview = this.files = [];
    });
  }

  handleImageUpload(event: any) {
    const files = [...event.target.files]
    this.fileService.fileConvert(files)
      .subscribe(files => {
        files.forEach(file => {
          this.files.push(file);
          const reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = () => this.imgPreview.push(reader.result);
        })
      })
  }

  removeImg(idx: number): void {
    this.imgPreview.splice(idx, 1);
    this.files.splice(idx, 1);
  }
}
