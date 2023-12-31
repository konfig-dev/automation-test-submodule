/*
Test Automation (No submodules)

SDKs (no submodules) to test automation workflows.

The version of the OpenAPI document: 1.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/

import { AxiosRequestConfig } from "axios";
import {
  GreetingsApi,
} from "./api";
import { Configuration, ConfigurationParameters } from "./configuration";
import { AutomationTestWithSubmoduleCustom } from "./client-custom";

export class AutomationTestWithSubmodule extends AutomationTestWithSubmoduleCustom {
  readonly greetings: GreetingsApi;

  constructor(configurationParameters: ConfigurationParameters = {}) {
    super(configurationParameters);
    const configuration = new Configuration(configurationParameters);
    this.greetings = new GreetingsApi(configuration);
  }

}
