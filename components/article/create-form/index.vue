<template>
    <div class="container">
        <h2>Vytvoření nového článku</h2>
        <form action="" class="mt-5">
            <div class="row">
                <div class="col-xl-5 form-group offset-xl-1">
                    <label for="">Název článku</label>
                    <input type="text" class="form-control">
                </div>
                <div class="col-xl-5 form-group">
                    <label for="">Url článku</label>
                    <input type="text" class="form-control">
                </div>
            </div>
            <div class="row">
                <div class="col-xl-10 form-group offset-xl-1">
                    <label for="">Obsah článku</label>
                    <div class="quill-editor" :content="content" @change="onEditorChange($event)" v-quill:myQuillEditor="editorOption">
                    </div>
                </div>
            </div>
            <br />
            <div class="row mt-5">
                <div class="col-xl-5 form-group offset-xl-1">
                    <label for="">tagy (oddělte čárkou)</label>
                    <input type="text" class="form-control">
                </div>
                <div class="col-xl-5 form-group">
                    <label for="">Související články</label>
                    <input type="text" class="form-control">
                </div>
            </div>
            <div class="row">
                <div class="col-xl-5 form-group offset-xl-1">
                    Související články: ....
                </div>
                <div class="col-xl-5 form-group ">
                    <button type="submit" class="btn btn-primary">Submit</button>
                </div>
            </div>
        </form>
    </div>

</template>

<script>
export default {
    data() {
        return {
            content: '<p>I am Example</p>',
            editorOption: {
                // some quill options
                modules: {
                    toolbar: [['bold', 'italic', 'underline', 'strike'], ['blockquote', 'code-block']]
                }
            }
        };
    },
    methods: {
        onEditorChange({ editor, html, text }) {
            console.log('editor change!', editor, html, text);
            this.content = html;
        }
    }
};
</script>


