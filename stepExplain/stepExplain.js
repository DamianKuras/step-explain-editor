import StepExplainEditing from './stepExplainEditing';
import StepExplainUI from './stepExplainUI';
import Plugin from '@ckeditor/ckeditor5-core/src/plugin';

export default class StepExplain extends Plugin {
    static get requires() {
        return [ StepExplainEditing, StepExplainUI ];
    }
}