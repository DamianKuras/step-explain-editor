
import Command from '@ckeditor/ckeditor5-core/src/command';

export default class InsertStepExplainCommand extends Command {
    execute() {
        this.editor.model.change( writer => {
            // Insert <simpleBox>*</simpleBox> at the current selection position
            // in a way that will result in creating a valid model structure.
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
    /*const simpleBox = writer.createElement( 'simpleBox' );
    const simpleBoxTitle = writer.createElement( 'simpleBoxTitle' );
    const simpleBoxDescription = writer.createElement( 'simpleBoxDescription' );

    writer.append( simpleBoxTitle, simpleBox );
    writer.append( simpleBoxDescription, simpleBox );*/
    writer.append(stepExplainLeft,stepExplain);
    writer.append(stepExplainRight,stepExplain);

    writer.appendElement('paragraph',stepExplainLeft);
    writer.appendElement('paragraph',stepExplainRight);

    // There must be at least one paragraph for the description to be editable.
    // See https://github.com/ckeditor/ckeditor5/issues/1464.
    //writer.appendElement( 'paragraph', simpleBoxDescription );

    return stepExplain;
}