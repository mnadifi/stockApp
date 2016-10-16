/*===================================================/
/ This "itemslist" component populates the table and /
/ handles the delitions.                             /
/===================================================*/

import React , { PropTypes }  from 'react';
import ReactDOM, { render }   from 'react-dom';

export default React.createClass({
    removeItemFnc: function() {
      this.props.onItemRemove(this.props.item);
      return false;
    },
    render: function() {
      return (
        <tr>
          <td className="text-left">{this.props.item.name}</td>
          <td className="text-left">{this.props.item.desc}</td>
          <td className="text-left" className="text-left" className="text-left" className="text-left">{this.props.item.price}</td>
          <td className="text-left" className="text-left" className="text-left">{this.props.item.date}</td>
          <td className="text-left" className="text-left">{this.props.item.tax}</td>
          <td className="text-left"><input type="button"  className="remove-btn" value="Remove" onClick={this.removeItemFnc}/></td>
        </tr>
        );
    }
  });