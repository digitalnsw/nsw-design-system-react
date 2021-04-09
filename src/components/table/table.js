import React from 'react';
import PropTypes from 'prop-types';
import nextId from 'react-id-generator';

/**
 * The table component
 *
 * @param {string}   caption            - The description or summary of the table.
 * @param {Object[]} headers            - The column headings
 * @param {Object[]} data               - The table data in the body
 * @param {bool}     striped            - A solid border around the table
 * @param {bool}     bordered           - Colourise every other table row
 * @param {bool}     captionTop         - Position the caption on top
 * @param {string}   className          - An additional class, optional
 * @param {bool}     firstCellIsHeader  - If first cell is a header cell or not
 * @param {object}   attributeOptions   - Default HTML attributes
 */
const Table = ({
  caption, headers, data, striped,
  bordered, captionTop, className,
  firstCellIsHeader, ...attributeOptions
}) => (
  <table className={`nsw-table ${striped ? 'nsw-table--striped ' : ' '} ${bordered ? 'nsw-table--bordered ' : ' '} ${captionTop ? 'nsw-table--caption-top ' : ' '} ${className}`} {...attributeOptions}>
    {caption && <TableCaption tableCaption={caption} />}
    <TableHead>
      <TableRow>
        {headers.map((header, index) => (
          <TableHeader
            title={header.title}
            key={`tableHeader-${nextId()}`}
            width={header.width}
          />
        ))}
      </TableRow>
    </TableHead>
    <TableBody>
      { data.map((row, rowIndex) => (
        <TableRow key={`tableRow-${nextId()}`}>
          {
                            headers.map((header, columnIndex) => {
                              // check to render first cell in rows as a header or not
                              if (columnIndex === 0 && firstCellIsHeader === true) {
                                return (<TableHeader key={`tableHeader-${nextId()}`} scope="row" title={row[header.key] ? row[header.key] : ''} />);
                              }
                              return (
                                <TableCell
                                  key={`tableCell-${nextId()}`}
                                  data={row[header.key] ? row[header.key] : ''}
                                  type={header.type}
                                  render={
                                    header.render ? header.render(row[header.key], row) : null
                                  }
                                />
                              );
                            })
                        }
        </TableRow>
      ))}
    </TableBody>
  </table>
);

Table.propTypes = {
  caption: PropTypes.string,
  headers: PropTypes.arrayOf(Object).isRequired,
  data: PropTypes.arrayOf(Object).isRequired,
  striped: PropTypes.bool,
  bordered: PropTypes.bool,
  captionTop: PropTypes.bool,
  className: PropTypes.string,
  firstCellIsHeader: PropTypes.bool,
};

Table.defaultProps = {
  striped: false,
  className: '',
};

/**
 * The table body component
 * @param  {string}  className        - An additional class, optional
 * @param {object} attributeOptions - Default HTML attributes
 *
 */
export const TableBody = ({ className, ...attributeOptions }) => (
  <tbody className={className} {...attributeOptions} />
);

TableBody.propTypes = {
  className: PropTypes.string,
};

TableBody.defaultProps = {
  className: '',
};

/**
 * The table head component
 * @param {string} className        - An additional class, optional
 * @param {object} attributeOptions - Default HTML attributes
 *
 */
export const TableHead = ({ children, className, ...attributeOptions }) => (
  <thead className={className} {...attributeOptions}>
    {children}
  </thead>
);

TableHead.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

TableHead.defaultProps = {
  className: '',
};

/**
 * The table header component
 *
 * @param {string} title            - The title of table header/column
 * @param {string} type             - Type of the header, can be either text or numeric
 *                                    for left or right alignment respectively.
 * @param {string} width            - Width of the header/column in percentage
 * @param {string} scope            - Scope of the header, can be 'row' or 'col'
 * @param {string} className        - An additional class, optional
 * @param {object} attributeOptions - Default HTML attributes
 */
export const TableHeader = ({
  title, width, scope, className, ...attributeOptions
}) => (
  <th
    className={className}
    width={`${width}%`}
    scope={scope}
    {...attributeOptions}
  >
    { title }
  </th>
);

TableHeader.propTypes = {
  title: PropTypes.string.isRequired,
  width: PropTypes.number,
  className: PropTypes.string,
  scope: PropTypes.string,
};

TableHeader.defaultProps = {
  className: '',
  scope: 'col',
};

/**
 * The data/cell component
 * @param {string} data       - The cell data
 * @param {string} type       - Type of the data, can be either text or numeric for left or
 *                              right alignment respectively.
 * @param {string} className  - An additional class, optional
 * @param {object} render     - The function for customised rendering on all cells in this column
 * @param {object} attributeOptions - Default HTML attributes
 *
 */
export const TableCell = ({
  data, className, ...attributeOptions
}) => (
  <td
    className={className}
    {...attributeOptions}
  >
    { data }
  </td>
);

TableCell.propTypes = {
  data: PropTypes.string,
  className: PropTypes.string,
};

TableCell.defaultProps = {
  className: '',
};

/**
 * The table row component
 * @param {string} className        - An additional class, optional
 * @param {object} attributeOptions - Default HTML attributes
 */
export const TableRow = ({ children, className, ...attributeOptions }) => (
  <tr className={className} {...attributeOptions}>
    {children}
  </tr>
);

TableRow.defaultProps = {
  className: '',
};

TableRow.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

/**
 * The table caption component
 * @param {string} tableCaption     - The title of the table caption
 * @param {string} captionId        - The id of the caption
 * @param {string} className        - An additional class, optional
 * @param {object} attributeOptions - Default HTML attributes
 *
 */
export const TableCaption = ({
  captionId, tableCaption, className, ...attributeOptions
}) => (
  <caption className={className} {...attributeOptions}>
    { tableCaption }
  </caption>
);

TableCaption.propTypes = {
  tableCaption: PropTypes.string,
  captionId: PropTypes.string,
  className: PropTypes.string,
};

TableCaption.defaultProps = {
  className: '',
};

/**
 * Table wrapper for responsive tables with horizontal scrolling on smaller devices
 * @param {node} children
 */
export const TableResponsiveWrapper = ({ children }) => (
  <div className="nsw-table-responsive" role="region">
    {children}
  </div>
);

TableResponsiveWrapper.propTypes = {
  children: PropTypes.node,
};

export default Table;
