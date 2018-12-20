export default function flush({
    store
}, inject) {
    const flush = (message) => store.dispatch('logs/log', {
        type: 'info',
        message
    });
    const flushWarrning = (message) => store.dispatch('logs/log', {
        type: 'warrning',
        message
    });
    const flushError = (message) => store.dispatch('logs/log', {
        type: 'danger',
        message
    });

    inject('flush', flush);
    inject('flushWarrning', flushWarrning);
    inject('flushError', flushError);
}
