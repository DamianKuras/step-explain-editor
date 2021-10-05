// app.js

import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import List from '@ckeditor/ckeditor5-list/src/list';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline';
import Strikethrough from '@ckeditor/ckeditor5-basic-styles/src/strikethrough';
import Subscript from '@ckeditor/ckeditor5-basic-styles/src/subscript';
import Superscript from '@ckeditor/ckeditor5-basic-styles/src/superscript';
import Image from '@ckeditor/ckeditor5-image/src/image';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar';
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle';
import ImageResize from '@ckeditor/ckeditor5-image/src/imageresize';
import { AutoImage } from '@ckeditor/ckeditor5-image';
import { Link } from '@ckeditor/ckeditor5-link';
import { AutoLink } from '@ckeditor/ckeditor5-link'
import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment';
import StepExplain from './stepExplain/stepExplain';
import TextTransformation from '@ckeditor/ckeditor5-typing/src/texttransformation';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat';
import CodeBlock from '@ckeditor/ckeditor5-code-block/src/codeblock';
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote';
import FindAndReplace from '@ckeditor/ckeditor5-find-and-replace/src/findandreplace';
import Table from '@ckeditor/ckeditor5-table/src/table';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar';
import Highlight from '@ckeditor/ckeditor5-highlight/src/highlight';
import Mathematics from 'ckeditor5-math/src/math';
import SourceEditing from '@ckeditor/ckeditor5-source-editing/src/sourceediting';
ClassicEditor
    .create(document.querySelector('#editor'), {
        plugins: [Alignment,
            Highlight,
            TextTransformation,
            Table,
            TableToolbar,
            BlockQuote,
            FindAndReplace,
            CodeBlock,
            Autoformat,
            Essentials,
            Paragraph,
            Heading,
            List,
            Bold,
            Italic,
            Underline,
            Strikethrough,
            Subscript,
            Superscript,
            StepExplain,
            Image,
            ImageToolbar,
            ImageCaption,
            ImageStyle,
            ImageResize,
            AutoImage,
            Link,
            Mathematics,
            AutoLink,
            SourceEditing],
        toolbar: ['heading', '|',
            'alignment:left', 'alignment:right', 'alignment:center', 'alignment:justify', '|',
            'blockQuote', '|',
            'insertTable', '|',
            'bold', 'italic', 'underline', 'strikethrough', 'subscript', 'superscript', '|',
            'codeBlock', '|',
            'link', 'numberedList', 'bulletedList', '|',
            'stepExplain', '|',
            'math', '|',
            'findAndReplace', 'highlight', '|',
            'undo', 'redo','|',
            'sourceEditing',],
        image: {
            toolbar: ['imageStyle:block', 'imageStyle:side',
                '|',
                'toggleImageCaption',
                'imageTextAlternative',
                '|',
                'imageResize']
        },
        table: {
            contentToolbar: ['tableColumn', 'tableRow', 'mergeTableCells']
        },
        math: {
            engine: 'mathjax', // or katex or function. E.g. (equation, element, display) => { ... }
            lazyLoad: undefined, // async () => { ... }, called once before rendering first equation if engine doesn't exist. After resolving promise, plugin renders equations.
            outputType: 'span', // or span
            forceOutputType: false, // forces output to use outputType
            enablePreview: true, // Enable preview view
            previewClassName: [], // Class names to add to previews
            popupClassName: [] // Class names to add to math popup balloon
        },
        highlight: {
            options: [
                {
                    model: 'greenMarker',
                    class: 'marker-green',
                    title: 'Green marker',
                    color: 'var(--ck-highlight-marker-green)',
                    type: 'marker'
                },
                {
                    model: 'redMarker',
                    class: 'marker-red',
                    title: 'Red marker',
                    color: 'var(--ck-highlight-marker-red)',
                    type: 'marker'
                }
            ]
        },
        link: {
            decorators: {
                openInNewTab: {
                    mode: 'manual',
                    label: 'Open in a new tab',
                    attributes: {
                        target: '_blank',
                        rel: 'noopener noreferrer'
                    }
                }
            },
            defaultProtocol: 'http://'
        },
        codeBlock: {
            languages: [
                { language: 'plaintext', label: 'Plain text', class: '' },
                { language: 'C++', label: 'C++', class: 'language-cpp' },
                { language: 'C#', label: 'C#', class: 'language-csharp' },
                { language: 'javascript', label: 'javascript', class: 'language-javascript' },
                { language: 'ASP.NET (C#)', label: 'ASP.NET (C#)', class: 'language-aspnet' },
                { language: 'Bash', label: 'Bash', class: 'language-bash' },
                { language: 'Django', label: 'Django', class: 'language-django' },
                { language: 'Go', label: 'Go', class: 'language-go' },
                { language: 'GraphQL', label: 'GraphQL', class: 'language-graphql' },
                { language: 'Haskell', label: 'Haskell', class: 'language-haskell' },
                { language: 'Java', label: 'Java', class: 'language-java' },
                { language: 'JSON', label: 'Java', class: 'language-json' },
                { language: 'Kotlin', label: 'Kotlin', class: 'language-kotlin' },
                { language: 'Lisp', label: 'Lisp', class: 'language-lisp' },
                { language: 'Markdown', label: 'Markdown', class: 'language-markdown' },
                { language: 'Objective-C', label: 'Objective-C', class: 'language-objectivec' },
                { language: 'Perl', label: 'Perl', class: 'language-perl' },
                { language: 'PHP', label: 'PHP', class: 'language-php' },
                { language: 'PL/SQL', label: 'PL/SQL', class: 'language-plsql' },
                { language: 'Python', label: 'Python', class: 'language-python' },
                { language: 'R', label: 'R', class: 'language-r' },
                { language: 'SQL', label: 'SQL', class: 'language-sql' },
                { language: 'Ruby', label: 'Ruby', class: 'language-ruby' },
                { language: 'Rust', label: 'Rust', class: 'language-rust' },
                { language: 'TypeScript', label: 'TypeScript', class: 'language-typescript' },
                { language: 'WebAssembly', label: 'WebAssembly', class: 'language-wasm' },
                { language: 'NASM', label: 'NASM', class: 'language-nasm' },
            ]
        },
        typing: {
            transformations: {
                remove: [
                    // Do not use the transformations from the
                    // 'symbols' and 'quotes' groups.
                    'symbols',
                    'quotes',

                    // As well as the following transformations.
                    'arrowLeft',
                    'arrowRight'
                ],

                extra: [
                    // Add some custom transformations – e.g. for emojis.
                    { from: ':)', to: '🙂' },
                    { from: ':+1:', to: '👍' },
                    { from: ':tada:', to: '🎉' },

                    // You can also define patterns using regular expressions.
                    // Note: The pattern must end with `$` and all its fragments must be wrapped
                    // with capturing groups.
                    // The following rule replaces ` "foo"` with ` «foo»`.
                    {
                        from: /(^|\s)(")([^"]*)(")$/,
                        to: [null, '«', null, '»']
                    },

                    // Finally, you can define `to` as a callback.
                    // This (naive) rule will auto-capitalize the first word after a period, question mark, or an exclamation mark.
                    {
                        from: /([.?!] )([a-z])$/,
                        to: matches => [null, matches[1].toUpperCase()]
                    }
                ],
            }
        }
    })
    .then(editor => {
        window.editor = editor;
    })
    .catch(error => {
        console.error(error.stack);
    });
