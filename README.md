# step-explain-editor

## Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [About Step Explain](#about-step-explain)
* [About Code Formating](#about-code-formating)
* [About MathJax Formating](#about-mathjax-formating)
* [Setup](#setup)
* [Automatic Integration](#automatic-integration)

## General info
Rich text editor for image and code step by step explanation.
![presentation](https://github.com/DamianKuras/step-explain-editor/presentation.gif)

## Technologies
Project is created with:
* CkEditor 5
* mathjax 2.7.6
* prism.js 1.25.0 for code highliting outside of the editor

## About Step Explain
Proper marker color and bloquote styling require u to use example/example.css styling.
By default it makes sticky images, paragraph and code on the right side of the stepExplain element.
Write code or image expalantion on left and let user see it 

## About Code Formating
Editor doesn't show code highlit while editing, but you can easliy add it to site where you present content.
Code blocks created by editor 
```
<pre>
    <code class="language-{selected language}"> ur code goes here<code>
<pre>
```
with fully supports prism.js code highliting
You can use ur own prism.js theme just make sure your bundle include languages you want to highlit.
Or download and include example/prism.js and example/prism.css

## About MathJax Formating
use:
```
<script type="text/javascript" async
    src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.7/MathJax.js?config=TeX-MML-AM_CHTML">
</script>
```
on pages where u want to see properly formated mathjax formulas
	
## Setup
To run this project, install it locally using npm:

```
$ cd ../step-explain-editor
$ npm install
$ npm run build
```
Open index.html to see editor exaple usage

## Automatic Integration 
It works when you hold post content html as text in database
inside your form add
```
<textarea id="editor"></textarea>
```
to hold your content 
and on the bottom of the body
```
<script src="dist/bundle.js"></script>
```
editor will automatically update the value of the ```<textarea>``` element once the user submits the form. 
You do not need any additional JavaScript code to send the editor data to the server.

In your HTTP server, you can now read the editor data from the content variable of the POST request. 
For instance, in PHP, you can get it in this way:
```
<?php
    $editor_data = $_POST[ 'content' ];
?>
```