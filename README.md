# step-explain-editor

## Table of contents
* [General info](#general-info)
* [About Code Formating](#about-code-formating)
* [Technologies](#technologies)
* [Setup](#setup)

## General info
Rich text editor for image and code step explanation
Editor output doesn't show code highlit, 
sticky right explanation image or code
but you can easly add it via css or js in html file where u present created html
include example/example.css in file when u use source created by editor
include example/prism.js via to get code highlit 
use:
<script type="text/javascript" async
    src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.7/MathJax.js?config=TeX-MML-AM_CHTML">
</script>
on pages where u want to see properly formated mathjax formulas

## About Code Formating
Editor produces 
<pre><code class="language-{selected language}"> ur code goes here<code><pre>
with fully supports prism.js code highliting
	
## Technologies
Project is created with:
* CkEditor 5
* mathjax 2.7.6
* prism.js for code highliting
	
## Setup
To run this project, install it locally using npm:

```
$ cd ../step-explain-editor
$ npm install
$ npm run build
```
then just open index.html
