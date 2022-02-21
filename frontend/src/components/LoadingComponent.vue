<template>
    <v-dialog
            :value="value"
            hide-overlay
            persistent
            width="300"
    >
        <v-card
                color="primary"
                dark
        >
            <v-card-text>
                {{message}}
                <v-progress-linear
                        indeterminate
                        color="white"
                        class="mb-0"
                ></v-progress-linear>
            </v-card-text>
        </v-card>
    </v-dialog>
</template>

<script>
    export default {
        props: {
            value: {
                type: Boolean,
                default: false
            },
            message: {
                type: String,
                default: "Loading Data"
            }
        },
        name: "LoadingComponent"
    }
</script>

<style scoped>

</style>