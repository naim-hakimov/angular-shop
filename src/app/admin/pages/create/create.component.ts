import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ProductService } from "../../services/product.service";

// @ts-ignore
import convert from 'image-file-resize';
import { AngularFireStorage } from "@angular/fire/compat/storage";
import { FileService } from "../../services/file.service";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  public form!: FormGroup;
  public loading = false;
  public img: any;
  private basePath = '/uploads'
  public imgPreview: any[] = [];

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
    this.productService.createProduct(this.form.value)
      .subscribe(() => {
        this.form.reset();
        this.loading = false
      });
  }

  handleImageUpload(event: any) {
    const files = [...event.target.files]
    this.fileService.fileConvert(files)
      .subscribe(files => {
        debugger
        files.forEach(file => {
          const reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = () => this.imgPreview.push(reader.result);
        })
      })
    // const imageFile = event.target.files[0];
    // const filePath = `${this.basePath}/${imageFile.name}`;
    // const storageRef = this.angularFireStorage.ref(filePath);
    // const uploadTask = this.angularFireStorage.upload(filePath, imageFile);
    // uploadTask.snapshotChanges().pipe(
    //   finalize(() => {
    //     storageRef.getDownloadURL().subscribe(downloadURL => {
    //       console.log(downloadURL)
    //     });
    //   })
    // ).subscribe();
    // return uploadTask.percentageChanges().subscribe(res => console.log(res));
    // convert({
    //   file: imageFile,
    //   width: 200,
    //   height: 200,
    //   type: 'webp'
    // }).then((resp: any) => {
    //   console.log(resp)
    //   const reader = new FileReader();
    //   reader.readAsDataURL(resp);
    //   reader.onload = () => {
    //    this.img = reader.result
    //   }
    // }).catch((error: any) => {
    //   console.log(error)
    // })
  }
}
