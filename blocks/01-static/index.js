/**
 * Block dependencies
 */
import icon from './icon';
import './style.scss';
import './editor.scss';

/**
 * Internal block libraries
 */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

/**
 * Register block
 */
export default registerBlockType(
    'jsforwpblocks/static',
    {
        title: __( 'Example - Static Block', 'jsforwpblocks' ),
        description: __( 'Demonstration of how to make a static call to action block.', 'jsforwpblocks' ),
        category: 'common',
        icon,
        keywords: [
            __( 'Banner', 'jsforwpblocks' ),
            __( 'CTA', 'jsforwpblocks' ),
            __( 'Shout Out', 'jsforwpblocks' ),
        ],       
        edit: props => {
          const { className, isSelected } = props;
          return (
            <div className={ className }>
              <h1>{ __( 'Static Call to Action I am chhanging this again', 'jsforwpblocks' ) }</h1>
              <h2>{ __( 'This is really important!', 'jsforwpblocks' ) }</h2>
              {
                isSelected && (
                  <p className="sorry warning">{ __( '✋ Sorry! You cannot edit this block! ✋', 'jsforwpblocks' ) }</p>
                )
              }
              {
                isSelected && (
                  <p className='sorry warning'>{ __( 'Yeah baby!', 'jsforwpblocks' )}</p>
                )
              }
            </div>
          );
        },
        save: props => {
          return (
            <div>
              <h1>{ __( 'Call to Action', 'jsforwpblocks' ) }</h1>
              <h2>{ __( 'This is really important!', 'jsforwpblocks' ) }</h2>
            </div>
          );
        },
    },
);
