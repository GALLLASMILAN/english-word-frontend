export default function flush({
    store
}, inject) {
    const flush = (message) => store.dispatch('logs/log', {
        type: 'info',
        message
    });
    const flushWarning = (message) => store.dispatch('logs/log', {
        type: 'warning',
        message
    });
    const flushError = (message) => store.dispatch('logs/log', {
        type: 'danger',
        message
    });

    inject('flush', flush);
    inject('flushWarning', flushWarning);
    inject('flushError', flushError);
}
