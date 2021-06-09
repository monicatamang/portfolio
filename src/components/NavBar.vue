<template>
    <nav>
        <v-app-bar elevate-on-scroll color="white">
            <v-spacer></v-spacer>
            <v-app-bar-nav-icon x-large color="black" class="d-lg-none" @click="sidePanel = !sidePanel"></v-app-bar-nav-icon>
        </v-app-bar>
        <v-navigation-drawer absolute v-model="sidePanel" color="white">
            <v-list dense>
                <v-subheader class="black--text font-weight-bold pl-6 pb-2">Monica Tamang</v-subheader>
                <v-list-item-group v-model="selectedItem" color="primary">
                    <v-list-item v-for="link in links" :key="link.label" router :to="link.route">
                        <v-list-item-content>
                            <v-list-item-title class="pl-2">{{ link.label }}</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>
    </nav>
</template>
<script>
    export default {
        name: "nav-bar",
        data() {
            return {
                size: "1.1rem",
                sidePanel: false,
                selectedItem: 1,
                links: [
                    { 
                        icon: "mdi-home",
                        label: "Home",
                        route: "/",

                    },
                    {
                        icon: "mdi-account",
                        label: "About",
                        route: "/About"
                    },
                    {
                        icon: "mdi-folder",
                        label: "Projects",
                        route: "Projects"
                    },
                    {
                        icon: "mdi-email",
                        label: "Contact",
                        route: "/Contact" 
                    },
                ]
            }
        }
    }
</script>

<style scoped>
    .v-subheader {
        font-family: var(--titleFont);
        text-transform: uppercase;
        letter-spacing: 3px;
    }

    .v-list-item {
        font-family: var(--bodyFont);
    }
</style>