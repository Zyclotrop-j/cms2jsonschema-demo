# CMS 2 JSON-Forms DEMO

TL;DR:
- Run `npm install`
- Run `npm run dev`

## Demo

https://zyclotrop-j.github.io/cms2jsonschema-demo/

## Local Demo

Open localhost:3000

Use the editor on the left to modify your ui schema. Apply it to the form-engine using the "Apply to CMS" button at the top.

You can change the underlaying data schema (json schema) by modifing the according file.

You can see the current, underlaying schemas and data at the bottom any time.

## Purpose

This demo shows how easy it is to hook up a json-forms based form engine to a WYSIWYG editor such as craftjs forming a CMS that has a visual editing interface (incl. drag-and-drop) while allowing an independend render process based on dynamic file apis.

Note that in a real scenario you'd reuse your json-forms components (allowing visual parity during editing) rather than writing them again like in this example.

