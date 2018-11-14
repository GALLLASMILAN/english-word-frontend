<template>
    <div class="well well-sm well-primary">
        <form class="form form-inline " role="form">
            <div class="form-group">
                <input type="text" class="form-control" value="" placeholder="Date" required />
            </div>
            <div class="form-group">
                <select class="form-control">
                    <option>Draft</option>
                    <option>Published</option>
                </select>
            </div>
            <div class="form-group">
                <button type="submit" class="btn btn-success btn-sm">
                    <span class="glyphicon glyphicon-floppy-disk"></span>Save</button>
                <button type="button" class="btn btn-default btn-sm">
                    <span class="glyphicon glyphicon-eye-open"></span>Preview</button>
            </div>
        </form>
    </div>
</template>

<script>
export default {};
</script>

