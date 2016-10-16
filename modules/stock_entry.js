import React , { PropTypes }  from 'react';
import ReactDOM, { render } 	from 'react-dom';
import StockApp               from './stockapp';

const itemsInfo = [
        {name:"Coffee",desc:"Starbucks Pack",price:10.50,date:"10-12-2016",tax:"Yes"},
        {name:"Bread",desc:"Sliced Bread",price:3.49,date:"10-22-2016",tax:"Yes"},
        {name:"Sugar",desc:"Cubes",price:3.00,date:"10-12-2016",tax:"Yes"},
        {name:"Muffin",desc:"Chocolate Muffin",price:3.49,date:"10-22-2016",tax:"Yes"}
      ];

ReactDOM.render( 
        <StockApp items={itemsInfo}/>,
        document.getElementById( "stockApp" )
      );