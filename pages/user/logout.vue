<script>
export default {
    async asyncData({store, redirect, app}){
        store.dispatch('user/clear');
        app.$flush('Byl jste úspěšně odhlášen');
        redirect(200, '/user/login');
    }
}
</script>
