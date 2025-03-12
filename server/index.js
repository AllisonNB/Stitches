require("dotenv").config();
const express = require("express");
const app = express();
const { Client } = require("@notionhq/client");

// notion authentication from: https://www.npmjs.com/package/@notionhq/client
const notion = new Client({ auth: process.env.NOTION_KEY });

//NOTION API DOCS https://developers.notion.com/reference/post-page

const getFabrics = async () => {
  const response = await notion.databases.query({
    database_id: process.env.FABRIC_DATABASE,
  });
  // console.log(response);
  // console.log(response.results);
  console.log("individual fabric:", response.results[0]);
};

getFabrics();
