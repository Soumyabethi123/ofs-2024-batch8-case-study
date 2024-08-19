/**
 * @license
 * Copyright (c) 2014, 2024, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */

import * as AccUtils from "../accUtils";
import "ojs/ojknockout";
import * as ko from "knockout";
import Message = require("ojs/ojmessaging");
import "oj-c/input-text";
import 'oj-c/form-layout';
import 'oj-c/input-password';
import * as Bootstrap from "ojs/ojbootstrap";
import { RESTDataProvider } from 'ojs/ojrestdataprovider';
import "oj-c/button";
import 'ojs/ojtable';

type D = {"username":string,"password":string,"login_status":string,"no_Attemps":number}
type K = D["username"]
//http://localhost:8080/loginapi/allLogin

class DashboardViewModel {


  username: ko.Observable<string> | ko.Observable<any>;
  password : ko.Observable<string>  | ko.Observable<any>;
  isSubmitEnabled: ko.Computed<boolean>;

  dataprovider : RESTDataProvider<K,D>;

  constructor() {
    this.username = ko.observable('');
    this.password = ko.observable('');
    this.isSubmitEnabled = ko.computed(() => {
      const usernameValue = this.username() || '';
      const passwordValue = this.password() || '';
      return usernameValue.trim() !== '' && passwordValue.trim() !== '';
  });

  this.dataprovider = new RESTDataProvider({
    keyAttributes : 'username',
    url : 'http://localhost:8080/loginapi/allLogin',
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

  })
  }
  public buttonAction = (event: Event) => {
    // Handle button click
    //alert(`Button clicked with id: ${(event.currentTarget as HTMLElement).id}`);
    // console.log(this.dataprovider.fetchFirst);
  };
  
}

export = DashboardViewModel;
