<template>
<div>
<common-layout>
Home
</common-layout>
<err-page>
</err-page>

</div>
</template>
<script>
import CommonLayout from '../../layouts/Common'
import ErrPage from './Err'

export default {
    components: {
        ErrPage,
        CommonLayout
    }
}
</script>