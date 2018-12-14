import Vue from 'vue';
export default function flush({store, app}) {    
    const flush = (message) => store.dispatch('logs/log',{type: 'info', message});
    const flushWarrning = (message) => store.dispatch('logs/log',{type: 'warrning', message});
    const flushError = (message) => store.dispatch('logs/log',{type: 'danger', message});

    // app = server side (content.app)
    app.flush = flush;
    app.flushError = flushError;
    app.flushWarrning = flushWarrning;

    // client side in components
    Vue.prototype.flush = flush;
    Vue.prototype.flushError = flushError;
    Vue.prototype.flushWarrning = flushWarrning;
}
