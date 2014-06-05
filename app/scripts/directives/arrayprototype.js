'use strict';

Array.prototype.removeItem = function (item) {
    var deleted;
    var index = 0;
    while ((index = this.indexOf(item, index)) != -1) {
        deleted = this.splice(index, 1);
    }
    if (deleted) {
        return deleted[0];
    }
};