/**
 * @license
 * Copyright (c) 2014, 2024, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
import * as AccUtils from "../accUtils";
import * as ko from 'knockout';
import ArrayDataProvider = require('ojs/ojarraydataprovider');
import 'ojs/ojvalidation-base';
import 'oj-c/input-date-text';
import 'ojs/ojknockout';
import 'oj-c/button';
import 'oj-c/input-text';
import 'oj-c/radioset';
import 'oj-c/checkbox';
import 'oj-c/checkboxset';
import 'oj-c/select-single';
import 'oj-c/form-layout';
import 'ojs/ojdatetimepicker';
import 'ojs/ojlabel';
import 'ojs/ojtable';
import { RESTDataProvider } from 'ojs/ojrestdataprovider';
import { ojDatePicker } from 'ojs/ojdatetimepicker';

type D1 = {"username":string,"password":string,"login_status":boolean,"no_Attemps":number}
type K1 = D1["username"]

type D2 = {"customerID":number,"login":D1,"firstName":string,"lastName":string,"address":string,"city":string,"state":string,"emailId":string,"mobileNo":number,"dateofBirth":Date,"customer_status":string}
type K2 = D2["customerID"]


class CustomersViewModel {

  stateVal: ko.Observable<string>;
  username: ko.Observable<string>;
  password: ko.Observable<string>
  firstname: ko.Observable<string>;
  lastname: ko.Observable<string>;
  address: ko.Observable<string> ;
  city: ko.Observable<string>;
  phonenumber: ko.Observable<number>;
  email: ko.Observable<string>;
  dob : ko.Observable<Date> | ko.Observable<any>;
  restServerUrl: ko.Observable<string>;
  customerId: ko.Observable<number>;
  customer_status: ko.Observable<string>;
  login_status: ko.Observable<boolean>;
  no_Attemps: ko.Observable<number>;
  dateformat : ko.Observable<Date> | ko.Observable<any>;
  dataprovider: RESTDataProvider<K2, D2>;
  keyAttributes = "customerId";

  constructor() {

    this.stateVal = ko.observable('');
    this.password = ko.observable('');
    this.username = ko.observable('');
    this.firstname = ko.observable('');
    this.lastname = ko.observable('');
    this.address =ko.observable('');
    this.city = ko.observable('');
    this.email = ko.observable('');
    this.dob = ko.observable('');
    this.phonenumber = ko.observable(1);
    this.customerId = ko.observable(0);
    this.customer_status = ko.observable("Inactive");
    this.no_Attemps = ko.observable(0);
    this.login_status = ko.observable(true);
    this.dateformat = ko.observable('2012-12-12');
    this.restServerUrl = ko.observable('http://localhost:8080/bankingcrudapi/customers');

    /*this.dataprovider = new RESTDataProvider({
      keyAttributes : 'customerId',
      url : 'http://localhost:8080/bankingcrudapi/customers',
      transforms : {
        fetchFirst : {
          request :async(options) =>{
            const url = new URL(options.url);
            return new Request(url.href);
          },
          response : async({body}) =>{
            let data = body;
            return {data};
          }
        }
      }
  
    })*/

    this.dataprovider = new RESTDataProvider({
      keyAttributes: this.keyAttributes,
      url: this.restServerUrl.toString(),

      transforms: {
          fetchFirst: {
              request: async (options) => {
                  const url = new URL(options.url);
                  return new Request(url.href);
              },
              response: async ({ body }) => {
                  const { items } = body;
                  // If the response body returns, for example, "items". 
                  // We need to assign "items" to "data"
                  return { data: items };
              },
          },
      },
  });
  }

  buttonClick = async () => {
    //alert('Button is not functional, demo is to show layout only');

    const row2 = {

      username: this.username(),
      password: this.password(),
      login_status: this.login_status(),
      no_Attemps:this.no_Attemps()
    }
    const row = {
       
      customerID:this.customerId(),
      login:row2,
      firstName: this.firstname(),
      lastName: this.lastname(),
      address: this.address(),
      state:this.stateVal(),
      city:this.city(),
      emailId:this.email(),
      dateofBirth:'1221-12-11',
      mobileNo:this.phonenumber(),
      customer_status:this.customer_status()
    }

    const request = new Request('http://localhost:8080/bankingcrudapi/customer', {
      headers: new Headers({
        "Content-type": "application/json; charset=UTF-8",
      }),
      body: JSON.stringify(row),
      method: "POST",
    });

    const response = await fetch(request);
    const addedRow = await response.json();
    // // Create add mutate event and call mutate method
    // // to notify dataprovider consumers that a row has been
    // // added
    const addedRowIndex = addedRow.index;
    delete addedRow.index;
    const addedRowKey = addedRow[this.keyAttributes];
    const addedRowMetaData = { key: addedRowKey };
    this.dataprovider.mutate({
      add: {
        data: [addedRow],
        indexes: [addedRowIndex],
        keys: new Set([addedRowKey]),
        metadata: [addedRowMetaData],
      },
    });

    console.log(addedRow);
  };

  /*buttonClick = async () => {

    const row2 = {

      username: this.username(),
      password: this.password(),
      login_status: this.login_status(),
      no_Attemps:this.no_Attemps()
    }
    const row = {
       
      customerId:this.customerId(),
      login:row2,
      firstname: this.firstname(),
      lastname: this.lastname(),
      address: this.address(),
      state:this.stateVal(),
      city:this.city(),
      email:this.email(),
      dob:this.dob(),
      phone:this.phonenumber(),
      customer_status:this.customer_status()
    }
  }*/
}

export = CustomersViewModel;
