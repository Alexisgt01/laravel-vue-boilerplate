<template>
    <v-main style="overflow: hidden;">
        <v-container fluid fill-height class="pa-0 ma-0">
           <v-row justify="center" align="center" class="fill-height ma-0">
               <v-col cols="12" lg="6" sm="12" md="12" class="pa-0">

                   <router-view></router-view>
               </v-col>
               <v-col cols="12" md="12" lg="6" sm="12" v-if="$vuetify.breakpoint.lgAndUp" class="fill-height pa-0">
                 <v-img cover max-height="100vh" :src="__src('logo.png')"></v-img>
               </v-col>
           </v-row>

        </v-container>
    </v-main>
</template>

<script>

export default {
    name: "Index",
    mounted() {
        console.log(this.$vuetify.breakpoint);
    }
}
</script>

<style scoped>



</style>
