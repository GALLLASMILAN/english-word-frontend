<template>
    <div>
        <div
            v-for="(log, index) in logs"
            :key="index"
            :class="createAlertClass(log.type)"
        >
            <button
                type="button"
                class="close"
                data-dismiss="alert"
            >&times;</button>
            <strong>{{log.lastUpdate.getHours()}}:{{log.lastUpdate.getMinutes()}}</strong>
            {{log.data}}
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex";
import { setTimeout } from "timers";
export default {
    data: function() {
        return {
            logsToDel: []
        };
    },
    computed: {
        ...mapState({
            logs: state => state.logs
        })
    },
    methods: {
        createAlertClass(type) {
            return `alert alert-${type} alert-dismissible`;
        },
        del(log) {
            this.$store.dispatch('logs/delete', log);
        }
    },
    watch: {
        logs(old) {
            old.filter(log => this.logsToDel.indexOf(log) === -1).map(log => {
                this.logsToDel.push(log);
                setTimeout(() => this.del(log), process.env.FLUSH_DURATION)
            });
        }
    },
    mounted() {
        this.logsToDel.push(...this.logs);
        this.logsToDel.map(log => setTimeout(() => this.del(log), process.env.FLUSH_DURATION));
    }
};
</script>