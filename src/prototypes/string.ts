
String.prototype.logString = function(this:string) {
    var string = this.toString();
    const array = [...arguments];
    array.map((item,index) => {
        string = string.replace(`{${index}}`, item)
    })
    return string;
}