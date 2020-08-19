





<template>
  <resource-detail :resource="resource" />
</template>

<script>
  import { fetchResourceByIdApi } from '@/actions'
  import ResourceDetail from '@/components/ResourceDetail'
  export default {
    components: { ResourceDetail },
    data() {
      return {
        resource: null
      }
    },
    async created() {
      const { id } = this.$route.params
      this.resource = await fetchResourceByIdApi(id)
    }
  }
</script>
