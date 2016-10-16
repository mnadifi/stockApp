/*===============================================================/
/ This "stockitems" component creates the stock (items array)    /
/ to populate the item's table.                                  /
/===============================================================*/

import React , { PropTypes }  from 'react';
import ReactDOM, { render }   from 'react-dom';
import ItemsList              from './itemslist';

export default React.createClass({
    removeItemFnc: function(item){
      this.props.onItemRemove(item);
    },
    render: function() {
      let items = [],
          i = 1,
          self = this;

      /* I loop through the items list and insert them into the "items" array */
      this.props.itemsArray.forEach(function(item, i) {
        items.push(<ItemsList item={item} onItemRemove={self.removeItemFnc} key={`${item}-${i}`} /> );
        i++;
      });

      return ( 
        <div>
          <table className="table-fill">
            <thead>
              <tr>
                <th className="text-left">Name</th>
                <th className="text-left">Description</th>
                <th className="text-left">Price</th>
                <th className="text-left">Available Date</th>
                <th className="text-left">Price</th>
                <th className="text-left">Remove</th>
              </tr>
            </thead>
            <tbody className="table-hover">{items}</tbody>
          </table>
        </div>
        );
    }
  });