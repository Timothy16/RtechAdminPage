<template>
    <div>
        <SideMenu class="desktop-v"/>
        <SideMenuMobile class="mobile-v"/>
        <section class="home-section">
            <!-- <TopMenuDash /> -->
            <div class="home-content">
                <Nuxt />
            </div>
        </section>
        <!-- <a class="scroll-to-top rounded back-red" href="#page-top">
            <i class="fas fa-angle-up"></i>
        </a> -->
    </div>
</template>
<script >

import SideMenu from "./partials/SideMenu.vue";
import SideMenuMobile from "./partials/SideMenuMobile.vue";
import TopMenuDash from "./partials/TopMenuDash.vue";
export default {
    head() {
        return {
            bodyAttrs: {
                class: "login-main-body",
            },
            meta: [
                // { charset: 'utf-8' },
            ],
            link: [
                {
                    rel: "stylesheet",
                    type: "text/css",
                    href: "/dashboard/style.css",
                },
            ],
            script: [
                {
                    hid: "custom",
                    src: "/dashboard/script.js",
                    body: true,
                    defer: false,
                },
            ],
        };
    },
    components: {
        SideMenu, TopMenuDash, SideMenuMobile
    },
    

};
</script>




<style scoped>
.container-width{
    /* padding: .2rem 5rem; */
}
.mobile-v{
    display: none;
}
@media screen and (max-width : 578px){
    .mobile-v{
        display: block;
    }
    .desktop-v{
        display: none;
    }
}
@media screen and (max-width : 768px){
    .mobile-v{
        display: block;
    }
    .desktop-v{
        display: none;
    }
}
</style>