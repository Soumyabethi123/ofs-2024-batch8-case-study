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
  
import * as AccUtils from "../accUtils";

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
    }
  
}

export = DashboardViewModel;
