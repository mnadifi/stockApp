/*===============================================================/
/ This "newitem" component handles the app's input,              /
/ does the form validations and creates an object with the data. /
/===============================================================*/

import $                      from 'jquery';
import React , { PropTypes }  from 'react';
import ReactDOM, { render }   from 'react-dom';

export default React.createClass({
    submitFnc: function(e) {
      e.preventDefault();   //I preventDefault this event in case it renders twice
      let name = ReactDOM.findDOMNode(this.refs.name).value,
          desc = ReactDOM.findDOMNode(this.refs.desc).value,
          priceInput = ReactDOM.findDOMNode(this.refs.price),
          price = ReactDOM.findDOMNode(this.refs.price).value,
          date = this.dateFormat(ReactDOM.findDOMNode(this.refs.date).value),
          tax = ReactDOM.findDOMNode(this.refs.tax).value,
          newitem = {
              name: name,
              desc: desc,
              price: price,
              date: date,
              tax: tax
          };

      /* Price input validation, it must be a number */
      if(isNaN(price)){
        alert("The price must be numeric.");
        $('#price').val('').focus();  //I empty the Price input and focus the cursor in it
        $('#price').addClass('error-border');   //I highlight the Price input box
        return false;   //If the Price is not valide then I do not continue
      } else {
        this.props.onItemSubmit(newitem); //I submit the new item's data
        $('#price').removeClass('error-border');  //I remove the highlight from the box
        
        /* I empty all the fields once submitted */
        ReactDOM.findDOMNode(this.refs.name).value = '';
        ReactDOM.findDOMNode(this.refs.desc).value = '';
        ReactDOM.findDOMNode(this.refs.price).value = '';
        ReactDOM.findDOMNode(this.refs.date).value = '';
        ReactDOM.findDOMNode(this.refs.tax).value = '';
      }
    },
    dateFormat: function(date) { //I format the date to the MM-DD-YYYY format
      let theDate = date.match(/\d+/g),
          yyyy = theDate[0],
          mm = theDate[1],
          dd = theDate[2],
          newDate = mm+'-'+dd+'-'+yyyy;

      return newDate;
    },
    /* I create the data entry form */
    render: function() {
      return ( 
        <div id="newItem">
          <form onSubmit={this.submitFnc}>
            <div className="div-new-item">
              <div className="div-new-item-row">
                <div className="div-new-item-coll">
                  <label>Item Name <span className="star">*</span>: </label>
                </div>
                <div className="div-new-item-colr">
                  <input id="name" type="text" ref="name" className="input-css" required/>
                </div>
              </div>
              <div className="div-new-item-row">
                <div className="div-new-item-coll">
                  <label>Item Description: </label>
                </div>
                <div className="div-new-item-colr">
                  <input id="desc" type="text" ref="desc" className="input-css" />
                </div>
              </div>
              <div className="div-new-item-row">
                <div className="div-new-item-coll">
                  <label className="required-input">Price <span className="star">*</span>: </label>
                </div>
                <div className="div-new-item-colr">
                  <input id="price" type="text" ref="price" className="input-css" required/>
                </div>
              </div>
              <div className="div-new-item-row">
                <div className="div-new-item-coll">
                  <label className="required-input">Available Date <span className="star">*</span>: </label>
                </div>
                <div className="div-new-item-colr">
                  <input id="date" type="date" className="required" ref="date" className="input-css" required/>
                </div>
              </div>
              <div className="div-new-item-row">
                <div className="div-new-item-coll">
                  <label>Taxable: </label>
                </div>
                <div className="div-new-item-colr">
                  <input id="tax" type="text" ref="tax" className="input-css"/>
                </div>
              </div>
              <div className="div-new-item-row">
                <input type="submit" className="submit-btn" value="Add Item"/>
              </div>
            </div>
          </form>
        </div>
        );
    }
  });