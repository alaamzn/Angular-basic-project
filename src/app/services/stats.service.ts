import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StatsService {

  constructor() { }

  getStats(list: any[], criteria: string, value: any){

    let n: number = 0;

    for(let i in list){
      if(list[i][criteria] === value){
        n++;
      }
    }

    return n;
  }
}
