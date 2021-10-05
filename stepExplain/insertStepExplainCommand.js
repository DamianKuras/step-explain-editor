
import Command from '@ckeditor/ckeditor5-core/src/command';

export default class InsertStepExplainCommand extends Command {
    execute() {
        this.editor.model.change( writer => {
            this.editor.model.insertContent( createStepExplain( writer ) );
        } );
    }

    refresh() {
        const model = this.editor.model;
        const selection = model.document.selection;
        const allowedIn = model.schema.findAllowedParent( selection.getFirstPosition(), 'stepExplain' );

        this.isEnabled = allowedIn !== null;
    }
}

function createStepExplain( writer ) {
    const stepExplain = writer.createElement('stepExplain');
    const stepExplainLeft= writer.createElement('stepExplainLeft');
    const stepExplainRight= writer.createElement('stepExplainRight');

    writer.append(stepExplainLeft,stepExplain);
    writer.append(stepExplainRight,stepExplain);

    // There must be at least one paragraph for the description to be editable.
    // See https://github.com/ckeditor/ckeditor5/issues/1464.
    writer.appendElement('paragraph',stepExplainLeft);
    writer.appendElement('paragraph',stepExplainRight);
    return stepExplain;
}
