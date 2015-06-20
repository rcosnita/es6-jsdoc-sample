/**
 * This class provides a simple showcase for documenting es6 classes.
 * 
 * @public
 * @class
 * @memberof Tests/ES6
 */
class Es6FirstClass {
    /**
     * @consturctor
     * @param  {String} firstName This is person first name.
     * @param  {String} lastName  This is person last name.
     */
    constructor(firstName, lastName) {
        this._firstName = firstName;
        this._lastName = lastName;
    }

    /**
     * This method logs the given message to the browser console.
     *
     * @public
     * @method
     * @param  {String} msg The message we want to log.
     */
    logMessage(msg) {
        console.log(msg);
    }
}