import { Injectable } from "@angular/core";

@Injectable()
export class LocalStorageService {

  public get(key: string) {
    const data = localStorage.getItem(key);
    return JSON.parse(data || '');
  }

  public set(key: string, option: any): void {
    const data = JSON.stringify(option);
    localStorage.setItem(key, data)
  }
}
