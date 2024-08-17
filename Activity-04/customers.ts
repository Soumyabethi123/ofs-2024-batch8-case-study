/**
 * @license
 * Copyright (c) 2014, 2024, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */

import * as ko from "knockout";
import * as AccUtils from "../accUtils";
import { whenDocumentReady } from "ojs/ojbootstrap";
import ArrayDataProvider = require("ojs/ojarraydataprovider");

import "ojs/ojtable";
import "ojs/ojknockout";

import 'oj-c/avatar';
import 'oj-c/list-item-layout';
import 'oj-c/list-view';

import * as ModuleElementUtils from "ojs/ojmodule-element-utils";
import "ojs/ojmodule-element";
import "ojs/ojmodule";

class CustomersViewModel {

  private readonly deptArray = [

    {
      "DepartmentId": 10,
      "DepartmentName": "Finance 9",
      "LocationId": 300,
      "ManagerId": 7001,
      "StartDate": "2014-06-13",
      "EmployeeCount": 335,
      "Type": "Sales",
      "Currency": "EUR",
      "Primary": [],
      "Rating": 3,
      "TargetComplete": 90
    },
    {
      "DepartmentId": 20,
      "DepartmentName": "Control And Credit 9",
      "LocationId": 300,
      "ManagerId": 7001,
      "StartDate": "2019-09-10",
      "EmployeeCount": 206,
      "Type": "HR",
      "Currency": "USD",
      "Primary": [],
      "Rating": 1,
      "TargetComplete": 90
    }

  ]
    
  readonly dataprovider = new ArrayDataProvider(this.deptArray, {
      keyAttributes: "DepartmentId",
      implicitSort: [{ attribute: "DepartmentId", direction: "ascending" }],
    });


    private readonly data = [
      {
        id: 1,
        name: 'Chris Black',
        title: 'Oracle Cloud Infrastructure GTM Channel Director EMEA',
        image: 'https://th.bing.com/th?id=OIP.xung4mlBfvUR3RKzjnRY2AHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2'
      },
      {
        id: 2,
        name: 'Christine Cooper',
        title: 'Senior Principal Escalation Manager',
        image: 'https://th.bing.com/th?id=OIP.xung4mlBfvUR3RKzjnRY2AHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2'
      },
      {
        id: 3,
        name: 'Chris Benalamore',
        title: 'Area Business Operations Director EMEA & JAPAC',
        image: 'https://th.bing.com/th?id=OIP.xung4mlBfvUR3RKzjnRY2AHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2'
      },
      {
        id: 4,
        name: 'Christopher Johnson',
        title: 'Vice-President HCM Application Development',
        image: 'https://th.bing.com/th?id=OIP.xung4mlBfvUR3RKzjnRY2AHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2'
      },
      {
        id: 5,
        name: 'Samire Christian',
        title: 'Consulting Project Technical Manager',
        image: 'https://th.bing.com/th?id=OIP.xung4mlBfvUR3RKzjnRY2AHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2'
      },
      {
        id: 6,
        name: 'Kurt Marchris',
        title: 'Customer Service Analyst',
        image: 'https://th.bing.com/th?id=OIP.xung4mlBfvUR3RKzjnRY2AHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2'
      },
      {
        id: 7,
        name: 'Zelda Christian Cooperman',
        title: 'Senior Principal Escalation Manager',
        image: 'https://th.bing.com/th?id=OIP.xung4mlBfvUR3RKzjnRY2AHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2'
      }
    ];
  
    readonly dataProvider = new ArrayDataProvider(this.data, {
      keyAttributes: 'value'
    });

    ModuleElementUtils;

  constructor() {

     this.ModuleElementUtils = ModuleElementUtils;
  }

  /**
   * Optional ViewModel method invoked after the View is inserted into the
   * document DOM.  The application can put logic that requires the DOM being
   * attached here.
   * This method might be called multiple times - after the View is created
   * and inserted into the DOM and after the View is reconnected
   * after being disconnected.
   */
  connected(): void {
    AccUtils.announce("Customers page loaded.");
    document.title = "Customers";
    // implement further logic if needed
  }

  /**
   * Optional ViewModel method invoked after the View is disconnected from the DOM.
   */
  disconnected(): void {
    // implement if needed
  }

  /**
   * Optional ViewModel method invoked after transition to the new View is complete.
   * That includes any possible animation between the old and the new View.
   */
  transitionCompleted(): void {
    // implement if needed
  }
}

export = CustomersViewModel;

whenDocumentReady().then(function () {
  ko.applyBindings(new CustomersViewModel(), document.getElementById("table"));
});