#!/usr/bin/env node

import args from 'args';
import { readFile, writeFile } from 'fs/promises';
import { ContentListItem } from '.';

args
  .option('input', 'Path to the content JSON file')
  .option('output', 'Path to save compiled content to');

const argv = args.parse(process.argv);

if (!argv.input) {
  console.error('No content path provided');
}

readFile(argv.input, 'utf8')
  .then(async file => {
    const contentData = JSON.parse(file);

    await processContent(contentData as ContentListItem[]);

    await writeFile(argv.output, JSON.stringify(contentData));
  })
  .catch(error => {
    console.error(error.message);
  });

async function processContent(contentData: ContentListItem[]) {
  for (const contentItem of contentData) {
    if (!contentItem.type || !['text', 'json'].includes(contentItem.type)) {
      continue;
    }

    if (
      typeof contentItem.args[0] === 'string' &&
      (contentItem.args[0].startsWith('./') ||
        contentItem.args[0].startsWith('http://'))
    ) {
      let contentItemData: any;

      // Arg is a URL
      if (contentItem.args[0].startsWith('http://')) {
        const response = await fetch(contentItem.args[0]);

        if (contentItem.type === 'text') {
          contentItemData = await response.text();
        } else {
          contentItemData = await response.json();
        }

        // Arg is a file path
      } else {
        const data = await readFile(contentItem.args[0], 'utf8');

        if (contentItem.type === 'text') {
          contentItemData = data;
        } else {
          contentItemData = JSON.parse(data);
        }
      }

      contentItem.args[0] = contentItemData;
    }
  }
}
