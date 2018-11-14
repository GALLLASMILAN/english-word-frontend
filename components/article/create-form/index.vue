<template>

    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="panel-group" id="accordion">
                    <div class="panel panel-primary">
                        <div class="panel-heading">
                            <h4 class="panel-title">
                                <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne"><span class="glyphicon glyphicon-file">
                                    </span>POST NEW ARTICLE</a>
                            </h4>
                        </div>
                        <div id="collapseOne" class="panel-collapse collapse in">
                            <div class="panel-body">
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="form-group">
                                            <input type="text" class="form-control" placeholder="Title" required />
                                        </div>
                                        <div class="form-group">
                                            <textarea class="form-control" placeholder="Content" rows="5" required></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-6">
                                        <RelatedArticleFrom /> <!-- komponenta -->
                                    </div>
                                    <div class="col-md-6">
                                        <tagsForm /> <!-- komponenta -->
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-6">
                                        <FileLoader /> <!-- komponenta -->
                                    </div>
                                    <div class="col-md-6">
                                        <PublishForm /> <!-- komponenta -->
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            <h4 class="panel-title">
                                <a data-toggle="collapse" data-parent="#accordion" href="#collapseTwo"><span class="glyphicon glyphicon-th-list">
                                    </span>META DATA</a>
                            </h4>
                        </div>
                        <div id="collapseTwo" class="panel-collapse collapse">
                            <div class="panel-body">
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="form-group">
                                            <input type="text" class="form-control" placeholder="Title" required />
                                        </div>
                                        <div class="form-group">
                                            <input type="text" class="form-control" placeholder="Description" required />
                                        </div>
                                        <div class="form-group">
                                            <textarea class="form-control" placeholder="Keywords" required></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="well well-sm well-primary">
                                            <form class="form form-inline " role="form">
                                                <div class="form-group">
                                                    <a href="http://www.jquery2dotnet.com" class="btn btn-success btn-sm"><span class="glyphicon glyphicon-floppy-disk">
                                                        </span>Save</a>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
import FileLoader from './fileLoader';
import PublishForm from './publishForm';
import RelatedArticleFrom from './relatedArticleForm';
import tagsForm from './tagsForm';
export default {
    components: { FileLoader, PublishForm, RelatedArticleFrom, tagsForm }
};
</script>

<style>
.form-inline .form-group {
    margin-right: 10px;
}
.well-primary {
    background-color: #3498db;
}

.well-primary {
    color: rgb(255, 255, 255);
    background-color: rgb(66, 139, 202);
    border-color: rgb(53, 126, 189);
}
.glyphicon {
    margin-right: 5px;
}

.container {
    margin-top: 20px;
}
.image-preview-input {
    position: relative;
    overflow: hidden;
    margin: 0px;
    color: #333;
    background-color: #fff;
    border-color: #ccc;
}
.image-preview-input input[type='file'] {
    position: absolute;
    top: 0;
    right: 0;
    margin: 0;
    padding: 0;
    font-size: 20px;
    cursor: pointer;
    opacity: 0;
    filter: alpha(opacity=0);
}
.image-preview-input-title {
    margin-left: 2px;
}
</style>

