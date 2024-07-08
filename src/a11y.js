import gi from "node-gtk";
import { A11yTree } from "./a11y-tree.js";

export class A11y {

constructor() {

	this._Atspi = gi.require( 'Atspi' );

this._Atspi.init();


	this._listener = this._Atspi.EventListener.new( function( event ) {
console.log( event.source.getRoleName(), event.source.getApplication().getName() );

	} );

this._listener.register("object:state-changed:focused" );

this.states();


new Promise( ( resolve, reject ) => {
this._Atspi.eventMain();
	resolve();
} ).then( () => { } );
}

getDesktop1 = function() {
	return this._Atspi.getDesktop(0);
}

getApps = function() {
let apps = [];
let desktop = this._Atspi.getDesktop(0);
	for( let i=0;i<desktop.getChildCount();i++ )
{
apps.push( new A11yTree( desktop.getChildAtIndex(i) ));


}
return apps;
}

states = function() {

	let states = Object.keys( this._Atspi.StateType );

	for( let index=0;index<states.length;index++ )
	{
states[index] = states[index].toLowerCase();
	}

	this._states = states;
}

}
