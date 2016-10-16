/*==================================================================/
/ This "stockapp" component puts together all the other components, /
/ sets up the different states and generates the items' table       /
/==================================================================*/

import React , { PropTypes }  from 'react';
import ReactDOM, { render }   from 'react-dom';
import StockItems             from './stockitems';
import ItemsList              from './itemslist';
import NewItem                from './newitem';

export default React.createClass({
  displayName: 'StockApp',
  propTypes: {
    newitem: PropTypes.object
  },
  getInitialState: function() {
    return {stockitems:this.props.items};
  },
  /* Set the ReactJS life cycle states in case we need them in the future */
  getDefaultProps: function() {
    console.log('DefaultProps');
  },
  componentWillMount: function() {
    console.log('componentWillMount');
  },
  componentDidMount: function() {
    console.log('componentDidMount');
  },
  componentWillUpdate: function() {
    console.log('componentWillUpdate');
  },
  componentDidUpdate: function() {
    console.log('componentDidUpdate');
  },
  componentWillUnmount: function() {
    console.log('componentWillUnmount');
  },
  newItemSubmitFnc: function(newitem) {
    this.setState( {stockitems: this.state.stockitems.concat([newitem])} );
  },
  removeItemFnc: function(item) {
    let index = -1,
        itemsNumber = this.state.stockitems.length;

    /* I loop through the items array and remove the selected one (by name)*/
    for( var i = 0; i < itemsNumber; i++ ) {
      if( this.state.stockitems[i].name === item.name ) {
        index = i;
        break;
      }
    }
    this.state.stockitems.splice( index, 1 );
    this.setState( {stockitems: this.state.stockitems} );
  },
  render: function() {
    return (
        <div>
          <div className="table-title">
            <h3>Add New Item</h3>
          </div>
          <NewItem onItemSubmit={this.newItemSubmitFnc}/>
          <div className="table-title">
            <h3>Stock Items</h3>
          </div>
          <div id="stockTable">
              <StockItems itemsArray={this.state.stockitems}  onItemRemove={this.removeItemFnc}/>
          </div>
        </div>
    );
  }
});