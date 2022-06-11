import { Injectable } from "@angular/core";
import { AngularFireStorage } from "@angular/fire/compat/storage";
import { forkJoin, Observable } from "rxjs";
// @ts-ignore
import convert from 'image-file-resize';

import { ConvertInterface } from "../_models/convert.interface";

@Injectable()
export class FileService {
  constructor(
    private angularFireStorage: AngularFireStorage
  ) {}

  public fileConvert(files: any[]): Observable<any[]> {
    return forkJoin(files.map(file => {
      const convertFile: ConvertInterface = {
        file: file,
        width: 200,
        height: 200,
        type: 'webp'
      }
      return convert(convertFile)
    }))
  }
}
