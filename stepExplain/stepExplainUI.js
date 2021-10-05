
import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview';
import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import stepExplainIcon from './theme/icons/stepExplainIcon.min.svg';
export default class StepExplainUI extends Plugin {
    init() {

        const editor = this.editor;
        const t = editor.t;
        editor.ui.componentFactory.add( 'stepExplain', locale => {
            const command = editor.commands.get( 'insertStepExplain' );
            const buttonView = new ButtonView( locale );
            buttonView.set( {
                label: t( 'Step Explain' ),
                icon: stepExplainIcon,
                withText: false,
                tooltip: true
            } );
            buttonView.bind( 'isOn', 'isEnabled' ).to( command, 'value', 'isEnabled' );
            this.listenTo( buttonView, 'execute', () => editor.execute( 'insertStepExplain' ) );

            return buttonView;
        } );
    }
}
