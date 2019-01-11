<template>
    <div v-if="!server">
        <button
            class="btn btn-primary btn-sm"
            @click.prevent="selectTable('')"
        >Table</button>
        <button
            class="btn btn-primary btn-sm"
            @click.prevent="selectTable('table-striped')"
        >Table Striped</button>
        <button
            class="btn btn-primary btn-sm"
            @click.prevent="selectTable('table-hover')"
        >Table Hover</button>
        <ckeditor
            type="classic"
            v-model="value"
            :config="editorConfig"
            @input.passive="$emit('edit:content', $event)"
        ></ckeditor>
    </div>

</template>

<script>
export default {
    props: ["value"],
    data() {
        return {
            editor: "dd",
            server: true,
            editorConfig: {
                toolbar: [
                    "heading",
                    "|",
                    "bold",
                    "italic",
                    "|",
                    "bulletedList",
                    "numberedList",
                    "|",
                    "link",
                    "insertTable"
                ]
            }
        };
    },
    mounted(dd) {
        this.server = false;
    },
    methods: {
        selectTable(type) {
            const elements = document.getElementsByClassName(
                "table ck-widget ck-widget_selectable"
            );
            if (elements.length > 0) {
                const table = elements[0].lastChild;
                table.className = `table ${type}`;
            }
        }
    }
};
</script>

