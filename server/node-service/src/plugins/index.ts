import { DataSourcePlugin, DataSourcePluginFactory } from "openblocks-sdk/dataSource";
import s3Plugin from "./s3";
import n8nPlugin from "./n8n";
import openApiPlugin from "./openApi";
import dynamoDBPlugin from "./dynamodb";
import firebasePlugin from "./firebase";
import couchdbPlugin from "./couchdb";
import wooCommercePlugin from "./woocommerce";
import openAiPlugin from "./openAi";
import athenaPlugin from "./athena";
import lambdaPlugin from "./lambda";
import googleCloudStorage from "./googleCloudStorage";
import stripePlugin from "./stripe";
import asanaPlugin from "./asana";
import circleCiPlugin from "./circleCi";
import frontPlugin from "./front";
import githubPlugin from "./github";
import huggingFacePlugin from "./huggingFace";
import jiraPlugin from "./jira";
import oneSignalPlugin from "./oneSignal";
import salesForcePlugin from "./salesForce";
import sendGridPlugin from "./sendGrid";
import shopifyPlugin from "./shopify";
import slackPlugin from "./slack";
import supabaseStoragePlugin from "./supabaseStorage";

let plugins: (DataSourcePlugin | DataSourcePluginFactory)[] = [
  s3Plugin,
  openApiPlugin,
  n8nPlugin,
  dynamoDBPlugin,
  firebasePlugin,
  couchdbPlugin,
  wooCommercePlugin,
  openAiPlugin,
  athenaPlugin,
  lambdaPlugin,
  googleCloudStorage,
  stripePlugin,
  asanaPlugin,
  circleCiPlugin,
  frontPlugin,
  githubPlugin,
  huggingFacePlugin,
  jiraPlugin,
  oneSignalPlugin,
  salesForcePlugin,
  sendGridPlugin,
  shopifyPlugin,
  slackPlugin,
  stripePlugin,
  supabaseStoragePlugin,
];

try {
  plugins = require("../ee/plugins").default;
  console.info("using ee plugins");
} catch {}

export default plugins;
