<script>
import * as acl from "../../lib/acl/acl.js";
export default {
    async asyncData({ store, redirect, app }) {
        store.dispatch("user/clear");
        app.$flush("Byl jste úspěšně odhlášen");
        const page = acl.getPageByName("user-login");
        const url = ('url' in page) ? page.url : '';
        redirect(200, url);
    }
};
</script>
