/**
 * @license
 * Copyright (c) 2014, 2024, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */

import * as ko from "knockout";
import "oj-c/input-text";
import "ojs/ojknockout";
import 'oj-c/input-password';
import "oj-c/input-number";

import "oj-c/input-date-text";
import 'oj-c/checkbox';
import 'oj-c/form-layout';
import "ojs/ojcheckboxset";
import "oj-c/button";
import "oj-c/progress-bar";

import 'oj-c/message-toast';
import { whenDocumentReady } from "ojs/ojbootstrap";
import * as AccUtils from "../accUtils";

import MutableArrayDataProvider = require('ojs/ojmutablearraydataprovider');

type RadiosetArrayDataItem = {
  value: string;
  label: string;
  assistiveText?: string;
  helpSourceLink?: string;
  helpSourceText?: string;
};
const labelEdgeItems: RadiosetArrayDataItem[] = [
  { value: 'inside', label: 'inside' },
  { value: 'start', label: 'start' },
  { value: 'top', label: 'top' }
];

class DashboardViewModel {

  value: ko.Observable<string>;
  firstname: ko.Observable<string> | ko.Observable<any>; 
  salary: ko.Observable<number> | ko.Observable<any>;
  password : ko.Observable<any>;
  date : ko.Observable<any>;


  firstName: ko.Observable<string>;
    lastName: ko.Observable<string>;
    address: ko.Observable<string>;
    city: ko.Observable<string>;
    state: ko.Observable<string>;
    zipcode: ko.Observable<string>;
    labelEdge: ko.Observable<'top' | 'start' | 'inside' | undefined>;
    labelEdgeOptions: ko.ObservableArray<RadiosetArrayDataItem>;

    activatedButton: ko.Observable<string>;
  

    readonly messages: MutableArrayDataProvider<string, Record<string, any>>;
  
    /**
     Handles ojClose event and removes the corresponding message from the data.
     @param event The ojClose event
     */

    readonly closeMessage = (event: CustomEvent) => {
      let data = this.messages.data.slice();
      const closeMessageKey = event.detail.key;
  
      data = data.filter((message) => (message as any).id !== closeMessageKey);
      this.messages.data = data;
    };

    readonly progressValue = ko.observable(0);
    readonly buttonDisplay = ko.pureComputed(() => {
      return this.progressValue() === 100 ? "inline-flex" : "none";
    });
    readonly loadingText = ko.pureComputed(() => {
      return this.progressValue() === 100 ? "Done!" : "Loading...";
    });
  
  
    constructor() {
      this.value = ko.observable("Green");

      //initialization
      this.firstname = ko.observable(null);
      this.password = ko.observable(null);
     this.salary = ko.observable(null);
      this.date = ko.observable(null);

      this.firstName = ko.observable("Soumya");
      this.lastName = ko.observable('Bethi');
      this.address = ko.observable('Padmanagar');
      this.city = ko.observable('Bhiwandi');
      this.state = ko.observable('Goa');
      this.zipcode = ko.observable('12345');
      
      this.labelEdge = ko.observable();
      this.labelEdgeOptions = ko.observableArray(labelEdgeItems);

      const initialData = [
        {
          id: 'error1',
          severity: 'error',
          summary: 'Error message summary',
          detail: 'Error message detail.'
        }
        
      ];

      this.messages = new MutableArrayDataProvider(initialData, {
        keyAttributes: 'id'
      });

      this.activatedButton = ko.observable("(None activated yet)");

     
      window.setInterval(() => {
        {
          this.progressValue(Math.min(this.progressValue() + 1, 100));
        }
      }, 30);

    }

    public buttonAction = async (event: Event) => {
      //this.activatedButton((event.currentTarget as HTMLElement).id);
      //return true;

      let elementName = (event.currentTarget as HTMLElement).tagName;
      console.log("Name =" + this.firstName()+ " , Salary ="+this.salary());
      console.log("Element name = "+elementName);
      let id=parseInt(this.firstName());
      let url="https://jsonplaceholder.typicode.com/users/"+id;
      let res = await fetch(url);
      let jsonData = await res.json();

      this.firstName(jsonData.name);
      console.log(jsonData);


    };
  
}
export = DashboardViewModel;

