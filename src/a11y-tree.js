import { A11yNode } from "./a11y-node.js";
export class A11yTree {

	constructor( app ) {
this._app = app;
	}

	children = function() {
let children = [];

		for( let i=0;i<this._app.getChildCount();i++ )
		{
children.push( new A11yNode( this._app.getChildAtIndex(i) ) );
		}

		return children;
	}

name = function() {
return this._app.getName();
}

}
