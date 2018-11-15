<template>
    <div>
        <CreateForm :articleList="articleList" />
    </div>
</template>

<script>
import axios from '~/plugins/axios';
import CreateForm from '../../components/article/create-form';
export default {
    components: {CreateForm},
    async asyncData() {
        const response = await axios('/v1/article');
        return {
            articleList: response.data
        }
    }
}
</script>
