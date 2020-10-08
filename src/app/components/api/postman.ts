import { Injectable, InjectionToken } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

export let POSTMAN = new InjectionToken('app.postman');

export class Postman {
  // static API_BASE_URL: string;
  // public static API_URL: string = environment.apiUrl;

  topPick() {
    return {
      getAll: 'data/topPicks.json',
    };
  }
}
