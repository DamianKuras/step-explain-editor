// simplebox/simpleboxediting.js

import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import { toWidget, toWidgetEditable } from '@ckeditor/ckeditor5-widget/src/utils';
import Widget from '@ckeditor/ckeditor5-widget/src/widget';

import InsertStepExplainCommand from './insertStepExplainCommand';   

export default class StepExplainEditing extends Plugin {
    static get requires() {                                                    // ADDED
        return [ Widget ];
    }
    init() {
        this._defineSchema();
        this._defineConverters();   
        this.editor.commands.add( 'insertStepExplain', new InsertStepExplainCommand( this.editor ) );                                           // ADDED
    }

    _defineSchema() {                                                         
        const schema = this.editor.model.schema;

        schema.register( 'stepExplain', {
            // Behaves like a self-contained object (e.g. an image).
            isObject: true,

            // Allow in places where other blocks are allowed (e.g. directly in the root).
            allowWhere: '$block'
        } );

        schema.register( 'stepExplainLeft', {
            // Cannot be split or left by the caret.
            isLimit: true,

            allowIn: 'stepExplain',

            // Allow content which is allowed in blocks (i.e. text with attributes).
            allowContentOf: '$root'
        } );

        schema.register( 'stepExplainRight', {
            // Cannot be split or left by the caret.
            isLimit: true,

            allowIn: 'stepExplain',

            // Allow content which is allowed in the root (e.g. paragraphs).
            allowContentOf: '$root'
        } );
        schema.addChildCheck( ( context, childDefinition ) => {
            if ( context.endsWith( 'stepExplainLeft' ) && childDefinition.name == 'stepExplain' ) {
                return false;
            }
            if ( context.endsWith( 'stepExplainRight' ) && childDefinition.name == 'stepExplain' ) {
                return false;
            }
        } );
    }
    _defineConverters() {                                                      
        const conversion = this.editor.conversion;

        // <simpleBox> converters
        conversion.for( 'upcast' ).elementToElement( {
            model: 'stepExplain',
            view: {
                name: 'div',
                classes: 'step-explain'
            }
        } );
        conversion.for( 'dataDowncast' ).elementToElement( {
            model: 'stepExplain',
            view: {
                name: 'div',
                classes: 'step-explain'
            }
        } );
        conversion.for( 'editingDowncast' ).elementToElement( {
            model: 'stepExplain',
            view: ( modelElement, { writer: viewWriter } ) => {
                const section = viewWriter.createContainerElement( 'div', { class: 'step-explain' } );

                return toWidget( section, viewWriter, { label: 'step explain widget' } );
            }
        } );

        // <simpleBoxTitle> converters
        conversion.for( 'upcast' ).elementToElement( {
            model: 'stepExplainLeft',
            view: {
                name: 'div',
                classes: 'step-explain-left'
            }
        } );
        conversion.for( 'dataDowncast' ).elementToElement( {
            model: 'stepExplainLeft',
            view: {
                name: 'div',
                classes: 'step-explain-left'
            }
        } );
        conversion.for( 'editingDowncast' ).elementToElement( {
            model: 'stepExplainLeft',
            view: ( modelElement, { writer: viewWriter } ) => {
                // Note: You use a more specialized createEditableElement() method here.
                const div = viewWriter.createEditableElement( 'div', { class: 'step-explain-left' } );

                return toWidgetEditable( div, viewWriter );
            }
        } );

        // <simpleBoxDescription> converters
        conversion.for( 'upcast' ).elementToElement( {
            model: 'stepExplainRight',
            view: {
                name: 'div',
                classes: 'step-explain-right'
            }
        } );
        conversion.for( 'dataDowncast' ).elementToElement( {
            model: 'stepExplainRight',
            view: {
                name: 'div',
                classes: 'step-explain-right'
            }
        } );
        conversion.for( 'editingDowncast' ).elementToElement( {
            model: 'stepExplainRight',
            view: ( modelElement, { writer: viewWriter } ) => {
                // Note: You use a more specialized createEditableElement() method here.
                const div = viewWriter.createEditableElement( 'div', { class: 'step-explain-right' } );
                return toWidgetEditable( div, viewWriter );
            }
        } );
    }
}