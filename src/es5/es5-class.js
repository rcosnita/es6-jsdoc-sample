/**
 * This class is just a simple es5 test compatibility showcase with jsdoc.
 * 
 * @class
 * @public
 * @constructor
 * @memberof Tests/ES5
 */
function Es5FirstClass(firstName, lastName) {
    this._firstName = firstName;
    this._lastName = lastName;
};

/**
 * This method concatenates firstName and lastName values received in constructor and returns the fullname.
 * 
 * @public
 * @method
 * @return {String} Returns the fullname.
 */
Es5FirstClass.prototype.getFullName = function() {
    return this._firstName + " " + this._lastName;
}