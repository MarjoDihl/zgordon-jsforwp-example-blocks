/**
 * Block dependencies
 */
import icon from './icon';
import './style.scss';

/**
 * Internal block libraries
 */
const { __ } = wp.i18n;
const { registerBlockType, RichText } = wp.blocks;

/**
 * Register block
 */
export default registerBlockType(
    'jsforwpblocks/richtext',
    {
        title: __( 'Example - RichText', 'jsforwpblocks' ),
        description: __( 'How to use the RichText component for building your own editable blocks.', 'jsforwpblocks' ),
        category: 'common',
        icon: icon,
        keywords: [
            __( 'Banner', 'jsforwpblocks' ),
            __( 'Call to Action', 'jsforwpblocks' ),
            __( 'Message', 'jsforwpblocks' ),
        ],
        attributes: {
            turdBucket: {
                type: 'array', // return the child nodes of .message-body in an array
                source: 'children', // keep track of changes in the child of .message-body
                selector: '.message-body', // has to be the same as the class in the save function. This class doesn't show up in the editor. It does show up in the front end 
            }
        },
        edit: props => {
            const { attributes: { turdBucket}, className, setAttributes } = props;
            const onChangeMessage = turdBucket => { setAttributes( { turdBucket} ) };
            return (
                <div className={ className }>
                    <h2>{ __( 'TESTING Call to Action', 'jsforwpblocks' ) }</h2>
                    <RichText
                        tagName="div"
                        multiline="p"
                        placeholder={ __( 'Add your custom message', 'jsforwpblocks' ) }
                  		onChange={ onChangeMessage }
                  		value={ turdBucket}
              		/>
                </div>
            );
        },
        save: props => {
            const { attributes: { turdBucket} } = props;
            return (
                <div>
                    <h2>{ __( 'Call to Action', 'jsforwpblocks' ) }</h2>
                    <div class="message-body">
                        { turdBucket}
                    </div>
                </div>
                
            );
        },
    },
);

/*========From post_content==================

<!-- wp:jsforwpblocks/richtext -->
<div class="wp-block-jsforwpblocks-richtext">
	<h2>Call to Action</h2>
	<div class="message-body">
		<li>This is some rich text baby!</li>
	</div>
</div>
<!-- /wp:jsforwpblocks/richtext -->
*/

