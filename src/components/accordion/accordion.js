
/***************************************************************************************************************************************************************
 *
 * Accordion function
 *
 * A component to allow users to show or hide page elements.
 *
 **************************************************************************************************************************************************************/

import React from 'react';
import PropTypes from 'prop-types';
import { initSite } from "nsw-design-system/src/main.js";


// The following line will be replaced automatically with generic imports for the ES5 pipeline.
// You can safely ignore this bit if you use this module with pancake
//
// [replace-imports]


let IDstart = 0;

export class Accordion extends React.PureComponent {
    /**
     * Constructor
     * Create state and iterate over a unique ID
     *
     * @param  {object}  props - The props object
     */
    constructor(props) {
        super(props);

        const {contents, header, className = '', children, ...attributeOptions} = props;

        this.className = className;
        this.attributeOptions = attributeOptions;

        // Generate a unique ID and our css class
        IDstart++;

        this.ID = `accordion${IDstart}`;
    }


    componentDidMount() {
        initSite();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        initSite();
    }

    render() {
        return (
            <div className={`nsw-accordion js-accordion ${this.className}`} {...this.attributeOptions}>
                { this.props.contents.map(
                    (content) => (

                        <div>
                            <h2 className={`nsw-accordion__title`}>
                                {content.header}
                            </h2>
                            <div className="nsw-accordion__content">
                                <div className="nsw-wysiwyg-content">
                                    {content.body}
                                </div>
                            </div>
                        </div>
                    )
                )
                }
            </div>
        );
    }
};

Accordion.propTypes = {
    /**
	   * Object of accordion contents
	  */
    contents: PropTypes.arrayOf(
  		PropTypes.shape({
  			header: PropTypes.string,
  			body: PropTypes.string,
  		})
  	).isRequired,
    /**
  	 * Additional class name
  	*/
    className: PropTypes.string,
};

export default Accordion;
