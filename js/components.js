/**
 * Created by basst on 14.08.2016.
 */
function Component() {
    this.elem = null;
    this.init = function(sSelector){
        this.elem = $(sSelector);
    };
    this.find = function(sSelector) {
        return this.elem.find(sSelector);
    };
}
