// Device definition
class Device {
    constructor(address) {
        this.address = address;
    }

    pinMode(pin, state) {
        $.ajaxq('queue', {
            url: 'http://' + this.address + '/mode/' + pin + state,
            crossDomain: true
        }).done((data) => {
            //console.log('pinMode', data);
        });
    };

    digitalWrite(pin, state) {
        $.ajaxq('queue', {
            url: 'http://' + this.address + '/digital/' + pin + '/' + state,
            crossDomain: true
        }).done((data) => {
            //console.log('digitalWrite', data);
        });
    };

    analogWrite(pin, state) {
        $.ajaxq('queue', {
            url: 'http://' + this.address + '/analog/' + pin + '/' + state,
            crossDomain: true
        }).done((data) => {
            //console.log(data);
        });
    };

    analogRead(pin, callback) {
        $.ajaxq('queue', {
            url: 'http://' + this.address + '/analog/' + pin,
            crossDomain: true
        }).done((data) => {
            callback(data);
        });
    };

    digitalRead(pin, callback) {
        $.ajaxq('queue', {
            url: 'http://' + this.address + '/digital/' + pin,
            crossDomain: true
        }).done((data) => {
            callback(data);
            //console.log(data);
        });
    };

    getVariable(variable, callback) {
        $.ajaxq('queue', {
            url: 'http://' + this.address + '/' + variable,
            crossDomain: true
        }).done((data) => {
            callback(data);
        });
    };

    callFunction(called_function, parameters, callback) {
        console.log('call works');
        $.ajaxq('queue', {
            url: 'http://' + this.address + '/' + called_function + '?params=' + parameters,
            crossDomain: true
        }).done((data) => {
            if (callback != null) {
                callback(data);
            }
        });
    };
}
