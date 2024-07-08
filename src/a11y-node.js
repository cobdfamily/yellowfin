export class A11yNode {

	constructor( _object )
	{
this._object = _object;
	}

childAtIndex = function( index ) {
return new A11yNode( this._object.getChildAtIndex( index ) );
}

description = function() {
return 	this._object.getDescription();
}

hint = function() {
return this._object.getHelpText();
}

id = function() {
return this._object.getAccessibleId();
}

indexInParent = function() {
return this._object.getIndexInParent();
}

lang = function() {
return this._object.getLocale();
}

name = function() {
	return this._object.getName();
}

role = function() {
	return this._object.getRoleName();
	}

parent = function() {
return new A11yNode( this._object.getParent() );
}

children = function() {

		let children = [];

		for( let i=0;i<this._object.getChildCount();i++ )
		{
children.push( new A11yNode( this._object.getChildAtIndex(i) ) );
		}

		return children;
	}

}
