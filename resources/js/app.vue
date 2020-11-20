<template>
    <div class="wrapper">
        <h1>ages</h1>
        <router-link to="/">Home</router-link>
        <router-link to="/donations">Donations</router-link>
        <div class="content-wrapper">
            <router-view></router-view>
        </div>
        <app-footer/>
    </div>
</template>

<script>
export default {
    created(){
        console.log('Component mounted')
    }
}
</script>